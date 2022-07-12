function showDays(m, y) {
    try {
        //Declaring variables
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 
        'September', 'October', 'November', 'December'];
        let month = Number(m);
        let year = Number(y);
        let date;
        let days = 0;

        debugger;
        //Data validation
        if (month < 1 || month > 12 || year < 1) {
            throw "ERROR! Please digit a valid number!";
        }

        //Getting days in the month
        date = new Date(year, (month - 1));
        switch (date.getMonth()) {
            case 0:
            case 2:
            case 4:
            case 6:
            case 7:
            case 9:
            case 11:
                days = 31;
                break;
            
            case 1:
                days = 28;
                break;
            
            default:
                days = 30;
        }

        //Displaying content
        alert(`The number of days in ${months[month - 1]} of ${year} is ${days} days.`);
    }
    catch(error) {
        alert(error);
        document.getElementById('month').value = '';
        document.getElementById('year').value = '';
    }
}

function compareDates() {
    try {
        //Gettings inputs and display
        let date1 = document.querySelector('#date1').value;
        let date2 = document.querySelector('#date2').value;

        //Creating the date variables
        let dt1 = new Date(date1);
        let dt2 = new Date(date2);
        dt1.setHours(24);
        dt2.setHours(24);

        //Comparing dates
        if (dt1 > dt2) {
            alert(`The date ${dt1.getMonth() + 1}/${dt1.getDate()}/${dt1.getFullYear()} is \
greater than ${dt2.getMonth() + 1}/${dt2.getDate()}/${dt2.getFullYear()}!`);
        } else if (dt1 < dt2) {
            alert(`The date ${dt2.getMonth() + 1}/${dt2.getDate()}/${dt2.getFullYear()} is \
greater than ${dt1.getMonth() + 1}/${dt1.getDate()}/${dt1.getFullYear()}!`);
        } else {
            alert(`Both dates are equal!`);
        }
    }
    catch(error) {
        alert(error);
        document.getElementById('date1').value = '';
        document.getElementById('date2').value = '';
    }
}

function timeConvert() {
    try {
        //Getting input
        let minutes = Number(document.getElementById('minutes').value);
        let hours = 0;
        let seconds = 0;
        let days = 0;
        let weeks = 0;
        
        //Date validation
        if (minutes < 0) {
            throw "ERROR! You must digit a positive number!";
        }

        //Converting minutes
        seconds = minutes * 60;

        if (minutes >= 60) {
            hours = Math.floor(minutes / 60);
            minutes = minutes - (hours * 60);
        }
        if (hours >= 24) {
            days = Math.floor(hours / 24);
            hours = hours - (days * 24);
        }
        if (days >= 7) {
            weeks = Math.floor(days / 7);
            days = days - (weeks * 7);
        }
        
        //Alerting content
        alert(`Weeks: ${weeks}\nDays: ${days}\nHours: ${hours}\nMinutes: ${minutes}\nSeconds: ${seconds} (Total)`);
    }
    catch(error) {
        alert(error);
        document.getElementById('minutes').value = '';
    }
}
