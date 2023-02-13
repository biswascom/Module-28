function inputMoneyId(inputMoneyId){
    const inputValue = document.getElementById(inputMoneyId);
    const inputValuestring = inputValue.value;
    const inputMoney = parseFloat(inputValuestring);
    inputValue.value = '';
    return inputMoney;
};

function elementValueId(elementValueId){
    const elementValue = document.getElementById(elementValueId);
    const elementValueString = elementValue.innerText;
    const elementMoney = parseFloat(elementValueString);
    return elementMoney;
};

function setTotalMoney(elementValueId, totalMoney){
    const elementValue = document.getElementById(elementValueId);
    elementValue.innerText = totalMoney; 
};