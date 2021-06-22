import React, { Component } from 'react'
import { Student, Teacher } from '../../components/Team_func'
import { teamLeaders, phdStudents, masterStudents } from '../../info'
import Footer from '../../components/Footer'

export default class Team extends Component {
    render() {
        return (
            <div>
                <div className='teacher'>
                    <p className="title">导师</p>
                    <div className='line-3'>
                        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                    </div>
                    <div className='teacher-member'>
                        {
                            teamLeaders.map(teamLeader => {
                                return <Teacher key={teamLeader.id} name={teamLeader.name} position={teamLeader.position} work={teamLeader.work} />
                            })
                        }
                    </div>
                </div>

                <div className='student'>
                    <p className="title">博士研究生</p>
                    <div className='line-3'>
                        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                    </div>
                    <div className='student-member'>
                        {
                            phdStudents.map(phdStudent => {
                                return <Student key={phdStudent.id} name={phdStudent.name} avator={phdStudent.avator} year={phdStudent.year} major={phdStudent.major} link={phdStudent.link} />
                            })
                        }
                    </div>
                </div>

                <div className='student'>
                    <p className="title">硕士研究生</p>
                    <div className='line-3'>
                        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                    </div>
                    <div className='student-member'>
                        {
                            masterStudents.map(masterStudent => {
                                return <Student key={masterStudent.id} name={masterStudent.name} avator={masterStudent.avator} year={masterStudent.year} major={masterStudent.major} link={masterStudent.link} />
                            })
                        }
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}
