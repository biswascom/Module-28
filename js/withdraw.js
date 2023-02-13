document.getElementById('btn-withdraw').addEventListener('click', function(){
    const inputValueWithdraw = inputMoneyId('input-withdraw');
    const withdrawElementMoney = elementValueId('withdraw');
    const totalMoney = withdrawElementMoney + inputValueWithdraw;
    
    setTotalMoney('withdraw', totalMoney);

    const availableBalance = elementValueId('available-balance');
    const totalAvailableBalance = availableBalance - inputValueWithdraw;
    setTotalMoney('available-balance', totalAvailableBalance);
});