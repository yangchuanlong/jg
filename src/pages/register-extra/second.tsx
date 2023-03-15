import React from 'react';
import {
  Input, Toast, Form, Button, Picker,
} from 'antd-mobile';
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
      </Form>
    </div>
  );
}
