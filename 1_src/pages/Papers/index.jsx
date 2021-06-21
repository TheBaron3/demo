import React, { Component } from 'react'
import { Paper } from '../../components/Papers_func'
import { papers } from '../../info'
import Footer from '../../components/Footer'

export default class Papers extends Component {
    render() {
        return (
            <div>
                <div className="paper">
                    <div className="line-4"></div>
                    <div className="year_wrapper">
                        <p className="year">ALL</p>
                        <p className="year">2021</p>
                        <p className="year">2020</p>
                        <p className="year">2019</p>
                        <p className="year">BEFORE</p>
                    </div>

                    {
                        papers.map(paper => {
                            return <Paper key={paper.id} title={paper.title} conference={paper.conference} author={paper.authors} link={paper.link} code_url={paper.code_url}/>
                        })
                    }
                </div>

                <Footer />
            </div>
        )
    }
}
