import React from 'react';
import styles from './css/Header.module.css'

function Header(props) {
    return (
        <div className ={styles.container}>
            <header className = {styles.header} > {props.content} </header>
        </div>
    )
}

export default Header;
