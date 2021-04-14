import React from 'react'
import PropTypes from 'prop-types'
import './Flag.scss'

//Icons
import {Icon} from '@iconify/react'
import Icons from '../../../consts/Icons'


const Flag = ({country = 'mxn', size = 'medium'}) => {
    return(
        <Icon icon={Icons[country]} className={`flag flag--${size}`}/>
    )
}

Flag.propTypes = {
    //value: proptype
    country: PropTypes.oneOf(['mxn', 'usa']),
    size: PropTypes.oneOf(['small', 'medium', 'large'])
}

export default Flag