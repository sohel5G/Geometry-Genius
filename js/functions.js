
function getInputValueById(id){
    let input = document.getElementById(id);
    let inputStringValue = input.value;
    return parseFloat(inputStringValue);
}

function setElementValueById(id, value){
    let getElement = document.getElementById(id);
    getElement.innerText = value;
}

function addToCalculationArea(areaName, totalValue){
    let calculationEntry = document.getElementById('calculation-entry');
    let countElement = calculationEntry.childElementCount;
    let p = document.createElement('p');
    p.innerHTML = `
        ${countElement + 1})  ${areaName} - ${totalValue} cm <sup>2</sup> <button class="pb-1 px-2 bg-[#1090D8] text-white rounded-md text-sm">convert</button>
    `
    p.classList.add('mt-2');
    calculationEntry.appendChild(p);
}

