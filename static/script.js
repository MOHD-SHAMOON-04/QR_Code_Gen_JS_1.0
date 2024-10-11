let qrGenerated = false; 

function generateQR(event) {
    event.preventDefault();

    let qrInput = document.getElementById('qr_input');
    let qrImg = document.getElementById('qr_img');
    let downloadLink = document.getElementById('download_img');
    let imgBox = document.getElementById('img_box');

    if (qrInput.value.length > 0) {
       
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrInput.value)}`;
        qrImg.style.display = 'block';
        imgBox.classList.add('show-img');

        
        downloadLink.href = qrImg.src;
        downloadLink.style.display = 'block'; 

        qrGenerated = true; 
    } else {
        qrInput.classList.add('error');
        setTimeout(() => {
            qrInput.classList.remove('error');
        }, 1000);
    }
}


window.addEventListener('beforeunload', function (event) {
    if (qrGenerated) {
        const confirmationMessage = "You have generated a QR code. Are you sure you want to leave this page without saving it?";
        event.returnValue = confirmationMessage; 
        return confirmationMessage; 
    }
});
