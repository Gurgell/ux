function gerarQRCode() {
    var linkInput = document.getElementById("link");
    var link = linkInput.value;

    var qrcodeDiv = document.getElementById("qrcode");
    qrcodeDiv.innerHTML = "";

    var qrcode = new QRCode(qrcodeDiv, {
        text: link,
        width: 200,
        height: 200
    });
}