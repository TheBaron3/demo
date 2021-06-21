import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import './index.css'

const { Header, Content, Footer } = Layout;

export default class App extends Component {
    render() {
        return (
            <Layout>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    <div className="logo">
                        <img src={process.env.PUBLIC_URL + '/img/logo.png'} alt="" />
                    </div>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                </Header>
            </Layout>
        )
    }
}

