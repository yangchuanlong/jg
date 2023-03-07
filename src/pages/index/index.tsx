import React, { useState, useEffect } from 'react';
import {
  Button, SearchBar, Tag, Popup, List,
} from 'antd-mobile';
import { useNavigate } from 'react-router-dom';
import useMobxStores from 'hooks/useMobxStores';

import styles from './style.less';
import factoryAreaPng from './demo.webp';

export default function Index() {
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
      <div
        className={styles.park}
        onClick={() => {
          navigate('/park-detail');
        }}
      >
        <img src={factoryAreaPng} alt="" />
        <div className={styles.areaInfo}>
          <div className={styles.parkName}>深圳科技园</div>
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

      <div
        className={styles.park}
        onClick={() => {
          navigate('/park-detail');
        }}
      >
        <img src={factoryAreaPng} alt="" />
        <div className={styles.areaInfo}>
          <div className={styles.parkName}>深圳科技园</div>
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

      <div className={styles.park}>
        <img src={factoryAreaPng} alt="" />
        <div className={styles.areaInfo}>
          <div className={styles.parkName}>深圳科技园</div>
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
      {
        parkList.map((park) => (
          <div className={styles.park}>
            <img src={factoryAreaPng} alt="" />
            <div className={styles.areaInfo}>
              <div className={styles.parkName}>{park.name}</div>
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
