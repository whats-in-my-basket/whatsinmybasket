import React from "react";
import styles from "../../style/Section.module.css"
import Carousel from "../carousel/Carousel";
import SectionList from "./SectionList";

export default function Section () {
    return (
        <section className ={styles.section}>
            <Carousel />
            <div className={styles.content}>
                <SectionList />
            </div>
        </section>
    )
}