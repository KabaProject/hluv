import React from 'react'
import PropTypes from 'prop-types'
import './Navbar.scss'
import koFi from '@iconify-icons/simple-icons/ko-fi';

//Components
import Logo from '../../atom/Logo/Logo'
import Button from '../../atom/Button/Button'
import Language from '../../molecule/Language/Language'

const Navbar = ({lang = "es"}) => {
    return(
        <nav className="navbar">
            <div className="navbar__logo">
                <Logo/>
            </div>
            <div className="navbar__language">
                <Language lang={lang}/>
            </div>
            <div className="navbar__button">
                <Button 
                    version={'link'}
                    type={'primary'}
                    link={'ko-fi.com/hluvp'}
                    icon={koFi}
                >
                    {lang === "es" ? "Apoyanos": "Support Us"}
                </Button>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    //value: proptype
    lang: PropTypes.oneOf(['es', 'en'])
}

export default Navbar