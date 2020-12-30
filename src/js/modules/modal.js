const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector) // массив кнопок
        const modal = document.querySelector(modalSelector)
        const close = document.querySelector(closeSelector)

        trigger.forEach((item) => {
            // на каждую кнопку подвешиваем обработчик

            item.addEventListener('click', (e) => {
                // нажимаем на кнопку и открывается окно
                if (e.target) {
                    e.preventDefault()
                }

                modal.style.display = 'block' // показываем модальное окно
                document.body.style.overflow = 'hidden'
                // document.body.classList.add('modal-open')
            })
        })

        close.addEventListener('click', (e) => {
            // нажимаем на крестик и закрывается окно

            modal.style.display = 'none'
            document.body.style.overflow = ''
            // document.body.classList.remove('modal-open')
        })

        modal.addEventListener('click', (e) => {
            // чтобы закрывалось окно при нажатии на подложку

            if (e.target === modal) {
                // нажимаем на подложку
                modal.style.display = 'none'
                document.body.style.overflow = ''
                // document.body.classList.remove('modal-open')
            }
        })
    }

    function showModalByTime(selector, time) {
        // через какое то время показать модальное окно
        setTimeout(() => {
            const modalWindow = document.querySelector(selector)
            modalWindow.style.display = 'block'
            document.body.style.overflow = 'hidden'
        }, time)
    }

    bindModal(
        '.popup_engineer_btn',
        '.popup_engineer',
        '.popup_engineer .popup_close'
    )
    bindModal('.phone_link', '.popup', '.popup .popup_close')
    // showModalByTime('.popup', 60000)
}

export default modals
