const images = () => {
    // модуль для увелич изоб фото
    const imgPopup = document.createElement('div') // создаём див куда помещается фото
    const bigImg = document.createElement('img') // создаём элемент фото
    const workSection = document.querySelector('.works') // получаем доступ к рабочему сектору

    bigImg.style.width = '70%'
    bigImg.style.height = '50%'

    imgPopup.classList.add('popup') // добавляем класс стилей нашему окну
    workSection.appendChild(imgPopup) // добавляем в рабочую секцию модальное окно

    imgPopup.style.justifyContent = 'center' // устанавливаем картинку по центру вертикаль
    imgPopup.style.alignItems = 'center' // по горизонтали по центру
    imgPopup.style.display = 'none' // прячем изображение

    imgPopup.appendChild(bigImg) // кладём в модальное окно фото

    workSection.addEventListener('click', (e) => {
        e.preventDefault()
        const target = e.target // куда щелкнули

        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex' // если произошел клик показываем окно
            const path = target.parentNode.getAttribute('href') // обращаемся к пути родит элемента
            bigImg.setAttribute('src', path) // устанавливаем нашему фото путь с ссылки
            document.body.style.overflow = 'hidden' // чтобы задний фон не прокручивался
        }

        if (target && target === imgPopup) {
            // закрытие при клике на подложку
            imgPopup.style.display = 'none'
            document.body.style.overflow = '' // чтобы задний фон прокручивался
        }
    })
}

export default images
