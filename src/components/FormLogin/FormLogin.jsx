import classes from './FormLogin.module.css'
import {userState, useState} from 'react'


export default function FormLogin() {
    const [name, setName] = useState('')
    function handlerNameChange(event) {
        setName(event.target.value)
    }

    return (
        <section className={classes.container}>
            <form action="">
                <label htmlFor="name" className={classes.controlLabel}>enter your name</label>
                <input id='name' type="text" className={classes.controlInput} placeholder="Type Text" value={name} onChange={handlerNameChange} />
                <button className={classes.controlButton}>send</button>
            </form>
            <p>Name: {name}</p>
        </section>
    )
}