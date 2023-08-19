document.getElementById('btn-triangle').addEventListener('click', function(){
    let baseInputValue = getInputValueById('input-triangle-base');
    let heightInputValue = getInputValueById('input-triangle-height');
    let area = 0.5 * baseInputValue * heightInputValue;
    setElementValueById('triangle-total', area);
});


