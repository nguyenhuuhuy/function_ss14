// function isPrime(number) {
//     // gọi biến đúng sai
//     let flag = true;
//     // xét biến 
//     if (number<2) {
//         flag = false;
//     } else {
//         for (let i = 2; i < number-1;i++) {
//             if (number%i ==0) {
//                 flag = false;
//                 break;
//             }
//         }
//     }
//     if (flag == true) {
//         document.write(number + ' là số nguyên tố!')
//     } else {
//         document.write(number + ' không phải là số nguyên tố!')
//     }
// }
// // đầu vào nhập số
// let num = parseInt(prompt('nhập số: '))
// let newnum = isPrime(num)    


// let nhap = parseInt(prompt('nhập giá trị feet: '))
// let newnhap = footToMeter(nhap);
// document.getElementById('kq').innerHTML = 'feet: ' + nhap;
// function footToMeter(foot) {
//   let meter = 0.305*foot;
//   document.write('meter: ' + meter + "<br>")
//   return meter;
// }

// let nhap_1 = parseInt(prompt('Nhập giá trị Meter: '))
// let newnhap_1 = meterToFoot(nhap_1)
// document.getElementById('kq_1').innerHTML = 'meter: ' + nhap_1;
// function meterToFoot(meter) {
//     let feet = 3.279*meter;
//     document.write('feet: ' + feet + '<br>');
//     return feet;
// }

// bt _ 1 

// function alertMessage(message) {
//       console.log(message);
// }
// alertMessage('Xin chào!')

// bt _ 2 

// function myFunction(doiso1) {
//     let doiso2 = doiso1 + 1;
//     return doiso2;
// }
// console.log(myFunction(1));


// bt _ 3 

// function myFunction(number_1, number_2) {
//     if (number_1 > number_2) {
//         alert('thông báo!')
//     } else {
//         let total = number_1 + number_2;
//         document.write(total)
//         return total;
//     }
// }
// myFunction(2,1)

// Bt _ 4 

// function addNumbers() {
//     firstNum = 4; 
//     secondNum = 8; 
//     result = firstNum + secondNum;
//     return result;
// }
// result = 0;
// // trước lời gọi hàm 
// alert(result);
// result = addNumbers();
// // sau lời gọi hàm
// alert(result);

// bt _ 5
// var jaw = ['Polaris', 'Aldebaran', 'Debeb', 'Vega', 'Altair', 'Dubhe', 'Regulus'];
// var jaw_1 = ['Ursa Minor', 'Tarurus', 'Cygnus', 'Lyra', 'Aquila', 'UrsaMajor', 'Leo'];

// function myFunction(input) {
//     input = prompt('Nhập từ vào: ')
//     for (const key in jaw) {
//         if (input ==jaw[key]) {
//             document.write(jaw_1[key])
//         } else {
//             alert('không có kết quả')
//         }
//     }
// }
// myFunction();

// bt _ 6

