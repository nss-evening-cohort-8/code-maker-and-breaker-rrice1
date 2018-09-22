let word = document.getElementById('wordInput');
let secret = document.getElementById('secretInput');

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
    };

let wordClick = () => {
    let newString = '';
    let newArray = [];
    let splitWord = word.value.split('');
    for(i=0;i<splitWord.length;i++){
        newString += splitWord[i].charCodeAt() +',';
        newArray = newString.split(',');

        newArray.pop();
        printToDom(newArray,'wordToSecret')
    }

};

let secretClick = () => {
    let newString = '';
    let splitSecret = secret.value.split(',');
    for(i=0;i<splitSecret.length;i++){
        newString += fromCharCode(splitSecret[i]);
        printToDom(newString,'secretToWord')
    }
}


document.getElementById("convertToSecret").addEventListener("click", wordClick);
document.getElementById("convertToWord").addEventListener("click", secretClick);