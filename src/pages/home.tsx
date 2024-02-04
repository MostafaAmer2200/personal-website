import React from 'react';
import NavBar from "../components/navbar"
import AboutSection from '../components/about';
import WorkSection from '../components/work';
import ContactSection from '../components/contact';

export default function HomePage(){
    return (
    <React.Fragment>
      <NavBar />
      <AboutSection/>
      <WorkSection/>
      <ContactSection/>
    </React.Fragment>
    )
}