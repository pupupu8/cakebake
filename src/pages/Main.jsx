import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Main.module.css";
import { validateMain } from "./validationMain";
import img from "./pics/img.jpg"

function Main() {
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = {
            firstName: form.firstName.value,
            email: form.email.value,
        };

        const validationErrors = validateMain(formData);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            alert(
                `Подписка оформлена успешно!\n\nИмя: ${formData.firstName}\nEmail: ${formData.email}`
            );
            form.reset();
        }
    };

    return (
        <main className={styles.mainPage}>
            <section className={styles.hero}>
                <h1>Кондитерская «Cake Bake»</h1>
                <p>
                    Авторские десерты ручной работы из натуральных ингредиентов.
                    Создаем сладкие эмоции для любых событий
                </p>
            </section>

            <section className={styles.navigation}>
                <Link to="/about">
                    <button>О нас</button>
                </Link>
                <Link to="/products">
                    <button>Каталог</button>
                </Link>
                <Link to="/order">
                    <button>Оформить заказ</button>
                </Link>
            </section>

            <section className={styles.info}>
                <h2>Почему выбирают нас</h2>
                <p>
                    Мы используем только качественные ингредиенты,
                    создаем уникальный дизайн и гарантируем
                    свежесть каждого десерта
                </p>
                <img src={img} alt=""/>
            </section>

            <section className={styles.subscription}>
                <h2>Подписка на акции</h2>
                <p>
                    Подпишитесь и получайте лучшие предложения первыми
                </p>

                <form id="subscriptionForm" onSubmit={handleSubmit} noValidate>
                    <div>
                        <label htmlFor="firstName">Имя</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                        />
                        {errors.firstName && (
                            <span className={styles.error}>
                                {errors.firstName}
                            </span>
                        )}
                    </div>

                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                        />
                        {errors.email && (
                            <span className={styles.error}>
                                {errors.email}
                            </span>
                        )}
                    </div>

                    <button type="submit">
                        Подписаться
                    </button>
                </form>
            </section>
        </main>
    );
}

export default Main;
