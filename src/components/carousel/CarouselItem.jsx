import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../../style/Carousel.module.css";

export default function CarouselItem ({name, selected, height, info, img}) {
    
    return (
            <>
                <li 
                    className={`${name} ${selected}`}
                    style={{height: `${height}`}}
                >
                    <div 
                        className={styles.slideImg} 
                        style={{height: `${height}`, background: `url(${img})`}}
                    >
                    </div> 
                    <div 
                        className={styles.description} 
                        style={height == "700px" 
                                ? {minWidth: "1025px"} 
                                : {width: document.documentElement.clientWidth}
                        }
                    >
                        <h2 className={styles.descTitle}>{info.title}</h2>
                        <p className={styles.descDesc}>{info.desc}</p>
                        <Link className={styles.linkBtn} to={`/${info.url}`}>
                            바로가기
                            <img src="https://img.icons8.com/ios-glyphs/30/a6adba/arrow.png"/>
                        </Link>
                    </div>
                </li>
            </>
        )
}