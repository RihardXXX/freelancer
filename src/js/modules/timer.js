const timer = (id, deadline) => {
    const getTimeRemaining = (endTime) => {
        // функция вычисляет сколько времени осталось до дедлайна
        const t = Date.parse(endTime) - Date.parse(new Date()) // разность дедлайна и тек времени
        const seconds = Math.floor((t / 1000) % 60)
        const minutes = Math.floor((t / 1000 / 60) % 60) // соататок от общих минут
        const hours = Math.floor((t / (1000 * 60 * 60)) % 24) // остаток от общих часов
        const days = Math.floor(t / (1000 * 60 * 60 * 24))
        return {
            total: t,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds,
        }
    }

    const addZero = (number) => {
        // ставит ноль если число меньше 10
        return number < 10 ? `0${number}` : number
    }

    const setClock = (selector, endTime) => {
        const timer = document.querySelector(selector)
        const days = timer.querySelector('#days')
        const hours = timer.querySelector('#hours')
        const minutes = timer.querySelector('#minutes')
        const seconds = timer.querySelector('#seconds')

        const timeInterval = setInterval(updateClock, 1000)

        updateClock()

        function updateClock() {
            const t = getTimeRemaining(endTime) // возвращаем объект сколько времени осталось

            days.textContent = addZero(t.days) // записываем данные в элементы
            hours.textContent = addZero(t.hours)
            minutes.textContent = addZero(t.minutes)
            seconds.textContent = addZero(t.seconds)

            if (t.total <= 0) {
                // если разница равна нулю отключаем таймер
                days.textContent = '00'
                hours.textContent = '00'
                minutes.textContent = '00'
                seconds.textContent = '00'
                clearInterval(timeInterval) // если разница равна нулю отключаем таймер
            }
        }
    }

    setClock(id, deadline)
}

export default timer
