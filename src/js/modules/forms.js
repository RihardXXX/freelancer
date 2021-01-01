const forms = () => {
    const form = document.querySelectorAll('.form')
    const inputs = document.querySelectorAll('input')
    const phoneInputs = document.querySelectorAll('input[name="user_phone"]')

    phoneInputs.forEach((item) => {
        // проверка на то что пользователь вводит числа в инпут с телефоном
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '') // все не числа заменяем на пустую строку
        })
    })

    const message = {
        loading: 'загрузка ....',
        success: 'скоро с вами свяжутся',
        failure: 'что то пошло не так',
    }

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading // показываем загрузку спиннер

        let response = await fetch(url, {
            method: 'POST',
            body: data, // body data type must match "Content-Type" header
        })

        return await response.text() // parses JSON response into native JavaScript objects
    }

    const clearInputs = (inputs) => {
        inputs.forEach((item) => (item.value = ''))
    }

    form.forEach((item) => {
        item.addEventListener('submit', (e) => {
            e.preventDefault()
            //-------------------
            let statusMessage = document.createElement('div')
            statusMessage.classList.add('status') // создаём div и даем ему класс
            item.appendChild(statusMessage) // и кладём в форму на которой нажали кнопку
            //--------------------
            const formData = new FormData(item) // кладём форму с данными в конструктор объекта
            const myData = JSON.stringify(Object.fromEntries(formData)) // превращаем данные в json объект
            //--------------------
            postData('assets/server.php', formData) // делаем пост запрос к серверу
                .then((result) => {
                    console.log(result)
                    statusMessage.textContent = message.success // сообщаем пользователю что удачно прошёл запрос
                })
                .catch(() => {
                    statusMessage.textContent = message.failure // сообщаем пользователю об ошибке
                })
                .finally(() => {
                    clearInputs(inputs) // очищаем инпуты
                    setTimeout(() => {
                        statusMessage.remove()
                    }, 8000) // через 8 сек удаляем сообщение со статусом
                })
        })
    })
}

export default forms
