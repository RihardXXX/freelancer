const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector)
    const tabs = document.querySelectorAll(tabSelector)
    const contents = document.querySelectorAll(contentSelector)

    const hideTabContent = () => {
        contents.forEach((item) => {
            item.style.display = 'none' // скрываем весь контент
        })

        tabs.forEach((item) => {
            item.classList.remove(activeClass) // убираем с табом класс активности
        })
    }

    const showTabContent = (id = 0) => {
        contents[id].style.display = 'block' // показываем выбранный компонент
        tabs[id].classList.add(activeClass) // добавляем класс активности
    }

    header.addEventListener('click', (e) => {
        const target = e.target // куда кликнул пользователь
        if (
            target &&
            (target.classList.contains(tabSelector.replace(/\./, '')) ||
                target.parentNode.classList.contains(
                    tabSelector.replace(/\./, '')
                ))
        ) {
            tabs.forEach((item, id) => {
                if (target == item || target.parentNode == item) {
                    // если кликнул пользователь на тот именно таб, то берём его порядковый номер
                    hideTabContent()
                    showTabContent(id)
                }
            })
        }
    })

    // первый запуск при загрузке страницы убираем лишние табы
    hideTabContent()
    showTabContent()
}

export default tabs
