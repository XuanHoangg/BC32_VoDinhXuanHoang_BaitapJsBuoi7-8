let numbers = [];
function addNumber() {
    let number = +document.getElementById('number').value;
    numbers.push(number);
    let showNumbers = document.getElementById('showNumber');
    showNumbers.style.display = "block";
    showNumbers.innerHTML = numbers;
}
// Bài 1
function click1() {
    let show = document.getElementById('show1');
    let totalPositiveNumbers = numbers.reduce((total, value) => {
        return value > 0 ? total + value : total;
    }, 0)
    show.style.display = "block";
    show.innerHTML = "Tổng các số dương = " + totalPositiveNumbers;
}
// Bài 2
function click2() {
    let show = document.getElementById('show2');
    let count = numbers.reduce((count, value) => {
        return value > 0 ? count + 1 : count;
    }, 0)
    show.style.display = "block";
    show.innerHTML = "Có " + count;
}
// Bài 3
function click3() {
    let show = document.getElementById('show3');
    let min = Math.min(...numbers);
    show.style.display = "block";
    show.innerHTML = "Số nhỏ nhất là: " + min;
}
// Bài 4
function click4() {
    let show = document.getElementById('show4');
    let arr = numbers.filter((value) => {
        return value > 0;
    })
    let min = Math.min(...arr);
    show.style.display = "block";
    show.innerHTML = "Số dương nhỏ nhất là: " + min;
}
// Bài 5
function click5() {
    let show = document.getElementById('show5');
    let arr = numbers.filter((value) => {
        return value % 2 === 0;
    })
    show.style.display = "block";
    if (arr.length === 0) {
        return -1;
    }
    show.innerHTML = "Số chẵn cuối cùng: " + arr[arr.length - 1];
}
// Bài 6
function click6() {
    let number1 = +document.getElementById('number1').value;
    let number2 = +document.getElementById('number2').value;
    let show = document.getElementById('show6');
    if (number1 < 0 || number2 < 0 || number1 >= numbers.length || number2 >= numbers.length) {
        alert("Nhập lại vị trí");
        return 0;
    }
    let arr = [...numbers];
    let temp = arr[number1];
    arr[number1] = arr[number2];
    arr[number2] = temp;
    show.style.display = "block";
    show.innerHTML = "Mảng sau khi đổi chổ 2 số: " + arr;
}
// Bài 7
function click7() {
    let show = document.getElementById('show7');
    let arr = numbers.sort((a, b) => a - b)
    show.style.display = "block";
    show.innerHTML = "Mảng sau khi sắp xếp: " + arr;
}
// Bài 8
function click8() {
    let show = document.getElementById('show8');
    let arr = numbers.filter((value) => {
        return checkPrimeNumber(value);
    })
    show.style.display = "block";
    show.innerHTML = "Số nguyên tố đầu tiên của mảng: " + arr[0];
}
function checkPrimeNumber(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0)
            return false;
    }
    return true;
}
// Bài 9
let floatNumbers = [];
function addFloatNumber() {
    let number = +document.getElementById('floatNumber').value;
    floatNumbers.push(number);
    let showFloatNumbers = document.getElementById('showFloatNumber');
    showFloatNumbers.style.display = "block";
    showFloatNumbers.innerHTML = floatNumbers;
}
function click9() {
    let show = document.getElementById('show9');
    let arr = floatNumbers.reduce((count, value) => {
        return value === Math.floor(value) ? count + 1 : count;
    }, 0)
    show.style.display = "block";
    show.innerHTML = "Số lượng số nguyên trong mảng: " + arr;
}
// Bài 10
function click10() {
    let show = document.getElementById('show10');
    let arrPositive = numbers.reduce((count, value) => {
        return value > 0 ? count + 1 : count;
    }, 0)
    let arrNegative = numbers.reduce((count, value) => {
        return value < 0 ? count + 1 : count;
    }, 0)

    show.style.display = "block";
    if (arrNegative === arrPositive) {
        show.innerHTML = "Số dương = Số âm";
        return
    }
    show.innerHTML = arrPositive > arrNegative ? "Số dương > Số âm" : "Số âm > Số dương";
}








































































