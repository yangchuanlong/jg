import React, { useEffect, useState } from 'react';
import { Tabs, List } from 'antd-mobile';
import { useLocation } from 'react-router-dom';
import request from 'utils/request';
import styles from './compare.less';
import feiyong from './fei-yong.png';
import chanyelian from './chan-ye-lian.png';
import peitao from './pei-tao.png';
import youhui from './you-hui.png';

export default function Compare(props) {
  const location = useLocation();
  const [compareData, setCompareData] = useState([{}, {}]);
  const [park1, park2] = compareData;
  useEffect(() => {
    const urlSearch = new URLSearchParams(location.search);
    const parkId = urlSearch.get('parkId');
    const contrastId = urlSearch.get('constrastId');
    console.log(parkId, contrastId);
    request({
      url: `/biguiyuan/biguiyuan-api/park/contrast-by-id/${parkId}/${contrastId}`,
    }).then(({ data }) => {
      setCompareData(data || [{}, {}]);
    });
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>园区对比</div>
      <Tabs defaultActiveKey="1">
        <Tabs.Tab title="费用" key="1">
          <List>
            {
              [
                { label: '园区名', field: 'name' },
                { label: '免租期', field: 'rentFreePeriod' },
                {
                  label: <>
                    <span>租金</span>
                    <span>(100方)</span>
                  </>,
                  field: 'rentFree',
                },
                {
                  label: <>
                    <span>水费</span>
                    <span>(100吨)</span>
                  </>,
                  field: 'waterRate',
                },
                {
                  label: <>
                    <span>电费</span>
                    <span>(1000度电)</span>
                  </>,
                  field: 'powerRate',
                },
                {
                  label: <>
                    <span>天然气费</span>
                    <span>(100方)</span>
                  </>,
                  field: 'naturalGasFee',
                },
                {
                  label: <>
                    <span>物业管理费</span>
                    <span>(100方)</span>
                  </>,
                  field: 'propertyManagementFee',
                },
                {
                  label: <>
                    <span>空调使用费</span>
                    <span>(100方)</span>
                  </>,
                  field: 'airConditionerUsageFee',
                },
                { label: <span style={{ fontWeight: 'bold' }}>每月总费用</span>, field: 'expensesShow' },
              ].map((item) => (
                <List.Item className={styles.feeCompareItem}>
                  <div>{item.label}</div>
                  <div>{park1[item.field]}</div>
                  <div>{park2[item.field]}</div>
                </List.Item>
              ))
            }
          </List>
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
