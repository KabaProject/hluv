import React from 'react'
import Language from './Language'

export default {
    title: "Molecule/Language",
    component: Language
}

const Template = args => <Language {...args}/>

export const LanguageEs = Template.bind({})
LanguageEs.storyName = "Español"
LanguageEs.args = {
    lang: "es"
}

export const LanguageEn = Template.bind({})
LanguageEn.storyName = "Ingles"
LanguageEn.args = {
    lang: "en"
}