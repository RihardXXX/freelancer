import enterNumInputs from './enterNumInputs'
import modals from './modal'

const forms = (state) => {
    const form = document.querySelectorAll('.form')
    const inputs = document.querySelectorAll('input')

    enterNumInputs('input[name="user_phone"]') // валидация полей на то что числа только вводит

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
        // очистка полей формы после отправки на сервер
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
            if (item.getAttribute('data-calc') === 'end') {
                // тут мы сравниваем есть ли в форме этот атрибут, чтобы отправить state
                for (let key in state) {
                    formData.append(key, state[key]) // передаём в объект данные из state
                }
            }
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
                    }, 5000) // через 8 сек удаляем сообщение со статусом
                })
        })
    })
}

export default forms
