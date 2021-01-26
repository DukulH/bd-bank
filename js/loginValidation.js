//login btn event handler
const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function(){
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = 'block';
})
//deposit btn event handler
const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click', function (){
    const depositAmount = document.getElementById('depositAmount').value;
    const depositNumber = parseFloat(depositAmount);

    updateSpanText('currentDeposit', depositNumber);
    updateSpanText('currentBalance', depositNumber);
    document.getElementById('depositAmount').value = "";

})
function updateSpanText(id,depositNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = depositNumber+currentNumber;
    document.getElementById(id).innerText = total;
}

// withdraw btn event handler
const withdrawBtn = document.getElementById('addWithdraw');
withdrawBtn.addEventListener('click', function (){
    const withdrawAmount = document.getElementById('withdrawAmount').value;
    const withdrawNumber = parseFloat(withdrawAmount);

    
    let currentWithdraw = updateSpan('currentWithdraw');
    const totalWithdraw = withdrawNumber+currentWithdraw;
    document.getElementById('currentWithdraw').innerText = totalWithdraw;

    let currentBalance = updateSpan('currentBalance');
    const totalBalance = currentBalance - withdrawNumber;
    document.getElementById('currentBalance').innerText = totalBalance;

    document.getElementById('withdrawAmount').value = "";

})
function updateSpan(id){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    return currentNumber;
}