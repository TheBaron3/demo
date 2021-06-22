import React from 'react'
function getImageURI(x){
    return process.env.PUBLIC_URL + '/img/Home/' + x.name + '.png';
}

export function Teacher(props){
    // function getImageURI(){
    //     return process.env.PUBLIC_URL + '/img/Home/' + props.name + '.png';
    // };
    return <div className='teacher-intro'>
        <img src={getImageURI(props)} alt="" />
        <p className='teacher-name'>{props.name}</p>
        <p className='teacher-position'>{props.position}</p>
        <p className='teacher-work'>{props.work}</p>
    </div>
};

export function Student(props){
    function getImageURI(){
        return process.env.PUBLIC_URL + '/img/Team/' + props.avator;
    };
    return <div className="student-intro">
        <a href={props.link}><img src={getImageURI()} alt="" /></a>
        <p className='student-name'>{props.name}</p>
        <p className='student-major'>{props.year}入学，研究方向为{props.major}</p>
    </div>
};


