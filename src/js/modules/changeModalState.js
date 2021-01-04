import enterNumInputs from './enterNumInputs'

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img') // какую форму окна он выбрал
    const windowWidth = document.querySelectorAll('#width') // Ширина окна
    const windowHeight = document.querySelectorAll('#height') // высота окна
    const windowType = document.querySelectorAll('#view_type') // выбираем тип остекления окна
    const windowProfile = document.querySelectorAll('.checkbox') // выбираем тип профиля окна

    enterNumInputs('#width') // валидация ширины и высота на числа
    enterNumInputs('#height') //

    function bindActionToElems(event, elem, prop) {
        // функция заносит в стейт данные с выбранных эелементов
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch (item.nodeName) {
                    case 'SPAN': // если выбирает тип балкона рисунка
                        state[prop] = i
                        break
                    case 'INPUT': // если вводит размеры или тип остекления
                        if (item.getAttribute('type') === 'checkbox') {
                            i === 0
                                ? (state[prop] = 'Холодное')
                                : (state[prop] = 'Тёплое')
                            elem.forEach((box, j) => {
                                box.checked = false
                                if (i == j) {
                                    box.checked = true
                                }
                            })
                        } else {
                            state[prop] = item.value
                        }
                        break
                    case 'SELECT': // выбирает тип профиля
                        state[prop] = item.value
                }
                console.log(state)
            })
        })
    }

    bindActionToElems('click', windowForm, 'form') // записываем форму выбранного окна в стейт
    bindActionToElems('input', windowWidth, 'width') // записываем ширину
    bindActionToElems('input', windowHeight, 'height') // записываем высоту в стейт
    bindActionToElems('change', windowType, 'type')
    bindActionToElems('change', windowProfile, 'profile')
}

export default changeModalState
