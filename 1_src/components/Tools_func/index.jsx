import React from 'react'
import { ArrowRightOutlined} from '@ant-design/icons';

export function Tool(props) {
    return <div className="tool">
        <div className='pic'>
            <img style={{ width: '80%' }} src={process.env.PUBLIC_URL + '/img/Tool/' + props.avatar} alt="" />
        </div>
        <div className='word'>
            <p className="toolTitle">{props.name}</p>
            <p className='toolInfo'>{props.info}</p>
            <div className="button">
                <p>查看详情 &nbsp;<i style={{ fontSize: '1.2vw' }}><ArrowRightOutlined /></i></p>
            </div>
        </div>
    </div>

}