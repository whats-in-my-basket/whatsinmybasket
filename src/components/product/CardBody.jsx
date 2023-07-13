import React, { useContext, useEffect, useState } from "react";
import productStyle from "../../style/Product.module.css"
import { Link } from "react-router-dom";
import { CartContext } from "../../context";
import useCounterState from "../../useCounterState";

export default function CardBody({product}) {
    const [counter, setCounter] = useCounterState()
    const [cartItem, setCartItem] = useState()
    let cartList = useContext(CartContext)

    let count
    let checkedObj = Array(10)
    const rating = product ? product.rating.rate : null
    const decimal = (rating % 1).toFixed(1)

    decimal < 0.5
        ? count = Math.floor(rating) * 2
        : count = Number(Math.floor(rating) + 0.5) * 2

    for (let i = 0; i < checkedObj.length; i++) {
        i < count
            ? checkedObj[i] = {checked: true}
            : checkedObj[i] = {checked: false}
    }

    if(counter) {
        if(counter.length == 0) {
            cartList = [];
        }
    }

    const pushInCart = (e) => {
        e.target.style.backgroundColor = "hsl(262 80% 40% / 1)"
        e.target.style.borderColor = "hsl(262 80% 40% / 1)"

        cartItem !== product ? setCartItem(product) : null
    }
    
    useEffect(() => {
        cartItem ? cartList.push({item: cartItem, count: 1}) : null
        cartItem ? setCounter(cartList) : null
        console.log(cartList)
    }, [cartItem])
    
    return (
        <div className={productStyle.cardBody}>
            <h2 className={productStyle.cardTitle}>
                {product.title}
                <span className={productStyle.badge}>NEW</span>
            </h2>
            <p className={productStyle.cardDesc}>{product.description}</p>
            <div className={productStyle.reviewGroup}>
                <div className={productStyle.cardStars}>
                    {checkedObj.map((input, idx) => {
                        return (
                            <input 
                                key= {idx}
                                className={productStyle.star} 
                                type="radio" 
                                name="rating" 
                                value=""
                                disabled 
                                checked={input.checked} >
                            </input>
                        )
                    })}
                </div>
                <div className={productStyle.cardRating}>{`${product.rating.rate} / ${product.rating.count} 참여`}</div>
            </div>
            <p className={productStyle.cardPrice}>{`$${Math.round(product.price)}`}</p>
            <div className={productStyle.btnGroup}>
                <button 
                    className={`${productStyle.cartBtn} ${productStyle.putInCartBtn}`}
                    onClick={pushInCart}
                >
                    장바구니에 담기
                </button>
                <Link to={"/cart"} className={`${productStyle.cartBtn} ${productStyle.goToCartBtn}`}>장바구니로 이동</Link>
            </div>
        </div>
    )
}