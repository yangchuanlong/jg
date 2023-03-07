import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Tag, Button } from 'antd-mobile';
import useMobxStores from 'hooks/useMobxStores';
import styles from './style.less';

import factoryAreaPng from '../index/demo.webp';
import attentionSvg from '../park-detail/attention.svg';
import avatarSvg from '../park-detail/avatar.svg';
import compareSvg from '../park-detail/compare.svg';

export default function MyPark() {
  const navigate = useNavigate();
  const { myParkStore } = useMobxStores();
  const { parkList } = myParkStore;

  return (
    <div className={styles.container}>
      <div className={styles.pageTitle}>我的园区</div>

      <div className={styles.park}>
        <img src={factoryAreaPng} alt="" />
        <div className={styles.areaInfo}>
          <div className={styles.parkName}>深圳科技园</div>
          <div className={styles.account}>
            账号名:xxxx
          </div>
          <div className={styles.actionsWrapper}>
            <Button color="primary" size="mini">
              <span dangerouslySetInnerHTML={{ __html: avatarSvg }} />
              <span>专属客服</span>
            </Button>
          </div>
        </div>
      </div>

      <div className={styles.attentionWrapper}>
        <span dangerouslySetInnerHTML={{ __html: attentionSvg }} />
        <span>关注</span>
      </div>

      <div className={styles.itemInfoWrapper}>
        <div>项目情况</div>
      </div>
    </div>
  );
}
