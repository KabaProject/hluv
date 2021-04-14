import React from 'react'
import './Logo.scss'
import logo from '../../../assets/Logo.svg'

const Logo = (props) => {
    return(
        <img src={logo} alt="hluv logo" class="logo"/>
    )
}

export default Logo