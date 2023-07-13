import React from "react";
import { Link } from "react-router-dom";
import styles from "../../style/Drawer.module.css"

export default function DrawerItem (props) {
    return (
        <li className={styles.drawerItem}>
            <Link to={props.srcLink}>{props.children}</Link>
        </li>
    )
}