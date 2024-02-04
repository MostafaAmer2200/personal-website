import React from 'react';
import './styles/WorkSection.css'
import { useEffect } from 'react';
import WorkCard from './workcard';
import WorkNotes from '../WorkNotes';
import animateObject from '../helpers/animate';


export default function WorkSection(){
    useEffect(() => {
        animateObject(".animation-slide-up", 0.3)
       }, [])

    return (
        <>
            <div className='work-section-container'>
                <h1>Professional & Personal Work</h1>
                <div className='horizontal-line'></div>
            </div>
            <div className='work-section-container-optimized'>
                <h1>Work</h1>
                <div className='horizontal-line-optimized'></div>
            </div>
            <div className='images-container animation-slide-up'>
                <span>
                    <img src={require('../assets/AWS.png')} alt='align box' width={300} height={300}/>
                </span>
                <span>
                <img src={require('../assets/CI.png')} alt='align box' width={300} height={300}/>
                </span>
                <span>
                <img src={require('../assets/API.png')} alt='align box' width={300} height={300}/>
                </span>
            </div>
            <div className='work-header-container' id="Work">
                <p>Here is a list of the things I did:</p>
            </div>
            {
                WorkNotes.map((workNote, index) => {
                    var category = Object.keys(workNote)[0]
                    var notes = workNote[category]
                    return <WorkCard key={index} title={category} notes={notes}/>
                })
            }
        </>
    )
}