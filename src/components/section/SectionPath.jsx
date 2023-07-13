import React from "react";
import styles from "../../style/Section.module.css"

export default function SectionPath ({startPath="홈", endPath}) {
    return (
        <div className={styles.menuList}>
            <span className={styles.homeText}>{startPath}</span>
            <span>{endPath}</span>
        </div>  
    )
}