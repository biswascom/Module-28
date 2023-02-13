document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositInputMoney = inputMoneyId('input-money');
    const depositElementMoney = elementValueId('deposit');
    const totalMoney = depositElementMoney + depositInputMoney;

    setTotalMoney('deposit', totalMoney);

    const availableBalance = elementValueId('available-balance');
    const totalAvailableBalance = availableBalance + depositInputMoney;
    setTotalMoney('available-balance', totalAvailableBalance);
});