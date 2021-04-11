import React from 'react'
import './DarkWrap.scss'

const DarkWrap = ({children}) => {
    return(
        <div className="dark-wrap">
            {children}
        </div>
    )
}

export default DarkWrap