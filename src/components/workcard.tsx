import React from 'react';
import './styles/WorkSection.css'


interface WorkCardNotes {
    title:string,
    notes: string[]

}


export default function WorkCard({notes, title}:WorkCardNotes){
    return (
        <>
            <div className="work-container-title">
                <h1>{title}</h1>
            </div>
            <div className='cards-container animation-slide-up'>
                {
                    notes.map((note, index) => (
                        <div className='card-container'>
                            <p key={index}>{note}</p>
                        </div>
                    ))}
             </div>
        </>
    )
}