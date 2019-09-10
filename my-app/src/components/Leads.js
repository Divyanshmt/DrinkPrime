import React, { PureComponent } from 'react';
import styles from './css/Leads.module.css'
import getLeads from '../services/api';


class Leads extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            leadList: []
        }
    }

    componentDidMount() {
        this.grabList()
    }

    async grabList() {
        const leadList  = await getLeads()
        this.setState({ leadList })
        console.log("leadList")
    }



    render() {
        const { leadList } = this.state;
        return (
            <div className={styles.wrapper}>
                <div className={styles.leadsContainer} >
                    <header>New Leads</header>
                    <div className={styles.quantityFilter}>
                        <span>Show</span>
                        <select>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                            <option value="40" selected >100</option>
                        </select>
                        <span>entries</span>
                    </div>
                    <div className={styles.leadtable}>
                        <div className={[styles.rowHeader]}>
                            <div className={styles.item}> LeadID </div>
                            <div className={styles.item}>Name</div>
                            <div className={styles.item}>Enquiry Date</div>
                            <div className={styles.item}>Enquiry Time</div>
                            <div className={styles.item}>Contact</div>
                        </div>
                        {
                            leadList.map((lead) => (
                                <div className={styles.row}>
                                    <div className={styles.item}>{lead._id}</div>
                                    <div className={styles.item}>{lead.name}</div>
                                    <div className={styles.item}>{lead.enquiryDate}</div>
                                    <div className={styles.item}>{lead.enquiryTime}</div>
                                    <div className={styles.item}>{lead.mobile}</div>
                                </div>
                            ))
                        }



                    </div>
                </div>
            </div>
        )
    }
}

export default Leads