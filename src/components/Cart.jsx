import React, { useState } from "react";
import sectionStyle from "../style/Section.module.css"
import styles from "../style/Cart.module.css"
import SectionPath from "./section/SectionPath"
import PurpleBtn from "./product/PurpleBtn";
import CartItem from "./CartItem";
import Modal from "./Modal"
import useCounterState from "../useCounterState"

export default function Cart() {
    const [counter] = useCounterState()
    const [show, setShow] = useState("none")
    console.log(counter)
    
    let total = 0
    if(counter) {
        for(let i = 0; i < counter.length; i++) {
            total += (Math.round(counter[i].item.price) * counter[i].count)
        }
    }

    function getshowModal(state) {
        setShow(state)
    }

    return (
        <section className={sectionStyle.section}>
            <div className={sectionStyle.wrapper}>
                <SectionPath endPath="장바구니"/>
                <div className={styles.wrapper}>
                    {!counter &&
                        <>
                            <div className={styles.infoGroup}>
                                <h1 className={styles.notionText}>장바구니에 물품이 없습니다.</h1>
                                <PurpleBtn link="/">담으러 가기</PurpleBtn>
                            </div>
                            <div className={styles.orderGroup}>
                                <div></div>
                                <div className={styles.order}>
                                    <span className={styles.price}>총 : $0</span>
                                    <PurpleBtn link="/">구매하기</PurpleBtn>
                                </div>
                            </div>
                        </>
                    }
                    {counter && counter.length > 0 &&
                        <div className={styles.contentWrapper}>
                            <div className={styles.content}>
                                <div className={styles.cardList}>      
                                        {counter.map((item, idx) => {
                                            return (
                                                <CartItem key={idx} info={item.item} />
                                            )
                                        })}
                                </div>
                                <div className={styles.totalPrice}>
                                    <span>{`총 : $${total}`}</span>
                                    <PurpleBtn getshowModal={getshowModal}>구매하기</PurpleBtn>
                                </div>
                            </div>
                        </div>
                    }
                    {counter && counter.length == 0 &&
                        <>
                            <div className={styles.infoGroup}>
                                <h1 className={styles.notionText}>장바구니에 물품이 없습니다.</h1>
                                <PurpleBtn link="/">담으러 가기</PurpleBtn>
                            </div>
                            <div className={styles.orderGroup}>
                                <div></div>
                                <div className={styles.order}>
                                    <span className={styles.price}>총 : $0</span>
                                    <PurpleBtn link="/">구매하기</PurpleBtn>
                                </div>
                            </div>
                        </>
                    }
                    <Modal showModal={show} />
                </div>
            </div>
        </section>
    )
}