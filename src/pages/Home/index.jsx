import React, { Component } from 'react'
import { ClockCircleOutlined} from '@ant-design/icons'
import { teamLeaders, teamEvents, studyFields, coWorkers } from '../../info'
import { TeamLeader, TeamEvent, StudyField, CoWorker } from '../../components/Home_func'


export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="first-intro">
                    <div className="group-intro">
                        <p className='group-intro-slogan'>欢迎来到</p>
                        <p className='group-intro-slogan'>北航慧研（SMART）小组</p>
                        <p className='group-intro-news'>&nbsp;</p>

                        <p className='group-intro-info'>Smart小组隶属于北京航空航天大学计算机学院ACT实验室。</p>
                        <p className='group-intro-info'>
                            英文全称是<span style={{ color: 'rgb(217,0,27)', fontWeight: '900' }}>S</span>ignificant & <span style={{ color: 'rgb(2,133,190)', fontWeight: '900' }}>M</span>eaningful <span style={{ color: 'rgb(217,0,27)', fontWeight: '900' }}>A</span>pplication <span style={{ color: 'rgb(2,133,190)', fontWeight: '900' }}>R</span>esearch <span style={{ color: 'rgb(217,0,27)', fontWeight: '900' }}>T</span>eam
                        </p>
                        <p className='group-intro-news'>&nbsp;</p>

                        <p className='group-intro-info'>亦是该小组的奋斗目标“开展面向重大影响和关键价值应用的研究，中文简称慧研小组。</p>
                        <p className='group-intro-news'>&nbsp;</p>
                        <p className='group-intro-news'>&nbsp;</p>
                        <p className='group-intro-news'>&nbsp;</p>

                        <p className='group-intro-news'>最近新闻</p>
                        <p className=''>&nbsp;</p>

                        <p className='group-intro-news-item'>北航SMART课题组近期论文速递</p>
                        <p className='group-intro-news-date'>&nbsp;</p>
                        <p className='group-intro-news-date'><i style={{ color: 'rgb(2,133,190)', fontSize: '0.81vw' }}><ClockCircleOutlined /></i>&nbsp;&nbsp;2021年6月1日</p>

                        <div className='line-1'></div>

                        <p className='group-intro-news-item'>周号益博士通过博士答辩</p>
                        <p className='group-intro-news-date'>&nbsp;</p>
                        <p className='group-intro-news-date'><i style={{ color: 'rgb(2,133,190)', fontSize: '0.81vw' }}><ClockCircleOutlined /></i>&nbsp;&nbsp;2021年5月31日</p>
                    </div>

                    <img src={process.env.PUBLIC_URL + '/img/Home/blackboard.png'} alt="" />
                </div>

                <div className="ellipse"></div>

                <div className="second-intro">
                    <div className="team-intro">
                        <p className="team-intro-title-1">我们的团队</p>
                        <br />
                        <p className="team-intro-title-2">由李建欣教授，周号益助理教授指导</p>
                        <br />
                        <p className="team-intro-info">&nbsp;</p>
                        <p className="team-intro-info">SMART组现有博士研究生8名，硕士研究生8名，承担多项重点项目，例如国家电网大型电力变压器负载预测、大型变压器微型机器人内部巡检、北医三院慢阻肺急性加重实时预警等。此外，课题组还与众多国内外知名机构建立了广泛合作，例如UC Berkeley、Rutgers、MSRA、UCSD、国家电网、华为、东方航空等。</p>
                        <p className="team-intro-info">&nbsp;</p>
                        <p className="team-intro-info">SMART组诚邀优秀的研究生、本科生加盟！同时也热烈欢迎优秀的国际学生、港澳台学生加盟！</p>
                    </div>

                    <div className="team-leader">
                        {
                            teamLeaders.map(teamLeader => {
                                return <TeamLeader key={teamLeader.id} name={teamLeader.name} />;
                            })
                        }
                    </div>

                    <div className="team-event">
                        {
                            teamEvents.map(teamEvent => {
                                return <TeamEvent key={teamEvent.id} name={teamEvent.name} />;
                            })
                        }
                    </div>
                </div>

                <div className="third-intro">
                    <p className="field-intro-title">我们的研究领域</p>
                    <div className="field-intro">
                        {
                            studyFields.map(studyField => {
                                return <StudyField key={studyField.id} name={studyField.name} info={studyField.info} />;
                            })
                        }
                    </div>
                </div>

                <div className="home-footer" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img/Home/footer.svg)` }}>
                    <p className="coworker-title">我们的合作单位</p>
                    <div className="coworker-intro">
                        {
                            coWorkers.map(coWorker => {
                                return <CoWorker key={coWorker.id} name={coWorker.name} />;
                            })
                        }
                    </div>

                    {/* <p className="footer-contact">联系我们: <a href="https://github.com/BUAA-SMART/MessageBoard">Github留言板</a></p>
                    <div className="line-2"></div>
                    <p className="footer-content">Copyright © 2021. 北京航空航天大学ACT实验室-SMART小组</p> */}
                </div>
            </div>
        )
    }
}
