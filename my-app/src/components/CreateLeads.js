import React, { Component } from 'react';
import styles from './css/CreateLeads.module.css'

export class CreateLeads extends Component {
    render() {
        return (
            <div className={styles.wrapper}>
                <div class={styles.container}>
                    <header> Lead Information</header>
                    <form action="http://localhost:3001/createLeads" target ="_blank">
                        <div className = {styles.info}>
                        <div class="name">
                            <lable>Name :</lable><br />
                            <input type="text" name='name' />
                        </div>
                        <div class="phone">
                            <lable>Phone :</lable><br />
                            <input type="text" name="mobile" />
                        </div>
                        <div class="email">
                            <lable>Email :</lable><br />
                            <input type="email" name="email" />
                        </div>
                        </div>
                        <div className={styles.addressContainer}>
                            <div className={styles.address}>
                                <lable>Address :</lable><br />
                                <textarea type="text" name="adderss" ></textarea>
                            </div>
                            <div className={styles.area} >
                                <lable>Area :</lable><br />
                                <input type="text" name="area" onclick="window.location.href = 'https://website.com/my-account'" />
                            </div>
                        </div>
                        <input type="submit" value='Create Lead' />
                    </form>
                </div>
            </div>
        );
    }
}

export default CreateLeads;
