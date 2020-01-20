const downloadBtn = document.querySelector('.convert-button');
const URLinput = document.querySelector('.URL-input');

downloadBtn.addEventListener('click', () => {
    console.log(`URL: ${URLinput.value}`);
    sendURL(URLinput.value);
});

//This is the function that sends the query string trough the server
const sendURL = (URL) => {
    window.location.href = `http://localhost:8080/download?URL=${URL}`;
};
