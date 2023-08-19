
function getInputValueById(id){
    let input = document.getElementById(id);
    let inputStringValue = input.value;
    let inputNumberValue = parseFloat(inputStringValue);
    return inputNumberValue
}
