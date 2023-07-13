import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import styles from "../../style/Carousel.module.css"
import CarouselItem from "./CarouselItem";

export default function Carousel () {
    const [index, setIndex] = useState(0)
    const [width, setWidth] = useState(document.documentElement.clientWidth)

    const isDesktop = useMediaQuery({minDeviceWidth: 1024})
    const isTablet = useMediaQuery({maxDeviceWidth: 1024})

    const items= [
        { 
            title: "물빠진 청바지",
            desc: "이제 막 도착한 패션 청바지를 구경해보세요.",
            id: "categoryFirst",
            url: "fashion",
            img: "http://placeimg.com/700/700"
        },
        {
            title: "신속한 업무처리!",
            desc: "다양한 디지털 상품을 둘러보세요.",
            id: "categorySecond",
            url: "digital",
            img: "http://placeimg.com/700/700"
        },
        {
            title: "신선한 식품",
            desc: "농장 직배송으로 더욱 신선한 식료품을 만나보세요.",
            id: "categoryThird",
            url: "accessory",
            img: "http://placeimg.com/700/700"
        }
    ]

    const handleResize = () => {
        setWidth(document.documentElement.clientWidth)
    }

    function prevSildeShow () {
        if(index === 0) {
            setIndex(2)
        } else {
            setIndex(index - 1)
        }
    }

    function nextSildeShow () {
        if (index === 2) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        } 
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    })

    useEffect(() => {
        setIndex(0)
    }, [])

    return (
        <div className={styles.wrapper}>
            {isDesktop &&
                <>
                    <button className={styles.prevBtn} onClick={prevSildeShow} style={{height: "700px"}}>🞀</button>
                    <button className={styles.nextBtn} onClick={nextSildeShow} style={{height: "700px"}}>🞂</button>
                </>
            }
            {isTablet &&
                <>
                    <button className={styles.prevBtn} onClick={prevSildeShow} style={{height: "220px"}}>🞀</button>
                    <button className={styles.nextBtn} onClick={nextSildeShow} style={{height: "220px"}}>🞂</button>
                </>
            }
            <ul className={styles.slideList} style={{transform: `translate3d(-${width * index}px, 0, 0)`}}>
                {items.map((item, idx) => {
                    return (
                        <CarouselItem 
                            name={styles.slide} 
                            selected={index == idx ? styles.selected : ""}
                            key={item.id}
                            height={isDesktop ? "700px" : "220px"}
                            info={item}
                            img={item.img}
                        />
                    )  
                })}
            </ul>
        </div>
    )
}