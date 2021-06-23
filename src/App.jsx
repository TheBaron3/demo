import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { links, routes } from './info'
import MyNavLink from './components/MyNavLink'
import MyHeader from './components/MyHeader'
import {Layout, Breadcrumb} from 'antd'
import MyFooter from './components/Footer'

const {Header, Content, AntFooter} = Layout;

export default class App extends Component {
    render() {
        return (
            <Layout className="layout">
                <MyHeader />
                <Content>
                <div className="main">
                    <Switch>
                        {
                            routes.map(route => {
                                return <Route key={route.id} path={route.path} component={route.component} />
                            })
                        }
                        <Redirect to="/home" />
                    </Switch>
                </div>
                </Content>
                <MyFooter />
            </Layout>

        )
    }
}
