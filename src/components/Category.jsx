import React from "react";
import sectionStyle from "../style/Section.module.css"
import styles from "../App.module.css"
import SectionItem from "./section/SectionItem";
import SectionPath from "./section/SectionPath";

export default function Category ({category}) {
    if(category == "fashion") {
        return (
            <section className={sectionStyle.section}>
                <div className={sectionStyle.wrapper}>
                    <SectionPath endPath="패션"/>
                    <article className={styles.article}>
                        <SectionItem name= "패션" startIdx={Number(14)} endIdx={Number(19)} />
                    </article>
                </div>
            </section>
        )
    }
    if(category == "accessory") {
        return (
            <section className={sectionStyle.section}>
                <div className={sectionStyle.wrapper}>
                    <SectionPath endPath="액세서리"/>
                    <article className={styles.article}>
                        <SectionItem name= "액세서리" />
                    </article>
                </div>
            </section>
        )
    }
    if(category == "digital") {
        return (
            <section className={sectionStyle.section}>
                <div className={sectionStyle.wrapper}>
                    <SectionPath endPath="디지털"/>
                    <article className={styles.article}>
                        <SectionItem name= "디지털" startIdx={Number(12)} endIdx={Number(13)} />
                    </article>
                </div>
            </section>
        )
    }
}