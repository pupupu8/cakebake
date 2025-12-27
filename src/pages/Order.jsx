import React, { useState } from "react";
import classes from "./Order.module.css";
import { validateOrder } from "./validation";

function Order() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [product, setProduct] = useState("");
    const [errors, setErrors] = useState({});
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateOrder({
            firstName,
            lastName,
            phone,
            email,
            product
        });

        setErrors(validationErrors);
        if (Object.keys(validationErrors).length > 0) {
            return;
        }

        alert(
            `Спасибо за заказ, ${firstName} ${lastName}!\n
Телефон: ${phone}\n
Email: ${email}\n
Изделие: ${product}`
        );

        setFirstName("");
        setLastName("");
        setPhone("");
        setEmail("");
        setProduct("");
        setErrors({});
    };

    return (
        <div className={classes.order}>
            <h2 className={classes.h2}>Оформление заказа</h2>
            <form onSubmit={handleSubmit} noValidate>
                <div>
                    <label className={classes.text}>Имя:</label><br />
                    <input
                        className={classes.form}
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Введите имя"
                    />
                    {errors.firstName && (
                        <div className={classes.error}>{errors.firstName}</div>
                    )}
                </div>

                <div>
                    <label className={classes.text}>Фамилия:</label><br />
                    <input
                        className={classes.form}
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Введите фамилию"
                    />
                    {errors.lastName && (
                        <div className={classes.error}>{errors.lastName}</div>
                    )}
                </div>

                <div>
                    <label className={classes.text}>Номер телефона:</label><br />
                    <input
                        className={classes.form}
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+7 (___) ___-__-__"
                    />
                    {errors.phone && (
                        <div className={classes.error}>{errors.phone}</div>
                    )}
                </div>

                <div>
                    <label className={classes.text}>Email:</label><br />
                    <input
                        className={classes.form}
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="example@mail.com"
                    />
                    {errors.email && (
                        <div className={classes.error}>{errors.email}</div>
                    )}
                </div>

                <div>
                    <label className={classes.text}>Кондитерское изделие:</label><br />
                    <select
                        className={classes.form}
                        value={product}
                        onChange={(e) => setProduct(e.target.value)}
                    >
                        <option value="">Выберите изделие</option>
                        <option value="Торт">Торт</option>
                        <option value="Капкейки">Капкейки</option>
                        <option value="Печенье">Печенье</option>
                        <option value="Эклеры">Эклеры</option>
                        <option value="Макарун">Макарун</option>
                        <option value="Рулет">Рулет</option>
                        <option value="Кекс">Кекс</option>
                    </select>
                    {errors.product && (
                        <div className={classes.error}>{errors.product}</div>
                    )}
                </div>

                <div>
                    <button className={classes.btn} type="submit">
                        Оформить заказ
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Order;
