import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react';
import {
  Button, SearchBar, Tag, Popup, List,
} from 'antd-mobile';
import { useNavigate } from 'react-router-dom';
import useMobxStores from 'hooks/useMobxStores';

import styles from './style.less';
import factoryAreaPng from './demo.webp';

function Index() {
  const navigate = useNavigate();
  const [industrySearchVisible, setIndustrySearchVisible] = useState(false);
  const [otherSearchVisible, setOtherSearchVisible] = useState(false);
  const { indexStore } = useMobxStores();
  const { parkList } = indexStore;

  useEffect(() => {
    indexStore.getParkList();
  }, []);

  return (
    <div className={`page ${styles.wrapper}`}>
      <SearchBar placeholder="请输入搜索内容" className={styles.searchBar} />
      <div className={styles.ad}>招商广告</div>
      <div className={styles.address}>广东 · 深圳 · 南山区</div>
      <div className={styles.filterBtnsWrapper}>
        <Button
          color="primary"
          onClick={() => setIndustrySearchVisible(true)}
        >
          产业筛选
        </Button>
        <Button
          color="primary"
          onClick={() => setOtherSearchVisible(true)}
        >
          其他筛选
        </Button>
      </div>

      {
        indexStore.parkList.map((park, idx) => (
          <div
            className={styles.park}
            onClick={() => {
              const constrastId = idx < parkList.length - 1 ? parkList[idx + 1].parkId : parkList[idx - 1].parkId; // todo? 先用这个方法对比
              navigate(`/park-detail?parkId=${park.parkId}&constrastId=${constrastId}`);
            }}
          >
            <img src={park.icon || factoryAreaPng} alt="" />
            <div className={styles.areaInfo}>
              <div className={styles.parkName}>
                <span className={styles.name}>{park.name}</span>
                <span className={styles.enterpriseNum}>
                  企业数目:
                  {park.enterpriseNum}
                </span>
              </div>
              <div className={styles.briefTxt}>
                {park.introduction}
              </div>
              <div className={styles.tagsWrapper}>
                {
                  park.tagVOS?.map((tag) => <Tag color="#f5f7f9">{tag.tagName}</Tag>)
                }
              </div>
            </div>
          </div>
        ))
      }
      <Popup
        visible={industrySearchVisible}
        bodyStyle={{
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px',
          minHeight: '60vh',
        }}
      >
        <div className={styles.searchPanelTitle}>
          <span>产业筛选</span>
          <span
            className={styles.closeIcon}
            onClick={() => setIndustrySearchVisible(false)}
          >
            X
          </span>
        </div>
        <SearchBar placeholder="请输入搜索内容" className={styles.popupSearchBar} />
        <div className={styles.panelSectionTitle}>历史搜素</div>
        <div className={styles.searchItemsWrapper}>
          <span>电子信息</span>
          <span>新能源</span>
          <span>生物医药</span>
          <span>电子信息</span>
        </div>
        <div className={styles.panelSectionTitle}>热门搜素</div>
        <List>
          <List.Item className={styles.hotSearchItem}>
            <span>1</span>
            <span className={styles.keyword}>新能源</span>
            <span>热度888w</span>
          </List.Item>
          <List.Item className={styles.hotSearchItem}>
            <span>2</span>
            <span className={styles.keyword}>电子信息</span>
            <span>热度888w</span>
          </List.Item>
          <List.Item className={styles.hotSearchItem}>
            <span>3</span>
            <span className={styles.keyword}>生物医药</span>
            <span>热度888w</span>
          </List.Item>
        </List>
        <div className={styles.panelBtnsWrapper}>
          <Button>重置</Button>
          <Button color="primary" onClick={() => setIndustrySearchVisible(false)}>完成</Button>
        </div>
      </Popup>
      <Popup />
      <Popup
        visible={otherSearchVisible}
        bodyStyle={{
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px',
          minHeight: '60vh',
        }}
      >
        <div className={styles.searchPanelTitle}>
          <span>其他筛选</span>
          <span
            className={styles.closeIcon}
            onClick={() => setOtherSearchVisible(false)}
          >
            X
          </span>
        </div>
        <div className={styles.panelSectionTitle}>园区状态</div>
        <div className={styles.searchItemsWrapper}>
          <span>在建</span>
          <span>拎包入住</span>
        </div>
        <div className={styles.panelSectionTitle}>选择租售</div>
        <div className={styles.searchItemsWrapper}>
          <span>租赁</span>
          <span>出售</span>
        </div>
        <div className={styles.panelSectionTitle}>优惠与服务</div>
        <div className={styles.searchItemsWrapper}>
          <span>免租期</span>
          <span>租期优惠</span>
          <span>定制厂房</span>
        </div>
        <div className={styles.panelBtnsWrapper}>
          <Button>重置</Button>
          <Button color="primary" onClick={() => setOtherSearchVisible(false)}>完成</Button>
        </div>
      </Popup>
    </div>
  );
}

export default observer(Index);
