import React from 'react'
import {ArrowRightOutlined } from '@ant-design/icons'

export function TeamLeader(props) {
    function getImageURI() {
        return process.env.PUBLIC_URL + '/img/Home/' + props.name + '.png';
    };
    return <div className="team-leader-intro">
        <img src={getImageURI()} alt="" />
        <p className="team-leader-name">{props.name} 教授</p>
    </div>
};

export function TeamEvent(props) {
    function getImageURI() {
        return process.env.PUBLIC_URL + '/img/Home/' + props.name + '.png';
    };
    return <div className="team-event-item">
        <img src={getImageURI()} alt="" />
        <p className="team-event-name">{props.name}</p>
    </div>
};

export function StudyField(props) {
    function getImageURI() {
        return process.env.PUBLIC_URL + '/img/Home/' + props.name + '.png';
    };
    return <div className="field-intro-item">
        <img src={getImageURI()} alt="" />
        <p className="field-intro-name">{props.name}</p>
        <p className="field-intro-info">{props.info}</p>
        <p className="field-intro-link"><i style={{ fontSize: '1vw' }}><ArrowRightOutlined /></i>&nbsp;&nbsp;详情</p>
    </div>
};

export function CoWorker(props) {
    function getImageURI() {
        return process.env.PUBLIC_URL + '/img/Home/' + props.name + '.svg';
    };
    return <div className="coworker-info">
        <img src={getImageURI()} alt="" />
        <p className="coworker-name">{props.name}</p>
    </div>
};
