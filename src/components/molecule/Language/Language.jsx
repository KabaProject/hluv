import React from 'react'
import PropTypes from 'prop-types'
import './Language.scss'

//Components
import Flag from '../../atom/Flag/Flag'
import { Icon } from '@iconify/react'
import arrowsClockwiseBold from '@iconify-icons/ph/arrows-clockwise-bold';

const Language = ({lang = "es", }) => {

    return(
        <button 
            className="language"
        >
            <Flag country={lang === "es" ? "mxn" : "usa"}/>
            <span className="language__text">
                {lang === "es" ? "Español" : "English"}
            </span>
            <Icon icon={arrowsClockwiseBold} className="language__icon"/>
        </button>
    )
}

Language.propTypes = {
    //value: proptype
    lang: PropTypes.oneOf(['es', 'en'])
}

export default Language