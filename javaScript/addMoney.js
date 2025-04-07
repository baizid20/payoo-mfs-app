

document.getElementById('add-Money-login').addEventListener('click',function(event){
    event.preventDefault();
    let moneyAdd = document.getElementById('add-amount').value 
    let convertMoneyAdd = parseFloat(moneyAdd)
   
    let mainMoney = document.getElementById('money').innerText
    let convertMainMoney = parseFloat(mainMoney)

    const pin = document.getElementById('pin').value
    const accountNum = document.getElementById('account-num').value


    if(pin.length === 4 && accountNum.length === 11){
         
        let result = convertMainMoney + convertMoneyAdd;
        document.getElementById('money').innerText = result;
    }

   


  


    // console.log(typeof(money))
    
    // let total = parseFloat('moneyAdd') + parseFloat('mainMoney')
    // let result = document.getElementById('money').innerText = total

//     let convertMoneyAdd = parseFloat('moneyAdd')

//    
//     let convertmainMoney = parseFloat(mainMoney)
//    let totalMoney = convertMoneyAdd + convertmainMoney
//    let totalMoneyConvert = parseFloat('totalMoney')
      
//    document.getElementById('money').innerText = totalMoneyConvert

})