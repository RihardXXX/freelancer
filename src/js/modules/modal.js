const modals = () => {
    function bindModal(
        triggerSelector, // кнопка
        modalSelector, // окно
        closeSelector, // крестик закрытия
        closeClickOverlay = true //
    ) {
        const trigger = document.querySelectorAll(triggerSelector) // массив кнопок для модал окон
        const modal = document.querySelector(modalSelector) // окно которое будет вызываться
        const close = document.querySelector(closeSelector) // кнопка крестик по которой закрыввептся
        const windows = document.querySelectorAll('[data-modal]') // все модальные окна
        const scroll = calcScroll()

        trigger.forEach((item) => {
            // на каждую кнопку подвешиваем обработчик
            item.addEventListener('click', (e) => {
                // нажимаем на кнопку и открывается окно
                if (e.target) {
                    e.preventDefault()
                }

                windows.forEach((item) => {
                    // стираем все открытые модальные окна
                    item.style.display = 'none'
                })

                modal.style.display = 'block' // показываем определенное модальное окно
                document.body.style.overflow = 'hidden'
                document.body.marginRight = `${scroll}px` // чтобы скрыть скрол
                // document.body.classList.add('modal-open')
            })
        })

        close.addEventListener('click', (e) => {
            // нажимаем на крестик и закрывается окно
            windows.forEach((item) => {
                // стираем все открытые модальные окна
                item.style.display = 'none'
            })

            modal.style.display = 'none'
            document.body.style.overflow = ''
            document.body.marginRight = `0px`
            // document.body.classList.remove('modal-open')
        })

        modal.addEventListener('click', (e) => {
            // чтобы закрывалось окно при нажатии на подложку
            if (e.target === modal && closeClickOverlay) {
                // нажимаем на подложку
                windows.forEach((item) => {
                    // стираем все открытые модальные окна
                    item.style.display = 'none'
                })

                modal.style.display = 'none'
                document.body.style.overflow = ''
                document.body.marginRight = `0px`
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

    function calcScroll() {
        // чтобы при открытии окна скрол не бегал
        let div = document.createElement('div')

        div.style.width = '50px'
        div.style.height = '50px'
        div.style.overflow = 'scroll'
        div.style.visibility = 'hidden'

        document.body.appendChild(div)
        let scrollWidth = div.offsetWidth - div.clientWidth // разница между полной шириной и шириной прокрутки
        div.remove()

        return scrollWidth // узнали ширину скрола
    }

    bindModal(
        '.popup_engineer_btn',
        '.popup_engineer',
        '.popup_engineer .popup_close'
    ) // вызов окна при нажатии на кнопку вызвать инженера
    bindModal('.phone_link', '.popup', '.popup .popup_close') // вызов окна при нажати на позвонить
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close') // вызов окна при нажатии на кнопку рассчитать
    bindModal(
        '.popup_calc_button',
        '.popup_calc_profile',
        '.popup_calc_profile_close',
        false
    ) // вызов окна при нажатии на кнопку далее
    bindModal(
        '.popup_calc_profile_button',
        '.popup_calc_end',
        '.popup_calc_end_close',
        false
    )
    // showModalByTime('.popup', 60000)
}

export default modals
