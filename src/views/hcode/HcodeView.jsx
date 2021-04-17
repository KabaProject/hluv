import React from 'react'
import Navbar from '../../components/organism/Navbar/Navbar'
import Button from '../../components/atom/Button/Button'
import './Hcode.scss'

const HcodeView = ({state, value, onChange, link}) => {
    return(
        <section className="hcode">
            <Navbar/>
            <main className="hcode__main">
                <form className="hcode__form">
                <h1 className="hcode__title">Hcode Buscador</h1>
                <p className="hcode__subtitle">6-7 numeros</p>
                <input 
                    className="hcode__input"
                    type="text"
                    autoFocus={true} 
                    placeholder = "0000000"
                    onChange={onChange}
                    value={value}
                />
                <Button
                    version='go'
                    state={state}
                    link={link}
                />
                </form>
            </main>
        </section>
    )
}

export default HcodeView