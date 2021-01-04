const enterNumInputs = (selector) => {
    const numInputs = document.querySelectorAll(selector)

    numInputs.forEach((item) => {
        // проверка на то что пользователь вводит числа в инпут с телефоном
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '') // все не числа заменяем на пустую строку
        })
    })
}

export default enterNumInputs
