import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import useCounterState from "../../useCounterState"
import NavIconBtn from "./NavIconBtn";
import { ListContext } from "../../context";
import styles from "../../style/Nav.module.css"
import FilterList from "./filterList";

export default function NavInfo (props) {
    const [counter] = useCounterState()
    const [count, setCount] = useState(0)
    const [input, setInput] = useState([])
    const [filtered, setFiltered] = useState([])
    const list = useContext(ListContext)
    const isMobile = useMediaQuery({ maxDeviceWidth: 480 })

    useEffect(() => {
        if(!counter || counter.length == 0) {
            setCount(0)
        } else {
            let total = 0;
            for(let i = 0; i < counter.length; i++) {
                total += counter[i].count
            }
            setCount(total)
        }
    }, [counter])

    const onChangeHandler = (e) => {
        setInput(e.target.value)
    }

    useEffect(() => {
        const filterList = list.filter((item) => input.length > 0 && item.title.toLowerCase().includes(input.toLowerCase()))
        setFiltered(filterList)
    }, [input])

    console.log(input)
    // // console.log(list)
    console.log(filtered)

    return (
        <div className={props.class}>
            <NavIconBtn className={styles.sunIcon} srcLink={"https://img.icons8.com/material-outlined/24/ffffff/sun--v1.png"}/>
            { 
                !isMobile 
                    ? <>
                        <input 
                            className={styles.navInfoInput} 
                            type="text" 
                            value={input}
                            placeholder="검색"
                            onChange={onChangeHandler}
                        ></input>
                        <FilterList list={filtered}/>
                      </>
                    : <img className={styles.icon} src={"https://img.icons8.com/ios-filled/50/ffffff/search--v1.png"}></img>
            }
            <button className={styles.cartIconBtn}>
                <Link to="/cart">
                    <img className={styles.cartIcon} src={"https://img.icons8.com/fluency-systems-regular/48/ffffff/shopping-bag--v1.png"}/>
                    <span className={styles.cartCount}>{count}</span>
                </Link>
            </button>
        </div>
    )
}