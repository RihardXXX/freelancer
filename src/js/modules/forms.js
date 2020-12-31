const forms = () => {
    const form = document.querySelectorAll('.form')
    const input = document.querySelectorAll('input')

    const message = {
        loading: 'загрузка ....',
        success: 'скоро с вами свяжутся',
        failure: 'что то пошло не так',
    }

    const postData = () => {}

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
        })
    })
}

export default forms
