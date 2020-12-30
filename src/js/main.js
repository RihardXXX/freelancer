import './slider'
import modals from './modules/modal'
import tabs from './modules/tabs'

window.addEventListener('DOMContentLoaded', () => {
    modals() // подключаем работу с модальными окнами
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active') // работаем с табами
    tabs(
        '.decoration_slider',
        '.no_click',
        '.decoration_content > div > div',
        'after_click'
    ) // работаем с табами
})
