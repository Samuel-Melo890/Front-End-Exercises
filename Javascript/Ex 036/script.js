function createReport() {
    class Student {
        constructor(code, grade) {
            this._code = code;
            this._grade = grade;
            this._status = (this.grade > 60) ? 'Passed':'Not Passed';
        }
        
        get grade() {return this._grade;}
        get status() {return this._status;}
        get code() {return this._code;}
    }

    const students = [];
    const table = document.getElementById('report');
    const title = document.getElementById('title');
    let passed = 0;
    let notPassed = 0;

    for (let i = 0; i < 20; i++) {
        let s = new Student(i + 1, Math.floor(Math.random() * 101));
        students[i] = s;
    }

    title.textContent = "Students' Report";
    table.innerHTML = "<tr><td>Student</td><td>Student's grade</td><td>Student's status</td></tr>";
    for (let i in students) {
        table.innerHTML += `<tr><td>Student ${students[i].code}</td><td>${students[i].grade}</td>\
        <td>${students[i].status}</td></tr>`;

        if (students[i].status == 'Passed') {
            passed += 1;
        } else {notPassed += 1;}
    }

    table.innerHTML += `<tr><td>Passed</td><td>${passed}</td></tr><tr><td>Not Passed</td>\
    <td>${notPassed}</td></tr>`;
}
