import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Row, Col } from 'antd';
import { Radio } from 'antd';
import { InputNumber } from 'antd';

const { Header, Content, Footer } = Layout;


class App extends Component {
  render() {
    return (

      <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>

          <Row>
      <Col span={6}><InputNumber min={1} max={10} defaultValue={3}  /></Col>
      <Col span={6}><InputNumber min={1} max={10} defaultValue={3}  /> </Col>
      <Col span={6}><InputNumber min={1} max={10} defaultValue={3}  /> </Col>
      <Col span={6}><Radio>hombre</Radio> <Radio>mujer</Radio></Col>
    </Row>






      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>
    );
  }
}

export default App;
