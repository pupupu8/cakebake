export function validateOrder(data) {
    const errors = {};

    if (data.firstName.trim().length < 2) {
        errors.firstName = "Введите имя";
    } else if (!/^[а-яА-Яa-zA-Z]+$/.test(data.firstName)) {
        errors.firstName = "Имя должно содержать только буквы";
    }

    if (data.lastName.trim().length < 2) {
        errors.lastName = "Введите фамилию";
    } else if (!/^[а-яА-Яa-zA-Z]+$/.test(data.lastName)) {
        errors.lastName = "Фамилия должна содержать только буквы";
    }

    if (data.phone.trim().length < 10) {
        errors.phone = "Номер телефона слишком короткий";
    } else if (!/^[0-9]+$/.test(data.phone)) {
        errors.phone = "Номер телефона должен содержать только цифры";
    }

    if (data.email.trim() === "") {
        errors.email = "Email обязателен";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        errors.email = "Введите корректный email";
    }

    if (data.product === "") {
        errors.product = "Выберите кондитерское изделие";
    }

    return errors;
}
