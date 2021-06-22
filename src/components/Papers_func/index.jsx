import React from 'react'
import { ArrowRightOutlined, DownloadOutlined } from '@ant-design/icons';

export function Paper(props) {
    return <div className="pub-paper">
        <p className="paper-title">{props.title}</p>
        <p className="paper-conference">{props.conference}</p>
        <p className="paper-authors">{props.authors}</p>
        <div className="button_wrapper">
            <a href={props.link} style={{ "text-decoration": "none" }}>
                <div className="button">
                    <p>论文链接 &nbsp;<i style={{ fontSize: '1.2vw' }}><ArrowRightOutlined /></i></p>
                </div></a>

            <a href={props.code_url} style={{ "text-decoration": "none" }}>
                <div className="button" >
                    <p>代码下载 &nbsp;<i style={{ fontSize: '1.2vw' }}><DownloadOutlined /></i></p>
                </div></a>

        </div>
    </div>

}
