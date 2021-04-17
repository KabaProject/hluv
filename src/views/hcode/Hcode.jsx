import React from 'react'
import PropTypes from 'prop-types'
import './Hcode.scss'
import HcodeView from './HcodeView'

const Hcode = (props) => {

    const [state, setState] = React.useState("disabled");
    const [value, setValue] = React.useState("");
    const [link, setLink] = React.useState("");

    const getLink = code => {
        let link
        switch(code.length){
            case 6:
                link = `https://nhentai.net/g/${code}/`
                break
            case 7:
                link = `https://hitomi.la/reader/${code}.html#1`
                break
        }
        return link
    } 

    const onChangeHandler = e => {
        if(e.target.value.match(/^[0-9]{0,7}$/)){
            setValue(e.target.value)
        }
        if(e.target.value.match(/^[0-9]{6,7}$/)){
            setLink(getLink(e.target.value))
            setState('loading')
            setTimeout(()=>{
                setState('enabled')
            }, 2000)
        }else{
            setLink('')
            setState('disabled')
        }
    }

    return(
        <HcodeView 
            state={state}
            value={value}
            onChange={onChangeHandler}
            link={link}
        />
    )
}

Hcode.propTypes = {
    //value: proptype
}

export default Hcode