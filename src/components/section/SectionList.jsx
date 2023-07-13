import React, { useContext } from "react";
import styles from "../../style/Section.module.css"
import SectionItem from "./SectionItem";

export default function SectionList () {
    return (
        <section className={styles.sectionList}>
            <SectionItem name="패션" />
            <SectionItem name="액세서리"/>
            <SectionItem name="디지털" />
        </section>
    )
}