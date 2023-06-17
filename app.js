function generateQRCode(){
    let website = document.getElementById('website').value;

    if(website){
        let qrcodeContainer = document.getElementById('qrcode');
        qrcodeContainer.innerHTML = '';
        new QRCode(qrcodeContainer, website);  //qrcode is the library and qrcode(location, link)
        document.getElementById('qr-code-container').style.display = 'block';
    }
    else{
        alert('Please enter a valid url');
    }
}