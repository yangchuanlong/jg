import React from 'react';
import { Button, SearchBar } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';

import styles from './style.less';
import factoryAreaPng from './demo.webp';

export default function Index() {
  const navigate = useNavigate();

  return (
    <div>
      <SearchBar placeholder="请输入搜索内容" />
      <div className={styles.ad}>招商广告</div>
      <div className={styles.address}>广东 。 深圳 。 南山区</div>
      <div className={styles.filterBtnsWrapper}>
        <Button color="primary">产业筛选</Button>
        <Button color="primary">其他筛选</Button>
      </div>
      <div
        className={styles.park}
        onClick={() => {
          navigate('/park-detail');
        }}
      >
        <img src={factoryAreaPng} alt="" />
        <div className={styles.areaInfo}>
          <div>
            <span>深圳科技园</span>
            企业数目:618,
            招商产业：电子信息，广电一体机，生物医药
          </div>
          <div className={styles.tagsWrapper}>
            <Button color="warning" size="small">免租金</Button>
            <Button color="warning" size="small">免租金</Button>
            <Button color="warning" size="small">定制厂房</Button>
          </div>
        </div>
      </div>

      <div
        className={styles.park}
        onClick={() => {
          navigate('/park-detail');
        }}
      >
        <img src={factoryAreaPng} alt="" />
        <div className={styles.areaInfo}>
          <div>
            <span>深圳科技园</span>
            企业数目:618,
            招商产业：电子信息，广电一体机，生物医药
          </div>
          <div className={styles.tagsWrapper}>
            <Button color="warning" size="small">免租金</Button>
            <Button color="warning" size="small">免租金</Button>
            <Button color="warning" size="small">定制厂房</Button>
          </div>
        </div>
      </div>

      <div className={styles.park}>
        <img src={factoryAreaPng} alt="" />
        <div className={styles.areaInfo}>
          <div>
            <span>深圳科技园</span>
            企业数目:618,
            招商产业：电子信息，广电一体机，生物医药
          </div>
          <div className={styles.tagsWrapper}>
            <Button color="warning" size="small">免租金</Button>
            <Button color="warning" size="small">免租金</Button>
            <Button color="warning" size="small">定制厂房</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
