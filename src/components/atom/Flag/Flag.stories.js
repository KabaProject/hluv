import React from 'react'
import Flag from './Flag'

export default {
    title: 'Atom/Flag',
    component: Flag
}

const Template = args => <Flag {...args}/>

export const FlagMxn = Template.bind({})
FlagMxn.storyName = "Mexico"
FlagMxn.args = {
    country: 'mxn',
    size: 'medium'
}

export const FlagUsa = Template.bind({})
FlagUsa.storyName = "United States"
FlagUsa.args = {
    country: 'usa',
    size: 'medium'
}
