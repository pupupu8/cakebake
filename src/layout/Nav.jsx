import React from "react";
import { Link } from "react-router-dom"
import classes from "./Nav.module.css"
import logo from "./components/logo.jpg"

function Nav(){
    return (
        <header className={classes.header}>
            <div className={classes.logo}><Link to="/"><img src={logo} alt=""/></Link></div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Главная</Link>
                    </li>
                    <li>
                        <Link to="/about">О нас</Link>
                    </li>
                    <li>
                        <Link to="/products">Каталог</Link>
                    </li>
                    <li>
                        <Link to="/order">Сделать заказ</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav