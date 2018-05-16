import React from 'react';
import Link from 'gatsby-link';

import styles from './Table.module.css';

const Table = ({ headings, data }) => (
  <table className={styles.Table}>
    <thead className={styles.TableHead}>
      <tr>{headings.map((heading, index) => <th key={index}>{heading}</th>)}</tr>
    </thead>
    <tbody>
      {data.map((row, index) => (
        <tr key={index}>
          {row.map((cell, index) => (
            <td className={styles.TableCell} key={index}>
              {cell}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
