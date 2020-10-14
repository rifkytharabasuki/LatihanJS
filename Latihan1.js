var person = prompt("Input Nama : ");

var gender = prompt("Masukkan gender : ")

var height = prompt("Input Height : ");

if(gender == "laki"){
var laki = (height - 100) - ((height - 100) * 10/100);
document.write("Hai "+person+" Berat Ideal mu "+laki);
}
else if(gender == "perempuan"){
var perempuan = (height - 100) - ((height - 100) * 15/100);
document.write("Hai "+person+" Berat Ideal mu "+perempuan);
}