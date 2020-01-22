class Convert {
    constructor(URL, metadata = 'just a temp. string'){
        this.URL = URL;
        this.metadata = metadata;
    }
    
    get urlStatus(){
        return `Actual URL: ${this.URL} | Metadata: ${this.metadata}`
    }
    
    static sendURL(URL){
        window.location.href = `http://localhost:8080/download?URL=${this.URL}`;
    }
}

const downloadBtn = document.querySelector('.convert-button');
const URLinput = document.querySelector('.URL-input');

let convert = new Convert(URLinput.value);

downloadBtn.addEventListener('click', () => {
    console.log(`URL: ${URLinput.value}`);
    //This is the static method that sends the query string trough the server
    Convert.sendURL(URLinput.value);
});

