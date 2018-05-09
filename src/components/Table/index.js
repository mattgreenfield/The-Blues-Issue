import React from 'react'
import Link from 'gatsby-link'

import styles from './Table.module.css'

const Table = ({headings, data}) => {

    return (
        <table className={styles.Table}>
            <thead className={styles.TableHead}>
                <tr>
                { headings.map(heading => (
                    <th>{ heading }</th>
                ))}
                </tr>
            </thead>
            <tbody>
                { data.map(row => (
                    <tr>
                        { row.map(cell => (
                            <td>{ cell }</td>
                        )) }
                    </tr>
                ))}
            </tbody>
        </table>

    )
}

export default Table
