const downloadBtn = document.querySelector('.convert-button');
const URLinput = document.querySelector('.URL-input');

downloadBtn.addEventListener('click', () => {
    console.log(`URL: ${URLinput.value}`);
    sendURL(URLinput.value);
});

const sendURL = (URL) => {
    window.location.href = `http://localhost:8080/download?URL=${URL}`;
};