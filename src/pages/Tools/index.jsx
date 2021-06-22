import React, { Component } from 'react'

import { Tool } from '../../components/Tools_func'
import Footer from '../../components/Footer'

export default class Tools extends Component {
    render() {
        return (
            <div>
                <Tool avatar='1.png' name='工业数智——设备智能维保知识管理APP' info='2020全国工业APP大赛创新成果转化一等奖'/>

                <div className="line-5"></div>

                <Tool avatar='2.png' name='智能流行病学调查平台' info='专注于新冠疫情下的智能流行病学调查'/>

                <Footer />
            </div>
        )
    }
}
