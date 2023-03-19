function hitung() {

    var myForm = document.form1;
    var x = myForm.x.value;
    var y = myForm.y.value;
    var pil = myForm.opt.value;

    if(isNaN(x)){
        alert("maaf input harus angka");
    } else if(isNaN(y)){
        alert("maaf input harus angka");
    } else if (myForm.x.value == "") {
        alert("Masukkan angka pertama terlebih dahulu");
    } else if (myForm.y.value == "") {
        alert("Masukkan angka kedua terlebih dahulu");
    }

    if (pil == "tambah") {
        var z = x + y;
    } else if (pil == "kurang") {
        var z = x - y;
    } else if (pil == "kali") {
        var z = x * y;
    } else if (pil == "bagi") {
        var z = x / y;
    }
    myForm.hasil.value = z;
    myForm.x.value = "";
    myForm.y.value = "";
}
function resetForm() {
    document.form1.reset();
}