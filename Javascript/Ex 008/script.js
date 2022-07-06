function showName() {
    const name=document.getElementById('name').value,
    lastname=document.getElementById('lastname').value;
    
    alert("Welcome "+name+" "+lastname+"!");
};

function cpf() {
    let cpf = document.getElementById("cpf").value, str='';

    for (let x of cpf) {
        if (x != undefined) {
            str += `${x}`;

            if (str.length == 3|str.length == 7) {
                str += '.';
            }
            else {
                if (str.length == 11) {
                    str += '-';
                }
            }
        }
    };
    document.getElementById("p_cpf1").innerHTML = str;
};

function cpf2() {
    let cpf = document.getElementById('cpf2').value, str='';

    for (let x of cpf) {
        if (x.includes('.')|x.includes('-')) {
            str = str;
        }
        else {
            str += x;
        }
    }
    document.getElementById('p_cpf2').innerHTML = str;
}
