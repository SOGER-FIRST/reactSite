
import logo from '/favicon.svg'
import MenuItem from './MenuItem/MenuItem.jsx'
import { useState } from 'react'

const data = ['Home', 'About us', 'Services', 'Contacts']
const textOnPage = {
    'btn1': 'Text1',
    'btn2': 'Text2',
    'btn3': 'Text3',
    'btn4': 'Text4'
}


export default function Header() {
    const [contentType, setContentType] = useState('')


    // let textInTab = null
    // if (contentType) {
    //     textInTab = <p>{textOnPage[contentType]}</p>
    // } else {
    //     textInTab = <p>press the button</p>
    // }
    function handleClick(type) {
        setContentType(type)
    }


    return (
        <header>
            <img src={logo} />
            <p>Далеко-далеко за словесными, горами в стране гласных и согласных жиувт рыбные текста. Если, назад?</p>
            <button>Перейти</button>

            <ul>
                <MenuItem
                    isActive={contentType === 'btn1'}
                    onClick={() => handleClick('btn1')}
                >{data[0]}</MenuItem>
                <MenuItem
                    isActive={contentType === 'btn2'}
                    onClick={() => handleClick('btn2')}
                >{data[1]}</MenuItem>
                <MenuItem
                    isActive={contentType === 'btn3'}
                    onClick={() => handleClick('btn3')}
                >{data[2]}</MenuItem>
                <MenuItem
                    isActive={contentType === 'btn4'}
                    onClick={() => handleClick('btn4')}
                >{data[3]}</MenuItem>

            </ul>
            {contentType && <p>{textOnPage[contentType]}</p>}
            {!contentType && <p>press the button</p>}
            {/* {textInTab} */}
        </header>
    )
}
