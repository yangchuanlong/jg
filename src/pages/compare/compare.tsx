import React, { useEffect, useState } from 'react';
import { Tabs } from 'antd-mobile';
import styles from './compare.less';
import feiyong from './fei-yong.png';
import chanyelian from './chan-ye-lian.png';
import peitao from './pei-tao.png';
import youhui from './you-hui.png';

export default function Compare(props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>园区对比</div>
      <Tabs defaultActiveKey="1">
        <Tabs.Tab title="费用" key="1">
          <img src={feiyong} alt="" />
        </Tabs.Tab>
        <Tabs.Tab title="产业链" key="2">
          <img src={chanyelian} alt="" />
        </Tabs.Tab>
        <Tabs.Tab title="周边配套" key="3">
          <img src={peitao} alt="" />
        </Tabs.Tab>
        <Tabs.Tab title="政策优惠" key="4">
          <img src={youhui} alt="" />
        </Tabs.Tab>
      </Tabs>
    </div>
  );
}
