
function getInputValueById(id){
    let input = document.getElementById(id);
    let inputStringValue = input.value;
    return parseFloat(inputStringValue);
}

function setElementValueById(id, value){
    let getElement = document.getElementById(id);
    getElement.innerText = value;
}

