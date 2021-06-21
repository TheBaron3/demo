import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer" style={{ backgroundImage: 'url(' + process.env.PUBLIC_URL + '/img/footer.svg)' ,marginTop:'5vw'}}>
                <p>Copyright © 2021. 北京航空航天大学ACT实验室-SMART小组</p>
            </div>
        )
    }
}
