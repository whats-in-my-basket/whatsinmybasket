import React from "react";
import { useMediaQuery } from "react-responsive";
import styles from "../../style/Nav.module.css"
import NavIconBtn from "./NavIconBtn";
import NavTitleBtn from "./NavTitleBtn";
import NavCategory from "./NavCategory";
import NavInfo from "./NavInfo";


export default function Nav({getShow}) {
    const isDesktop = useMediaQuery({ minDeviceWidth: 767 })
    const isBigDesktop = useMediaQuery({maxDeviceWidth: 1024})

    function getShowState(state) {
        getShow(state)
    }
    
    return (
        <>
            <div className={styles.nav}>
                {
                    isBigDesktop &&
                    <NavIconBtn 
                        getShowState={getShowState} 
                        className={styles.icon} 
                        srcLink={"https://img.icons8.com/ios-glyphs/30/ffffff/menu-rounded.png"}/>
                }
                <NavTitleBtn class={styles.navTitle}>React Shop</NavTitleBtn>
                {
                    isDesktop &&
                    <NavCategory class={styles.navCategory}/>
                }
                <NavInfo class={styles.navInfo} />
            </div>
        </>
    )
}

