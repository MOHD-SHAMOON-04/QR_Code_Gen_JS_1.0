function generateQR() {

    if (qr_input.value.length > 0) {
        qr_img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qr_input.value}`;
        img_box.classList.add('show-img');
    }
    else{
        qr_input.classList.add('error');
        setTimeout(() => {
            qr_input.classList.remove('error');
        }, 1000);
    }
}

let img_box = document.getElementById('img_box');
let qr_img = document.getElementById('qr_img');
let qr_input = document.getElementById('qr_input');


// Download QR Code Image logic - will be implemented in future update

// let download_img = document.getElementById('download_img');

// document.getElementById("download_img").addEventListener("click", function() {
//     let link = document.createElement("a");
//     link.href = document.getElementById("qr_img").src; // Image source
//     link.download = "QR-Code.jpg"; // File name
//     link.click(); // Trigger download
// });

// direct image download still not working
// future update will fix this issue
// possible solution :
// 1. using a proxy server to avoid CORS issue (not recommended)
// 2. using server-side script to generate QR code and download it (recommended)
// 3. using a third-party API to generate QR code and download it (recommended) (currently using this method)
// 4. encoding the image to base64 and download it (not recommended) (not suitable for large images) (you should have the image in your server to encode it to base64)
// 5. using a library to generate QR code and download it (recommended)
// end of the code