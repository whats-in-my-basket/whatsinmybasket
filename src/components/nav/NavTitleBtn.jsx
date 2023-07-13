import React from "react";
import { Link } from "react-router-dom";

export default function NavTitleBtn(props) {
    return (
        <Link to="/">
            <button className={props.class}>{props.children}</button>
        </Link>
    )
}