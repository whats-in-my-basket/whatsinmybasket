import React from "react";
import { Link } from "react-router-dom";
import styles from "../../style/Nav.module.css"

export default function FilterList({list}) {
    console.log(list)
    return (
        <ul className={styles.filterList}>
            {
                list.map((item) => {
                    return (
                        <li key={item.id} className={styles.filterItem}>
                            <Link to={`/product/${item.id}`} className={styles.productLink}>
                                {item.title}
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}