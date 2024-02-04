import React from 'react';
import { useEffect } from 'react';
import './styles/AboutSection.css'
import animateObject from '../helpers/animate';


export default function AboutSection(){
   useEffect(() => {
    animateObject('.animation-slidein')
   }, [])

    return (
        <>
            <div className='home' id="home">
                <h1>Hi, my name is</h1>
                <p className='colored-text'>Moustafa Amer</p>
                <p className='colored-text'>I am a full stack Engineer</p>
                <div className='short-intro'>
                    <p>I am a software Engineer, I specialize in cloud Engineering <br/> and I like to automate tasks and build things for the web.</p>
                </div>
            </div>
            <div className="about-me" id='about-me-section'>
                <h1>About Me</h1>
                <div className='horizontal-line'></div>
            </div>
            <div className="quick-intro">
                <p>Hello! My name is Moustafa and I enjoy building new software.</p>
                <p>I got into web development first in 2014, when I was about 14 years old. Eventually</p>
                <p>This has took my curiousity even further and learned more about new technologies.</p>
                <p>I have built python applications, high frequency trading algorithms with golang & web apps using many different</p>
                <p>frameworks like Node.JS, Flask & React.JS.</p>
                <p></p>
                <p></p>
                <p>I work in <span>FinTech</span> where I have built production APIs, built CI/CD pipelines </p>
                <p>& assisted engineers with building an enterprise grade cloud infrastructure on AWS for the firm. I've </p>
                <p>used latest technologies like kubernetes to manage containerized applications on EKS.</p>
                <p></p>
                <p></p>
                <p>Here are some technologies I've been working with :</p>
                <ul className='grid-list animation-slidein'>
                    <li>Kubernetes (EKS)</li>
                    <li>AWS</li>
                    <li>Python</li>
                    <li>GoLang</li>
                    <li>Typescript</li>
                    <li>Docker</li>
                    <li>CI/CD</li>
                    <li>Javascript (ES6+)</li>
                    <li>React.JS</li>
                    <li>Terraform</li>
                    <li>Terragrunt</li>
                    <li>Helm Charts</li>
                </ul>
            </div>
        </>
    )
}