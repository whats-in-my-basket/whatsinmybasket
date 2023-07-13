import React, { useContext } from "react";
import { useParams } from "react-router";
import { ListContext } from "../../context";
import styles from "../../style/Section.module.css"
import productStyle from "../../style/Product.module.css"
import SectionPath from "../section/SectionPath";
import CardBody from "./CardBody";


export default function Product () {
    const list = useContext(ListContext)
    const { id } = useParams()
    const product = list[id-1]
    let name
    
    console.log(product)
    
    if(id <= 4 || id >= 15) {
        name = "패션"
    } else if (id >= 9 && id <= 14) {
        name = "디지털"
    } else name = "액세서리"
    
    if(product == undefined) {
        return
    } else {
        return (  
            <div className={styles.section}>
                <div className={productStyle.wrapper}>
                    <SectionPath startPath={name} endPath={product.title} />
                    <div className={productStyle.inner}>
                        <figure className={productStyle.cardImg}>
                            <img className={productStyle.img}src={product.image}></img>
                        </figure>
                        <CardBody product={product} />
                    </div>
                </div>
            </div>
        )
    }
}