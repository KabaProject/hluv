import React from 'react'
import Navbar from './Navbar'

export default {
    title: 'Organism/Navbar',
    component: Navbar
}

const Template = args => <Navbar {...args}/>

export const NavbarEs = Template.bind({})
NavbarEs.storyName = "Español"
NavbarEs.args = {
    lang: 'es'
}

export const NavbarEn = Template.bind({})
NavbarEn.storyName = "English"
NavbarEn.args = {
    lang: 'en'
}