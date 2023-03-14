import React from 'react';
import { Form, Input, Button } from 'antd-mobile';
import request from 'utils/request';
import styles from './register.less';

const FormItem = Form.Item;

export default function Register() {
  const [form] = Form.useForm();
  return (
    <Form
      layout="vertical"
      form={form}
      className={styles.form}
      footer={(
        <Button block type="submit" color="primary" size="large">
          提交
        </Button>
      )}
      onFinish={async (values) => {
        try {
          await request({
            url: '/biguiyuan/biguiyuan-api/user/register',
            method: 'POST',
            data: values,
          });
          console.log('注册成功');
        } catch (e) {
        }
      }}
    >
      <FormItem label="手机号码" name="phone" rules={[{ required: true, message: '请输入手机号码' }]}>
        <Input
          placeholder="请输入手机号码"
          clearable
        />
      </FormItem>
      <FormItem label="密码" name="password" rules={[{ required: true, message: '请输入密码' }]}>
        <Input
          placeholder="请输入密码"
          clearable
          type="password"
        />
      </FormItem>
      <FormItem
        label="重复密码"
        name="repeatPassword"
        rules={[
          { required: true, message: '请再次输入密码' },
          {
            validator: (_, value) => {
              if (value) {
                const pwd = form.getFieldValue('password');
                if (value !== pwd) {
                  return Promise.reject(new Error('再次输入号码要一致!'));
                }
                return Promise.resolve();
              }
            },
          },
        ]}
        dependencies={['password']}
      >
        <Input
          placeholder="请再次输入密码"
          clearable
          type="password"
        />
      </FormItem>
    </Form>
  );
}
