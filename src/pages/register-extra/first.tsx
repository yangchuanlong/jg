import React from 'react';
import { Button, Toast } from 'antd-mobile';

import qiyePng from './qiye.png';

import yuanquPng from './yuanqu.png';

import styles from './style.less';

export default function First(props) {
  const { type, handleTypeChange } = props;
  return (
    <div className={styles.firstContaienr}>
      <div className={styles.hint}>请选择您所归属的一方</div>
      <div
        className={`${styles.yuanquIconWrapper} ${type === 'yuanqu' ? 'active' : ''}`}
        onClick={() => handleTypeChange('yuanqu')}
      >
        <span>园区</span>
      </div>
      <div
        className={`${styles.qiyeIconWrapper} ${type === 'qiye' ? 'active' : ''}`}
        onClick={() => handleTypeChange('qiye')}
      >
        <span>企业</span>
      </div>
      <Button
        block
        type="submit"
        color="primary"
        size="large"
        onClick={() => {
          if (!type) {
            Toast.show({
              content: '请选择您所归属方',
            });
          }
        }}
      >
        确定
      </Button>
    </div>
  );
}
