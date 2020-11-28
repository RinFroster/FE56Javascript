console.log("Hello CyberSoft");

function themNguoiDung() {
    console.log("dpnguyen2 themNguoiDung");
}
/*
*   biến
*/
// String
var username = "Trương Vĩ Hào";
var address = "112 Cao Thắng";
// Number
var age = 21;
// Boolean
var status = true;
// Null
var numberStudent = null;
// Undefined
var people;
console.log(people);

var first_Name = "Trương Vĩ";
var last_Name = "Hào";

var classFE = "FE56";

// console.log("Tên là: " + username);
// console.log("Địa chỉ: " + address);
console.log("Tên là: " + username,"Địa chỉ: " + address);

// Hoisting
// Js có cơ chế tự nhảy lên dòng đầu tiên tạo biến nhưng ko gán giá trị nên biến sẽ undefined
console.log("Full name: " + fullName);
var fullName = "Nguyễn Văn A";

isLogin = true;
console.log("isLogin: ", isLogin);

// console.log(stundent);

const PI = 3.14;

/*
* Câu lệnh điều kiện
* == là so sánh giá trị, === là so sánh giá trị và kiểu dữ liệu
*/
if(1 === "1"){
    console.log("DK Đúng");
}else{
    console.log("DK sai");
}

// DK ? "Dung" : "Sai"
1 == 1 ? console.log("DK Dung") : console.log("DK Sai");

var btA = true;
var btB = false;
console.log("Ket qua &&: ", btA && btB);
console.log("Ket qua ||: ", btA || btB);
console.log("Phu dinh cua btA: ", !(!(!(!btA))));
switch(5){
    case 0:
            console.log("Day la so 0");
            break;
    case 1:
            console.log("Day la so 1");
            break;
    case 2:
            console.log("Day la so 2");
            break;
    default:
            console.log("Khong xac dinh");
        break;
}

var list = ["Hao","Tay", "Long", "Nam"];
console.log(list[0]);
console.log(list[1]);
console.log(list[2]);
console.log(list[3]);

/*
* Vong lap
*/
for(var i = 0; i < list.length; i++){
    console.log(list[i]);
}

var number_1 = 10;
var number_2 = 5;
var number_3 = 20;
var number_4 = 7;
var number_5 = 20;
var number_6 = 7;

var total = number_1 + number_2;
console.log("tong la: ", total);

var total_2 = number_3 + number_4;
console.log("tong la: ", total_2);

var total_3 = number_5 + number_6;
console.log("tong la: ", total_3);

/*
* Hàm
* Hàm không có tham số
* Hàm có tham số
* Hàm không có giá trị trả về
* Hàm có giá trị trả về
*/
// tinhTong34();

// tinhTong();

// function tinhTong(){
//     var sum = number_1 + number_2;
//     console.log("sum la: ", sum);
// }

// function tinhTong34(){
//     var sum = number_3 + number_4;
//     console.log("sum la: ", sum);
// }

// function tinhTong(a, b) {
//     var sum = a + b;
//     return sum;
// }

// // tinhTong(number_1,number_2);
// // tinhTong(number_3,number_4);
// // tinhTong(number_5,number_6);
// // tinhTong(100, 10);
// // var total2 = tinhTong(50, 50);
// console.log("tong la: ", tinhTong(50, 50) + 100);

// /*
// *   Bài tập tính điểm trung bình: toan, ly, hoa
// *   dtb = (toan + ly + hoa) / 3;
// *   xếp loại dựa vào điểm trung bình:
// *   + 9 < dtb < 10 => xuất sắc
// *   + 8 < dtb < 9 => giỏi
// *   + 7 < dtb < 8 => khá
// *   + 5 < dtb < 7 => trung bình
// *   + yếu
// */

// function tinhDtb(toan, ly, hoa) {
//     return (toan + ly + hoa) / 3; 
// }

// function xepLoai(dtb) {
//     var xepLoai = "";
//     if(dtb >= 9 && dtb <= 10){
//         xepLoai = "xuat sac";
//     }else if (dtb >= 8 && dtb <= 9) {
//         xepLoai = "gioi";
//     }else if (dtb >= 7 && dtb <= 8) {
//         xepLoai = "kha";
//     }else if (dtb >= 5 && dtb <= 7) {
//         xepLoai = "trung binh";
//     }else{
//         xepLoai = "yeu";
//     }
//     console.log("Xếp loại: ", xepLoai);
// }
// xepLoai(tinhDtb(9,10,9));

// /*
// * DOM
// */
// // .value để lấy 1 giá trị cụ thể trong Element
// var txtInput = document.getElementById("txtInput").value;
// console.log(txtInput);

