function verify() {
   let a = parseInt(amount.value);

   if (isNaN(a) || a < 0) {
        result = "Введите неотрицательное число";
        check = false;
    } 
    else if (a % 2 !== 0) {
        result = "Размен невозможен (сумма нечётная)";
        check = false;
    } 
    else {
        let remain = a;
        let c500 = Math.floor(remain / 500); remain %= 500;
        let c100 = Math.floor(remain / 100); remain %= 100;
        let c10  = Math.floor(remain / 10);  remain %= 10;
        let c2   = Math.floor(remain / 2);   remain %= 2;

        result = `Размен ${a} руб.:` +
                     `500 руб × ${c500};` +
                     `100 руб × ${c100};` +
                     `10 руб × ${c10};` +
                     `2 руб × ${c2}`;
        check = true;
        }

    document.getElementById("result").value = result;
}

function send() {
    if (check) {
        document.getElementById("UserEnter").submit();
    } else {
        alert("Есть недостатки. Повторите ввод")
    }
}


let result;
let check;

const amount = document.getElementById('amount')
const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send)