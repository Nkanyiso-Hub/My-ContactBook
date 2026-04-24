

let rootPath = "https://mysite.itvarsity.org/api/ContactBook/";    //URL of the server
let apiKey = checkApiKey();

//This function checks if you have an api key set
function checkApiKey() {
    if (!localStorage.getItem("apiKey")) {
        window.open ("enter-api-key.html", "_self");
    }
    return localStorage.getItem("apiKey");
}