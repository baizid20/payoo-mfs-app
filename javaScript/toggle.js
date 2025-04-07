document.getElementById('add-mony-section').style.display = 'none';
document.getElementById('cash-out-Section').style.display = 'none';
document.getElementById('Transfer-Money-Section').style.display = 'none';
document.getElementById('Get-bonus-section').style.display = 'none';
document.getElementById('Paybil-section').style.display = 'none';
document.getElementById('Transaction-section').style.display = 'block';




document.getElementById('add-money').addEventListener('click',function(event)

{
    event.preventDefault()
    document.getElementById('add-mony-section').style.display = 'block';
    document.getElementById('cash-out-Section').style.display = 'none';
    document.getElementById('Transfer-Money-Section').style.display = 'none';
    document.getElementById('Get-bonus-section').style.display = 'none';
    document.getElementById('Paybil-section').style.display = 'none';
    document.getElementById('Transaction-section').style.display = 'none';
}

)
document.getElementById('cashout').addEventListener('click',function(event)

{
    event.preventDefault()
    document.getElementById('add-mony-section').style.display = 'none';
    document.getElementById('cash-out-Section').style.display = 'block';
    document.getElementById('Transfer-Money-Section').style.display = 'none';
    document.getElementById('Get-bonus-section').style.display = 'none';
    document.getElementById('Paybil-section').style.display = 'none';
    document.getElementById('Transaction-section').style.display = 'none';
}

)
document.getElementById('transfer-money').addEventListener('click',function(event)

{
    event.preventDefault()
    document.getElementById('add-mony-section').style.display = 'none';
    document.getElementById('cash-out-Section').style.display = 'none';
    document.getElementById('Transfer-Money-Section').style.display = 'block';
    document.getElementById('Get-bonus-section').style.display = 'none';
    document.getElementById('Paybil-section').style.display = 'none';
    document.getElementById('Transaction-section').style.display = 'none';
}

)
document.getElementById('get-bonus').addEventListener('click',function(event)

{
    event.preventDefault()
    document.getElementById('add-mony-section').style.display = 'none';
    document.getElementById('cash-out-Section').style.display = 'none';
    document.getElementById('Transfer-Money-Section').style.display = 'none';
    document.getElementById('Get-bonus-section').style.display = 'block';
    document.getElementById('Paybil-section').style.display = 'none';
    document.getElementById('Transaction-section').style.display = 'none';
}

)
document.getElementById('pay-bill').addEventListener('click',function(event)

{
    event.preventDefault()
    document.getElementById('add-mony-section').style.display = 'none';
    document.getElementById('cash-out-Section').style.display = 'none';
    document.getElementById('Transfer-Money-Section').style.display = 'none';
    document.getElementById('Get-bonus-section').style.display = 'none';
    document.getElementById('Paybil-section').style.display = 'block';
    document.getElementById('Transaction-section').style.display = 'none';
}

)
document.getElementById('transaction').addEventListener('click',function(event)

{
    event.preventDefault()
    document.getElementById('add-mony-section').style.display = 'none';
    document.getElementById('cash-out-Section').style.display = 'none';
    document.getElementById('Transfer-Money-Section').style.display = 'none';
    document.getElementById('Get-bonus-section').style.display = 'none';
    document.getElementById('Paybil-section').style.display = 'none';
    document.getElementById('Transaction-section').style.display = 'block';
}

)


