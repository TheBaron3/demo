import React, {Component} from 'react';
import {Layout, Image, Menu} from 'antd';
import MyNavLink from '../MyNavLink';
import {NavLink} from 'react-router-dom'
import {links} from '../../info';



const {Header, Content,  AntFooter } = Layout;

export default class MyHeader extends Component {
    render() {
        return(
        <Header className="header" style={{background:"white", height:"6.5vw"}}>
            <Image className="header-img" src={process.env.PUBLIC_URL + '/img/logo.svg'} alt="" preview={false}  style={{marginTop:"0.5vw", marginRight:"16vw", marginLeft:"9vw"}} />
            <Menu mode="horizontal" >
                {
                    links.map(link => {
                        return <Menu.Item key={link.id} to={link.path}  style={{marginTop:"1vw", }}>
                            <a className="header-txt" href={link.path}>{link.name}</a>
                        </Menu.Item>
                    })
                }
            </Menu>
            {/* {
                        links.map(link => {
                            return <MyNavLink key={link.id} to={link.path}>{link.name}</MyNavLink>;
                        })
            } */}
               
        </Header>
        )
    }
}