let qrGenerated = false; // Track if QR code has been generated

function generateQR(event) {
    event.preventDefault(); // Prevent the form from submitting

    let qrInput = document.getElementById('qr_input');
    let qrImg = document.getElementById('qr_img');
    let downloadLink = document.getElementById('download_img');
    let imgBox = document.getElementById('img_box');

    if (qrInput.value.length > 0) {
        // Generate QR code
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrInput.value)}`;
        qrImg.style.display = 'block'; // Show the QR code image
        imgBox.classList.add('show-img');

        // Update the download link and make it visible
        downloadLink.href = qrImg.src;
        downloadLink.style.display = 'block'; // Show the download button

        qrGenerated = true; // Mark that QR has been generated

        // Optionally redirect to a success page (replace with your actual link)
        // window.location.href = 'success.html';
    } else {
        qrInput.classList.add('error');
        setTimeout(() => {
            qrInput.classList.remove('error');
        }, 1000);
    }
}

// Alert before leaving the page if QR code has been generated
window.addEventListener('beforeunload', function (event) {
    if (qrGenerated) {
        const confirmationMessage = "You have generated a QR code. Are you sure you want to leave this page without saving it?";
        event.returnValue = confirmationMessage; // For most browsers
        return confirmationMessage; // For Firefox
    }
});
