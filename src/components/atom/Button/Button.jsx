import React from 'react'
import PropTypes from 'prop-types'
import './Button.scss'

//Icons
import { Icon } from '@iconify/react';
import spinnerIcon from '@iconify-icons/gg/spinner';


const ButtonGo = ({state, onClick}) => {

    const onClickHandler = () => {
        if(state === "enabled"){
            onClick()
        }
    }

    return(
        <button 
            className={`button button-go button-go--${state}`} 
            onClick={onClickHandler} 
            disabled = {state === "disabled"}
        >
            {
                state !== "loading" ? "GO" : <Icon icon={spinnerIcon} className="button-go__spinner"/>
            }
        </button>
    )
}

const ButtonLink = ({type, link, children, icon}) => {
    return (
        <a href={`https://${link}`} className={`button button-link button--${type}`}>
            {icon ? <Icon icon={icon} className="button-link__icon"/> : null}
            <span className="button-link__text">{children}</span>
        </a>
    )
}

const ButtonNormal = ({type, icon, onClick, children}) => {

    const onClickHandler = e => {
        e.preventDefault();
        onClick();
    }

    return (
        <button className={`button button-normal button--${type}`} onClick={onClickHandler} >
            {icon ? <Icon icon={icon} className="button-normal__icon"/> : null}
            <span className="button-normal__text">{children}</span>
        </button>
    )
}

const Button = (props) => {
    
    const {version} = props
    
    switch(version){
        case "go":
            return <ButtonGo {...props}/>
        case "link":
            return <ButtonLink {...props}/>
        case "normal":
            return <ButtonNormal {...props}/>
    }
}


Button.propTypes = {
    //value: proptype
    version: PropTypes.oneOf(['go', 'link', 'normal']).isRequired,
    state: PropTypes.oneOf(['enabled', 'disabled', 'loading']),
    onClick: PropTypes.func,
    children: PropTypes.string,
}

export default Button