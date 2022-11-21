function isPrime(number) {
    let flag = true;
    if (number<2) {
        flag = false;
    } else {
        for (let i = 2; i < number-1;i++) {
            if (number%i ==0) {
                flag = false;
                break;
            }
        }
    }
    if (flag == true) {
        document.write(number + ' là số nguyên tố!')
    } else {
        document.write(number + ' không phải là số nguyên tố!')
    }
}
let num = parseInt(prompt('nhập số: '))
let newnum = isPrime(num)    