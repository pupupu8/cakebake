import React from "react";
import classes from "./Products.module.css";
import { Link } from "react-router-dom";
import img from "./pics/img3.jpeg"
import img2 from "./pics/img4.jpeg"
import img3 from "./pics/img6.jpeg"
import img4 from "./pics/img5.jpeg"
import img5 from "./pics/img8.jpeg"
import img6 from "./pics/img9.png"
import img7 from "./pics/img7.jpeg"
import img8 from "./pics/img11.png"
import img9 from "./pics/img10.jpeg"

function Products() {
    return (
        <div className={classes.products}>
            <h1 className={classes.title}>Наша продукция</h1>

            <div className={classes.productsGrid}>
                <div className={classes.productCard}>
                    <img className={classes.productImage} src={img} alt=""/>
                    <h3 className={classes.productTitle}>Торт "Комплимент"</h3>
                    <p className={classes.productDescription}>
                        Торт с насыщенным шоколадным бисквитом, карамелью, арахисом и сливочно-арахисовым кремом 
                    </p>
                    <Link to="/order">
                        <button className={classes.orderButton}>Заказать</button>
                    </Link>
                </div>

                <div className={classes.productCard}>
                    <img className={classes.productImage} src={img2} alt=""/>
                    <h3 className={classes.productTitle}>Торт "Эльбрус"</h3>
                    <p className={classes.productDescription}>
                        Воздушный ореховый торт с нежным сырным кремом
                    </p>
                    <Link to="/order">
                        <button className={classes.orderButton}>Заказать</button>
                    </Link>
                </div>

                <div className={classes.productCard}>
                    <img className={classes.productImage} src={img3} alt=""/>
                    <h3 className={classes.productTitle}>Торт "Карамель"</h3>
                    <p className={classes.productDescription}>
                        Сочный бисквит, сметанный крем с варёной сгущенкой, карамельная начинка, украшен попкорном
                    </p>
                    <Link to="/order">
                        <button className={classes.orderButton}>Заказать</button>
                    </Link>
                </div>

                <div className={classes.productCard}>
                    <img className={classes.productImage} src={img4} alt=""/>
                    <h3 className={classes.productTitle}>Меренговый рулет с брусникой</h3>
                    <p className={classes.productDescription}>
                        Воздушное безе с сырным кремом и брусникой
                    </p>
                    <Link to="/order">
                        <button className={classes.orderButton}>Заказать</button>
                    </Link>
                </div>

                <div className={classes.productCard}>
                    <img className={classes.productImage} src={img5} alt=""/>
                    <h3 className={classes.productTitle}>Набор капкейков "Фисташковый"</h3>
                    <p className={classes.productDescription}>
                        Капкейки с фисташковым бисквитом, сливочно-сырным кремом с фисташкой и смородиновой начинкой, оформлены орехами 
                    </p>
                    <Link to="/order">
                        <button className={classes.orderButton}>Заказать</button>
                    </Link>
                </div>

                <div className={classes.productCard}>
                    <img className={classes.productImage} src={img6} alt=""/>
                    <h3 className={classes.productTitle}>Печенье "Курабье"</h3>
                    <p className={classes.productDescription}>
                        Классическое, хрупкое песочное печенье в виде цветочка с мармеладным джемом
                    </p>
                    <Link to="/order">
                        <button className={classes.orderButton}>Заказать</button>
                    </Link>
                </div>

                <div className={classes.productCard}>
                    <img className={classes.productImage} src={img7} alt=""/>
                    <h3 className={classes.productTitle}>Кекс "Рождественский"</h3>
                    <p className={classes.productDescription}>
                        Ароматный кекс на сливочном масле с апельсиновыми цукатами и каплями темного шоколада
                    </p>
                    <Link to="/order">
                        <button className={classes.orderButton}>Заказать</button>
                    </Link>
                </div>

                <div className={classes.productCard}>
                    <img className={classes.productImage} src={img8} alt=""/>
                    <h3 className={classes.productTitle}>Эклеры шоколадные</h3>
                    <p className={classes.productDescription}>
                        Заварное пирожное со взбитыми сливками и сгущенным молоком, покрытое шоколадной глазурью
                    </p>
                    <Link to="/order">
                        <button className={classes.orderButton}>Заказать</button>
                    </Link>
                </div>

                <div className={classes.productCard}>
                    <img className={classes.productImage} src={img9} alt=""/>
                    <h3 className={classes.productTitle}>Макарун в ассортименте</h3>
                    <p className={classes.productDescription}>
                        Миндальное пирожное с начинкой на выбор: фисташка, черника, маракуйя
                    </p>
                    <Link to="/order">
                        <button className={classes.orderButton}>Заказать</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Products;
