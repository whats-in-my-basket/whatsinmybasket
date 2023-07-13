import React, { useContext, useEffect, useState } from "react";
import styles from "../../style/Section.module.css"
import { Link } from "react-router-dom";
import { ListContext } from "../../context";

export default function ProductList ({category, startIdx, endIdx}) {
    const list = useContext(ListContext)
    const [state, setState] = useState(category)

    let fashionProducts = []
    let accessoryProducts = []
    let digitalProducts = []
 
    for(let i = 0; i <= 3; i++) {
        fashionProducts.push(list[i])
    }
    for(let i = 4; i <= 7; i++) {
        accessoryProducts.push(list[i])
    }
    for(let i = 8; i <= 11; i++) {
        digitalProducts.push(list[i])
    }

    if(!startIdx && endIdx) {
        return 
    } else {
        if(category == "fashion") {
            for(let i = startIdx; i <= endIdx; i++) {
                fashionProducts.push(list[i])
            }
        }
        if(category == "accessory") {
            for(let i = startIdx; i <= endIdx; i++) {
                accessoryProducts.push(list[i])
            }
        }
        if(category == "digital") {
            for(let i = startIdx; i <= endIdx; i++) {
                digitalProducts.push(list[i])
            }
        }
    }
    
    if(state == "fashion") {
        if(fashionProducts.every((item) => item == undefined)) {
            return
        } else { 
            return (
                <>
                    {fashionProducts.map((item) => {
                        return (
                            <Link key= {item.id} className={styles.product} to={`/product/${item.id}`}>
                                <figure>
                                    <img className={styles.cardImage} src ={item.image}></img>
                                </figure>
                                <div className={styles.cardInfo}>
                                    <p className={styles.cardTitle}>{item.title}</p>
                                    <p className={styles.cardPrice}>{`$${Math.round(item.price)}`}</p>
                                </div>
                            </Link>
                        ) 
                    })}
                </>
            )
        }
    }
    if(state == "accessory") {
        if(accessoryProducts.every((item) => item == undefined)) {
            return
        } else { 
            return (
                <>
                    {accessoryProducts.map((item) => {
                        return (
                            <Link key= {item.id} className={styles.product} to={`/product/${item.id}`}>
                                <figure>
                                    <img className={styles.cardImage} src ={item.image}></img>
                                </figure>
                                <div className={styles.cardInfo}>
                                    <p className={styles.cardTitle}>{item.title}</p>
                                    <p className={styles.cardPrice}>{`$${Math.round(item.price)}`}</p>
                                </div>
                            </Link>
                        ) 
                    })}
                </>
            )
        }
    }
    if(state == "digital") {
        if(digitalProducts.every((item) => item == undefined)) {
            return
        } else { 
            return (
                <>
                    {digitalProducts.map((item) => {
                        return (
                            <Link key= {item.id} className={styles.product} to={`/product/${item.id}`}>
                                <figure>
                                    <img className={styles.cardImage} src ={item.image}></img>
                                </figure>
                                <div className={styles.cardInfo}>
                                    <p className={styles.cardTitle}>{item.title}</p>
                                    <p className={styles.cardPrice}>{`$${Math.round(item.price)}`}</p>
                                </div>
                            </Link>
                        ) 
                    })}
                </>
            )
        }
    }  
}