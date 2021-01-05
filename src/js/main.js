import './slider'
import modals from './modules/modal'
import tabs from './modules/tabs'
import forms from './modules/forms'
import changeModalState from './modules/changeModalState'
import timer from './modules/timer'
import images from './modules/images'

window.addEventListener('DOMContentLoaded', () => {
    let modalState = {} // состояние
    let deadline = '2021-12-10'

    changeModalState(modalState) // кладём объект для изменения его состояния

    modals() // подключаем работу с модальными окнами
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active') // работаем с табами
    tabs(
        '.decoration_slider',
        '.no_click',
        '.decoration_content > div > div',
        'after_click'
    ) // работаем с табами
    tabs(
        '.balcon_icons',
        '.balcon_icons_img',
        '.big_img > img',
        'do_image_more',
        'inline-block'
    ) // табы с рассчетом стоимости
    forms(modalState) // данные со всех форм отправляем на сервер
    timer('.container1', deadline) // запускаем таймер
    images() // запускаем скрипт учеличения фото при клике
})

//--------------------

// Домашнее задание
// 1. закрыть окно после отправки данных
// 2. очистить state
// 3. Не пускать к след окну пока первое не заполнит полностью
