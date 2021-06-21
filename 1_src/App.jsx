import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { links, routes } from './info'
import MyNavLink from './components/MyNavLink'

export default class App extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <img className="header-img" src={process.env.PUBLIC_URL + '/img/logo.png'} alt="" />
                    {
                        links.map(link => {
                            return <MyNavLink key={link.id} to={link.path}>{link.name}</MyNavLink>;
                        })
                    }
                </div>

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
            </div >
        )
    }
}
