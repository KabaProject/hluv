import React from 'react'
import Button from './Button';
import { Icon } from '@iconify/react';
import koFi from '@iconify-icons/simple-icons/ko-fi';

export default {
    title: 'Atom/Button',
    component: Button
}

const Template = args => <Button {...args}/>

export const ButtonGoDisabled = Template.bind({})
ButtonGoDisabled.storyname = "Go Button Disabled"
ButtonGoDisabled.args = {
    state: "disabled",
    version: "go",
    type: "primary"
}

export const ButtonGoEnabled = Template.bind({})
ButtonGoEnabled.storyname = "Go Button Enabled"
ButtonGoEnabled.args = {
    state: "enabled",
    version: "go"
}

export const ButtonGoLoading = Template.bind({})
ButtonGoLoading.storyname = "Go Button Loading"
ButtonGoLoading.args = {
    state: "loading",
    version: "go"
}

export const ButtonLink = Template.bind({})
ButtonLink.storyname = "Button Link"
ButtonLink.args = {
    version: "link",
    icon: koFi,
    children: "Support Me",
    type: "primary"
}

export const ButtonNormal = Template.bind({})
ButtonNormal.storyname = "Button Normal"
ButtonNormal.args = {
    version: "normal",
    icon: koFi,
    children: "Support Me",
    type: "primary"
}