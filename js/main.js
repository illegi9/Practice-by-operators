let date = new Date();
/* Получаю дату и время */
/* Пока что эти функции выводится в модальное окно через alert() */

function showOpeningHours() {

    let hours = date.getHours();
    let getOpenOrClosed = ["Офис открыт", "Офис закрыт"];

    if (hours >= 9 && hours < 18) {
        alert(getOpenOrClosed[0]);
    } else {
        alert(getOpenOrClosed[1]);
    }
}
/* Функция которая исходя из текущего времени говорит пользователю:
   открыт офис или закрыт */

function showDayOff() {
    
    let day = date.getDay();
    let daysOfTheWeek = ["Вс", 'Пн', "Вт", "Ср", "Чт", "Пт", "Сб"];
    let days = daysOfTheWeek[day];
    let offOrWeek = ['Выходной день', 'Рабочий день']

    if (days === daysOfTheWeek[6]) {
        alert(offOrWeek[0]);
    } else if (days === daysOfTheWeek[0]) {
        alert(offOrWeek[0]);
    } else {
        alert(offOrWeek[1]);
    }
}
/* Функция говорит пользователю о том что в субботу и воскресенье в офисе выходной */