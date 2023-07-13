import React from "react";

export default function NavIconBtn ({ className, srcLink, getShowState }) {
    let show = false

    function showDrawer (e) {
        if(e.target.className.split("_")[1] == "icon") {
            show = true
            getShowState(show)
        }
    }

    return (
        <>  
            <button onClick={showDrawer}>
                <img className={className} src={srcLink}/>
            </button>
        </>
    )

    
}