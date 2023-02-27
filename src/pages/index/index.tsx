import React from 'react';
import { Button, SearchBar } from 'antd-mobile';

export default function Index() {
  console.log('abc');

  return (
    <div>
      <SearchBar placeholder="请输入搜索内容" />
      <Button>test Button</Button>
    </div>
  );
}
