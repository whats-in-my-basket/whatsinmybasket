import React, { useState, useEffect } from "react";
import styles from "../style/Modal.module.css"
import productStyle from "../style/Product.module.css"
import useCounterState from "../useCounterState";

export default function Modal ({showModal}) {
    const [counter, setCounter] = useCounterState()
    console.log(counter)
    const [show, setShow] = useState("none")

    useEffect(() => {
        setShow(showModal)
    }, [showModal])

    function resetCart () {
        setCounter([])
        setShow("none")
    }

    function notShowModal () {
        setShow("none")
    }

    return (
        <div className={styles.modal} style={{display:show}}>
            <div className={styles.modalBox}>
                <h3>정말로 구매하시겠습니까?</h3>
                <p>장바구니의 모든 상품들이 삭제됩니다.</p>
                <div className={styles.modalBtnGroup}>
                    <button
                        className={`${productStyle.cartBtn} ${productStyle.putInCartBtn}`}
                        onClick={resetCart}
                    >
                        네
                    </button>
                    <button 
                        onClick={notShowModal} 
                        className={styles.btn}
                    >
                        아니오
                    </button>
                </div>
            </div>
        </div>
    )
}
