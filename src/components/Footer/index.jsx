import React, { Component } from 'react'
import {Layout} from 'antd';

const {Header, Content, Footer} = Layout;
export default class MyFooter extends Component {
    render() {
        return (
            <Footer style={{width:"100%", textAlign:"center"}}>
            {/* <div className="footer" style={{ backgroundImage: 'url(' + process.env.PUBLIC_URL + '/img/footer.svg)' ,marginTop:'5vw'}}> */}
                <p>Copyright © 2021. 北京航空航天大学ACT实验室-SMART小组</p>
                <p>联系我们:  <a href="https://github.com/BUAA-SMART/MessageBoard">Github留言板</a></p>
            {/* </div> */}
            </Footer>
        )
    }
}
