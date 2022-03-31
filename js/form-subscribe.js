// contact form
const scriptURL = 'https://script.google.com/macros/s/AKfycbx7xcma2_oF96MlJUH94heB7owLfLIMSF4SdAq3xHbahI2u2BGt-rCNk48ynN8unxk/exec';
const form = document.forms['muluphee-contact-form'];
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // ketika tombol submit diklik
    // tampilkan tombol loading, hilangkan tombol kirim
    btnLoading.classList.toggle('d-none');
    btnKirim.classList.toggle('d-none');
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then((response) => {
            // tampilkan tombol kirim, hilangkan tombol loading
            btnLoading.classList.toggle('d-none');
            btnKirim.classList.toggle('d-none');
            // tampilkan alert
            myAlert.classList.toggle('d-none');
            // reset formnya
            form.reset();
            console.log('Success!', response);
        })
        .catch((error) => console.error('Error!', error.message));
});
// end