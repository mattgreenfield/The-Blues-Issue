import React from 'react'
import Link from 'gatsby-link'

import styles from './Date.module.css'

const Date = ({month, day}) => {
    const dayFirst = day.slice(0,1);
    const daySecond = day.slice(1,2);
    return (
        <div className={ styles.Date }>
            <div className={ styles.Month }>{ month }</div>
            <div className={ styles.Day }>
                <span className={ styles.DayDigit }>{ dayFirst }</span>
                <span className={ styles.DayDigit }>{ daySecond }</span>
            </div>
        </div>
    )
}

export default Date
