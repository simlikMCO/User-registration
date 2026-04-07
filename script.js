let phoneOK = false;
let emailOK = false;


btn1.onclick = function() {
    let s = text.value;
    flag = true;
    if (s.length != 19) {
        flag = false;
    }

    if (s.indexOf("+375 (") != 0) {
        flag = false;
    }
    if (s.indexOf(") ") != 8) {
        flag = false;
    }

    if (s[13] != "-" || s[16] != "-") {
        flag = false;
    }

    let temp = s[6] + s[7];
    if (temp == "29" || temp == "33" || temp == "44" || temp == "25" || temp == "17") {

    } else {
        flag = false;
    }

    temp = s.slice(10, 13) + s[14] + s[15] + s[17] + s[18];
    for (let i = 0; i < temp.length; i++) {
        if (temp[i] >= "0" && temp[i] <= "9") {

        } else {
            flag = false;
        }
    }


    if (flag) {
        answer.innerHTML = "Номер введен правильно";
        phoneOK = true;
    } else {
        answer.innerHTML = "Введите номер телефона в соответствии с шаблоном!";
        phoneOK = false;
    }
}

btn2.onclick = function() {
    let s = gmail.value;
    let ok = true;

    let dog = -1;
    let dot = -1;

    for (let i = 0; i < s.length; i++) {
        if (s[i] == "@" && dog == -1) dog = i;
    }

    if (dog <= 0) ok = false;

    for (let i = dog + 1; i < s.length; i++) {
        if (s[i] == "." && dot == -1) dot = i;
    }

    if (dot == -1) ok = false;

    if (dot - dog <= 1) ok = false;

    if (dot >= s.length - 2) ok = false;

    for (let i = 0; i < s.length; i++) {
        if (s[i] == " ") ok = false;
    }

    if (ok) {
        answer.innerHTML = " Email введён правильно";
        emailOK = true;
    } else {
        answer.innerHTML = " Email введён неправильно";
        emailOK = false;
    }
}

document.getElementById('checkAll').onclick = function() {
    window.location.href = 'https://youtu.be/j-iheFkstFQ?si=OTMcnp9C4AP2raNM';
};



