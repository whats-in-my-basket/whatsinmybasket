import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../style/Cart.module.css"
import useCounterState from "../useCounterState";

export default function CartItem ({info}) {
    const [counter, setCounter] = useCounterState()
    const currentInfo = counter.find((item) => item.item == info)
    const index = counter.findIndex(item => item.item == info)
    console.log(counter)
    console.log(info)
    
    const deleteItem = () => {
        if(counter[index].count > 1) {
            const copiedCounter = [...counter]
            copiedCounter[index].count -= 1;  
            setCounter(copiedCounter)
        } else {
            const copiedCounter = [...counter]
            copiedCounter[index].count -= 1;  
            setCounter(copiedCounter)
            const filtered = copiedCounter.filter((item) => item.count !== 0)
            setCounter(filtered)
        }
    }

    const addItem = () => {
        const copiedCounter = [...counter]
        copiedCounter[index].count += 1;
        setCounter(copiedCounter)
    }

    return (
        counter[index] &&
            <div className={styles.cardItem}>
                <Link className={styles.card} to={`/product/${info.id}`}>
                    <figure>
                        <img className={styles.cardImage} src ={info.image}></img>
                    </figure>
                </Link>
                <div className={styles.cardInfo}>
                    <p className={styles.cardTitle}>{info.title}</p>
                    <p className={styles.cardPrice}>{`$${Math.round(info.price)}`}</p>
                    <div className={styles.countBtnGroup}>
                        <button onClick={deleteItem} className={styles.countBtn}>-</button>
                        <button className={styles.countBtn}>{currentInfo.count}</button>
                        <button onClick={addItem} className={styles.countBtn}>+</button>
                    </div>
                </div>
            </div>
        
    )
}