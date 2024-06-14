let qrtext = document.getElementById("qrtext");
let qrbox = document.getElementById("qrbox");
let qrimg = document.getElementById("qrimg");
let download = document.getElementById("download");
let button = document.getElementById("button");

function generateQR()
{
    if(qrtext.valiue.length > 0){
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
        qrText.value;
        qrBox.classList.add("show-img");
        button.style.display = "block";
        download.href = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
        qrText.value;
        download.download = qrText.value;
        console.log(download.href.value);
    }else{
        qrText.classList.add("error");
        setTimeout(()=>{
        qrText.classList.remove("error");
        }, 1000)
    }
}