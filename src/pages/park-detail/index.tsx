import React, { useEffect, useState } from 'react';
import { Tag, Button } from 'antd-mobile';
import { useNavigate, useLocation } from 'react-router-dom';
import request from 'utils/request';
import styles from './style.less';
import factoryAreaPng from '../index/demo.webp';
import attentionSvg from './attention.svg';
import avatarSvg from './avatar.svg';
import compareSvg from './compare.svg';

export default function ParkDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const [detail, setDetail] = useState({});
  console.log(location.search);

  useEffect(() => {
    const urlSearch = new URLSearchParams(location.search);
    const parkId = urlSearch.get('parkId');
    request({
      url: `/biguiyuan/biguiyuan-api/park/get-by-id/${parkId}`,
    }).then(({ data }) => {
      setDetail(data || {});
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.parkName}>{detail.name}</div>

      <div className={styles.park}>
        <img src={detail.icon || factoryAreaPng} alt="" />
        <div className={styles.areaInfo}>
          <div>
            企业数目:
            {detail.enterpriseNum}
          </div>
          <div className={styles.briefTxt}>
            {detail.introduction}
          </div>
          <div className={styles.tagsWrapper}>
            {
              detail.tagVOS?.map((tag) => <Tag color="#f5f7f9">{tag.tagName}</Tag>)
            }
          </div>
        </div>
      </div>

      <div className={styles.attentionWrapper}>
        <span dangerouslySetInnerHTML={{ __html: attentionSvg }} />
        <span>关注</span>
      </div>

      <div className={styles.sectionWrapper}>
        <div className={styles.sectionTitle}>项目情况</div>
        <div className={styles.sectionInfo}>{detail.introduction}</div>
      </div>

      <div className={styles.actionsWrapper}>
        <Button color="primary">
          <span dangerouslySetInnerHTML={{ __html: avatarSvg }} />
          <span>专属客服</span>
        </Button>
        <Button color="primary" onClick={() => navigate(`/compare${location.search}`)}>
          <span dangerouslySetInnerHTML={{ __html: compareSvg }} />
          <span>对比一下</span>
        </Button>
      </div>
    </div>
  );
}
