import React from "react";
import { Link } from "react-router-dom";
import styles from "../../style/Nav.module.css"

export default function NavCategory (props) {
    return (
        <div className={props.class}>
            <Link to="/fashion" className={styles.navCategoryLink}>패션</Link>
            <Link to="/accessory" className={styles.navCategoryLink}>액세서리</Link>
            <Link to="/digital" className={styles.navCategoryLink}>디지털</Link>
        </div>
    )
}