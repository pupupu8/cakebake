export function validateMain(data) {
    const errors = {};

    if (data.firstName.trim().length < 2) {
        errors.firstName = "Введите имя";
    } else if (!/^[а-яА-Яa-zA-Z]+$/.test(data.firstName)) {
        errors.firstName = "Имя должно содержать только буквы";
    }

    if (data.email.trim() === "") {
        errors.email = "Email обязателен";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        errors.email = "Введите корректный email";
    }

    return errors;
}