// var _pText = document.getElementById(pText);
// console.log(pText.innerHTML);

/*
*   event trong javascript
*/

// cách 1
// function eventCLick() {
//     var txtValue = document.getElementById("txtInput").value;
//     console.log(txtValue);
// }

// cách 2
// document.getElementById("btnClick").onclick = function(){
//     var txtValue = document.getElementById("txtInput").value;
//     console.log(txtValue);
// }

// cách 3 - callback function
// hàm addEventListener có 2 tham số tham số thứ 2 của hàm là 1 hàm khác không tên
// document.getElementById("btnClick").addEventListener("click",function(){
//     var txtValue = document.getElementById("txtInput").value;
//     console.log(txtValue);
// });

// 1 cách khác của cách 3 tuỳ trường hợp sử dụng
// function demoClick(){
//     var txtValue = document.getElementById("txtInput").value;
//     console.log(txtValue)
// }

// document.getElementById("btnClick").addEventListener("click",demoClick);

// document.getElementById("btnNhanEmDi").addEventListener("click",function(){
//     document.getElementById("divContent").innerHTML = "Thay đổi rồi nhé!";
//     document.getElementById("divContent").style.backgroundColor = "aqua";
//     document.getElementById("divContent").style.fontSize = "40px";
//     document.getElementById("divContent").style.color = "white";
// });

// document.getElementById("btnHide").addEventListener("click",function(){
//     document.getElementById("divContent").style.display = "none";
// });

// document.getElementById("btnShow").addEventListener("click",function(){
//     document.getElementById("divContent").style.display = "block";
// });

// document.getElementById("btnDisable").addEventListener("click",function(){
//     document.getElementById("btnNhanEmDi").disabled = true;
// });

// document.getElementById("btnAvailable").addEventListener("click",function(){
//     // có 2 cách để mở khoá lại disabled = false or removeAttribute("disabled")
//     // document.getElementById("btnNhanEmDi").disabled = false;
//     document.getElementById("btnNhanEmDi").removeAttribute("disabled");
// });

// document.getElementById("btnBulbOn").addEventListener("click",function(){
//     document.getElementById("imgBulb").src = "./images/pic_bulbon.gif";
// });

// document.getElementById("btnBulbOff").addEventListener("click",function(){
//     document.getElementById("imgBulb").src = "./images/pic_bulboff.gif";
// });

// document.getElementById("submit").addEventListener("click",function(){
//     var username = document.getElementById("userName").value;
//     var pass = document.getElementById("password").value;
//     if(username === "cybersoft" && pass === "cybersoft"){
//         // changeColor("Login thành công", "green");
//         changeColor2("Login thành công", "alert alert-success", "block");
//     }else{
//         // changeColor("Login thất bại", "red");
//         changeColor2("Login thất bại", "alert alert-danger", "block");
//         document.getElementById("userName").focus();
//     }
// });

// function changeColor(mess, bg) {
//     document.getElementById("txtThongBao").innerHTML = mess;
//     document.getElementById("txtThongBao").style.display = "block";
//     document.getElementById("txtThongBao").style.backgroundColor = bg;
//     document.getElementById("txtThongBao").style.color = "white";
// }

// function changeColor2(mess, classes, displayed) {
//     document.getElementById("txtThongBao").innerHTML = mess;
//     document.getElementById("txtThongBao").className = classes;
//     document.getElementById("txtThongBao").style.display = displayed;
// }

// /**
//  * DOM TagName
//  */
// var tagName = document.getElementsByTagName("button")[1];
// console.log(tagName);

// /**
//  * DOM className
//  */
// var _className = document.getElementsByClassName("btn")[0];
// console.log(_className);

// /**
//  * DOM querySelector
//  */
// var _querySelector = document.querySelector(".container #txtThongBao");
// console.log(_querySelector);

// /**
//  * DOM querySelectorAll
//  */
// var _querySelectorAll = document.querySelectorAll(".container .form-group")[0];
// console.log(_querySelectorAll);

document.getElementById("btnTinhTienTip").addEventListener("click",function(){
    var txtTongTien = document.getElementById("txtTongTien").value;
    var txtPhanTramTip = document.getElementById("slPhanTramTip").value;
    var txtSoNguoi = document.getElementById("txtSoNguoi").value;
    console.log(txtTongTien,txtPhanTramTip,txtSoNguoi);


    var total = (txtTongTien * txtPhanTramTip) / 100 / txtSoNguoi;
    document.getElementById("txtThongBaoTienTip").innerHTML = total + "$ mỗi người";
    document.getElementById("txtThongBaoTienTip").className = "alert alert-danger d-block";
});

