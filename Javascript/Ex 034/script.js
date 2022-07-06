function checkDate() {
    let date = document.getElementById('dateSel').value;
    let table = document.querySelector('.calendar');
    let weeks = table.querySelectorAll('.day');
    let dateDay = (date[8] == 0) ? (date[9]):(date[8] + date[9]);

    for (let d = 0; d < weeks.length; d++) {
        let day = weeks[d].querySelectorAll('td');
        
        for (let i = 0; i < day.length; i++) {
            let currentDay = day[i].textContent;

            if (dateDay == currentDay) {
                day[i].style.backgroundColor = "green";
            }
        }
    }
    
}

function showInterval() {
    let date1 = document.getElementById("startDay").value;
    let date2 = document.getElementById("endDay").value;
    let table = document.querySelector('.calendar');
    let weeks = table.querySelectorAll('.day');
    let date1Day = (date1[8] == 0) ? Number(date1[9]):Number(date1[8] + date1[9]);
    let date2Day = (date2[8] == 0) ? Number(date2[9]):Number(date2[8] + date2[9]);

    for (let d = 0; d < weeks.length; d++) {
        let day = weeks[d].querySelectorAll('td');

        for (let i = 0; i < day.length; i++) {
            let currentDay = Number(day[i].textContent);

            if (currentDay == NaN) {
                currentDay = 0;
            }
            
            if (currentDay == date1Day || currentDay == date2Day) {
                day[i].style.backgroundColor = 'orange';
            } else if (date1Day < currentDay && currentDay < date2Day) {
                day[i].style.backgroundColor = 'blue';
            } else {
                day[i].style.backgroundColor = 'white';
            }
        }
    }
    alert(`The number of days between ${date1} and ${date2} is: ${date2Day - date1Day}`);
}
