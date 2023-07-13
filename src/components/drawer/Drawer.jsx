import React from "react";
import styles from "../../style/Drawer.module.css"
import DrawerItem from "./DrawerItem";

export default function Drawer({showState}) {
    const items = [
        { 
            name: "패션",
            url: "/fashion"
        },
        { 
            name: "액세서리",
            url: "/accessory"
        },
        { 
            name: "디지털",
            url: "/digital"
        },
    ]
    
    return (
            <ul className={styles.drawerList}
                style={{
                    left: showState ? "0" : "-300px",
                    transition: "left 0.2s"
                }}
            >
                {items.map((item, index) => {
                    return (
                        <DrawerItem 
                            srcLink={item.url} 
                            key={index}
                        >
                            {item.name}
                        </DrawerItem>
                    )
                })}
            </ul>
    )
}