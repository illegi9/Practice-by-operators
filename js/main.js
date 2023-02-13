let date = new Date();
/* Получаю дату и время */
/* Пока что эти функции выводится в модальное окно через alert() */

function showOpeningHours() {

    let hours = date.getHours();
    let getOpenOrClosed = ["Офис открыт", "Офис закрыт"];

    if (hours >= 9 && hours < 18) {
        return getOpenOrClosed[0];
    } else {
        return getOpenOrClosed[1];
    }
}
/* Функция которая исходя из текущего времени говорит пользователю:
   открыт офис или закрыт */

function showDayOff() {
    
    let day = date.getDay();
    let daysOfTheWeek = ["Вс", 'Пн', "Вт", "Ср", "Чт", "Пт", "Сб"];
    let days = daysOfTheWeek[day];

    if (days === daysOfTheWeek[6] || days === daysOfTheWeek[0]) {
        alert('Выходной день');
    }  else if (days != daysOfTheWeek[6] || days != daysOfTheWeek[0])  {
        alert(showOpeningHours());
    }
}
/* Функция говорит пользователю о том что в субботу и воскресенье в офисе выходной */