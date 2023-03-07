import React, { useEffect, useState } from 'react';
import { Tag, Button } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';
import styles from './style.less';
import factoryAreaPng from '../index/demo.webp';
import attentionSvg from './attention.svg';
import avatarSvg from './avatar.svg';
import compareSvg from './compare.svg';

export default function ParkDetail() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.parkName}>深圳科技园</div>

      <div className={styles.park}>
        <img src={factoryAreaPng} alt="" />
        <div className={styles.areaInfo}>
          <div className={styles.briefTxt}>
            企业数目:618,
            招商产业：电子信息，广电一体机，生物医药
          </div>
          <div className={styles.tagsWrapper}>
            <Tag color="#f5f7f9">免租金</Tag>
            <Tag color="#f5f7f9">免租金</Tag>
            <Tag color="#f5f7f9">定制厂房</Tag>
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

      <div className={styles.actionsWrapper}>
        <Button color="primary">
          <span dangerouslySetInnerHTML={{ __html: avatarSvg }} />
          <span>专属客服</span>
        </Button>
        <Button color="primary" onClick={() => navigate('/compare')}>
          <span dangerouslySetInnerHTML={{ __html: compareSvg }} />
          <span>对比一下</span>
        </Button>
      </div>
    </div>
  );
}
