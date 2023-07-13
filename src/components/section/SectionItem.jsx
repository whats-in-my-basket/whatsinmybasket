import React, {useState, useEffect, useContext} from "react";
import styles from "../../style/Section.module.css"
import ProductList from "./ProductList";

export default function SectionItem({name, startIdx, endIdx}) {
    return (
        <>
            <h2 className={styles.title}>{name}</h2>
            <div className={styles.productList} datascroll="true">
                {
                    name == "패션" &&
                    <ProductList category="fashion" startIdx={startIdx} endIdx={endIdx} />
                } 
                {
                    name == "액세서리" &&
                    <ProductList category="accessory" startIdx={startIdx} endIdx={endIdx} />
                }
                {
                    name == "디지털" &&
                    <ProductList category="digital" startIdx={startIdx} endIdx={endIdx} />
                }
            </div>
        </>
    )
}