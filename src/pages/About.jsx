import React from "react";
import { Link } from "react-router-dom";
import classes from "./About.module.css";
import img from "./pics/img.jpg"
import img2 from "./pics/img2.png"
import img3 from "./pics/img3.jpeg"
import img4 from "./pics/img4.jpeg"
import img5 from "./pics/img5.jpeg"
import img6 from "./pics/img6.jpeg"
import img7 from "./pics/img7.jpeg"

function About() {
    return (
        <div className={classes.about}>
            <h1 className={classes.title}>О нас</h1>

            <div className={classes.block}>
                <p className={classes.text}>
                    Мы — небольшая авторская кондитерская, которая с вниманием и любовью относится к каждому десерту.
                    В своей работе мы используем только натуральные и тщательно отобранные ингредиенты,
                    не применяем искусственные ароматизаторы и стремимся к тому, чтобы вкус наших изделий был по-настоящему насыщенным и гармоничным.
                    Для нас важно не только качество, но и внешний вид десертов.
                    Мы уделяем большое внимание деталям, аккуратному декору и современному оформлению,
                    чтобы каждое изделие становилось украшением стола и дарило положительные эмоции.
                </p>
                <img
                    className={classes.image} src={img} alt=""
                />
            </div>

            <div className={classes.block}>
                <img
                    className={classes.image} src={img2} alt=""
                />
                <p className={classes.text}>
                    В нашем ассортименте вы найдёте торты, капкейки, печенье, пирожные и другие сладости для повседневных заказов,
                    семейных праздников, дней рождения, свадеб и корпоративных мероприятий.
                    Мы с готовностью разрабатываем индивидуальные решения, учитывая вкусовые предпочтения,
                    тематику события и пожелания по оформлению.
                    Мы ценим доверие наших клиентов, поэтому всегда соблюдаем сроки,
                    открыты к диалогу и стремимся сделать процесс заказа простым и комфортным.
                    Наша цель — создавать десерты, к которым хочется возвращаться снова и снова.
                </p>
            </div>
            
            <h2 className={classes.subtitle}>Почему выбирают нас</h2>

            <ul className={classes.list}>
                <li>Натуральные ингредиенты</li>
                <li>Свежая выпечка</li>
                <li>Индивидуальный подход к каждому заказу</li>
            </ul>

            <h2 className={classes.subtitle}>Наши изделия</h2>

            <div className={classes.gallery}>
                <Link to="/products">
                    <img className={classes.img} src={img3} alt=""/>
                </Link>

                <Link to="/products">
                    <img className={classes.img} src={img4} alt=""/>
                </Link>

                <Link to="/products">
                    <img className={classes.img} src={img5} alt=""/>
                </Link>

                <Link to="/products">
                    <img className={classes.img} src={img6} alt=""/>
                </Link>

                <Link to="/products">
                    <img className={classes.img} src={img7} alt=""/>
                </Link>
            </div>


            <div className={classes.buttons}>
                <Link to="/order">
                    <button className={classes.button}>Оформить заказ</button>
                </Link>
                
                <Link to="/products">
                    <button className={classes.button}>Больше примеров изделий</button>
                </Link>
            </div>
        </div>
    );
}

export default About;

