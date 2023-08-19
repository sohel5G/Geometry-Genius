document.getElementById('btn-triangle').addEventListener('click', function(){
    let baseInputValue = getInputValueById('triangle-base');
    let heightInputValue = getInputValueById('triangle-height');
    let area = 0.5 * baseInputValue * heightInputValue;
    setElementValueById('triangle-total', area);
});

document.getElementById('btn-rectangle').addEventListener('click', function(){
    let baseInputValue = getInputValueById('rectangle-base');
    let heightInputValue = getInputValueById('rectangle-height');
    let area = baseInputValue * heightInputValue;
    setElementValueById('rectangle-total', area);
});

document.getElementById('btn-parallelogram').addEventListener('click', function(){
    let baseInputValue = getInputValueById('parallelogram-base');
    let heightInputValue = getInputValueById('parallelogram-height');
    let area = baseInputValue * heightInputValue;
    setElementValueById('parallelogram-total', area);
});






document.getElementById('btn-ellipse').addEventListener('click', function(){
    let majorRadius = getInputValueById('major-radius');
    let minorRadius = getInputValueById('minor-radius');
    let area = Math.PI * majorRadius * minorRadius;
    setElementValueById('ellipse-total', area.toFixed(2));
});





