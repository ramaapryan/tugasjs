function Login(){ 
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    if (user=="mimin123" && pass=="mimin123"){
        alert("Selamat Datang Mimin, Anda Administrator");
    }else if(user=="budi" && pass=="budi123"){
        alert("Selamat Datang Budi, Anda Operator");
    }else{
        alert("Maaf Anda Gagal Login");
    }
}