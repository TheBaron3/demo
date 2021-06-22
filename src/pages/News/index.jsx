import React, { Component } from 'react'
import { ArrowRightOutlined, CalendarOutlined } from '@ant-design/icons';

function NewsCard(props){
    function getImageURI(){
        return process.env.PUBLIC_URL + 'public/img/Home/' + props.image;
    };
    return <div className="news">
                <div className="img_wrapper">
                    <div className="container" style={{width: '10vw',height: '12.5vw'}}>
                        <img src={getImageURI()} alt="" />
                    </div>
                </div>
                <div className="item">{props.title}</div>
                <div className='date'><i style={{ fontSize: '1.3vw' }}><CalendarOutlined /></i> &nbsp;{props.date}</div>
                <div className="button" style={{marginLeft:'2vw'}}>
                    <a href={props.link} style={{"text-decoration":"none"}}><p>查看详情 &nbsp;<i style={{ fontSize: '1.2vw' }}><ArrowRightOutlined /></i></p></a>
                </div>
            </div>
}

export default class News extends Component {
    render() {
        return (
            <div>
                <div className="news_wrapper">
                    <NewsCard 
                    image="h5.png"
                    title="北航SMART小组参加智源人工智能大会"
                    date="2021年5月30日"
                    link=""
                    />

                </div>
                <div className="footer" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img/footer.svg)`, marginTop: '13vw' }}>
                    <p>Copyright © 2021. 北京航空航天大学ACT实验室-SMART小组</p>
                </div>
            </div>
        )
    }
}
