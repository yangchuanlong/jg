import React from 'react';
import {
  Input, Toast, Form, Button, Picker, Checkbox,
} from 'antd-mobile';
import { Select } from 'antd';
import styles from './style.less';

const FormItem = Form.Item;

export default function Second() {
  return (
    <div className={styles.secondWrapper}>
      <div className={styles.secondHint}>为了更准确的给您推荐企业请耐心填写</div>
      <Form
        layout="horizontal"
        footer={(
          <Button block type="submit" color="primary" size="large">
            提交
          </Button>
        )}
        onFinish={(values) => {
          console.log(values);
        }}
      >
        <FormItem
          name="name"
          label="称呼"
          rules={[{ required: true, message: '称呼不能为空' }]}
        >
          <Input placeholder="请输入您的称呼" />
        </FormItem>
        <FormItem
          name="name"
          label="园区名称"
          rules={[{ required: true, message: '园区名称不能为空' }]}
        >
          <Input placeholder="请输入园区名称" />
        </FormItem>
        <FormItem
          name="address"
          label="园区位置"
          rules={[{ required: true, message: '请选择园区位置' }]}
        >
          <Button
            size="mini"
            onClick={async () => {
              const value = await Picker.prompt({
                columns: [
                  [
                    { label: '周一', value: 'Mon' },
                    { label: '周二', value: 'Tues' },
                  ],
                ],
              });
              Toast.show(`你选择了 ${value}`);
            }}
          >
            选择
          </Button>
        </FormItem>
        <FormItem
          name="name"
          label="出售价格"
          rules={[{ required: true, message: '请输入出售价格' }]}
        >
          <Input placeholder="出售价格" />
        </FormItem>
        <FormItem
          name="name"
          label="出租价格"
          rules={[{ required: true, message: '请输入出租价格' }]}
        >
          <Input placeholder="出租价格" />
        </FormItem>
        <FormItem label="所需企业类型">
          <Select
            options={[
              { label: '广州', value: 1 },
            ]}
          />
        </FormItem>
        <FormItem label="所属企业生产范围值" style={{ display: 'flex' }}>
          <FormItem><Input placeholder="最低值" /></FormItem>
          <FormItem><Input placeholder="最高值" /></FormItem>
        </FormItem>
        <FormItem label="园区内是否有申请排污总量（吨）">
          <Checkbox />
        </FormItem>
        <FormItem label="园区容积率">
          <Input placeholder="园区容积率" />
        </FormItem>
        <FormItem label="园区层高（米）">
          <Input placeholder="园区层高（米）" />
        </FormItem>
        <FormItem label="承重（吨）">
          <Input placeholder="承重（吨）" />
        </FormItem>
        <FormItem label="水费（元/吨）">
          <Input placeholder="水费（元/吨）" />
        </FormItem>
        <FormItem label="电费（元/度）">
          <Input placeholder="电费（元/度）" />
        </FormItem>
        <FormItem label="天然气费（元/立方）">
          <Input placeholder="天然气费（元/立方）" />
        </FormItem>
        <FormItem label="管理费（元/平方）">
          <Input placeholder="管理费（元/平方）" />
        </FormItem>
        <FormItem label="是否可自建厂房">
          <Checkbox />
        </FormItem>
        <FormItem label="是否可自建宿舍">
          <Checkbox />
        </FormItem>
      </Form>
    </div>
  );
}
