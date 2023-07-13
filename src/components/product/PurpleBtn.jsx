import React from "react";
import { Link } from "react-router-dom";
import styles from "../../style/Product.module.css"

export default function PurpleBtn ({getshowModal, link, children}) {

    function setModalState() {
        getshowModal("flex")
    }
    
    return (
        link
            ? <Link to={link} className={`${styles.cartBtn} ${styles.putInCartBtn}`}>{children}</Link>
            : <button onClick={setModalState}className={`${styles.cartBtn} ${styles.putInCartBtn}`}>{children}</button>
    )
}