document.getElementById('login-btn').addEventListener('click',function(){
    const numberInput = document.getElementById('number-input').value
    const passwordInput = document.getElementById('password-input').value

    if(numberInput.length === 11 && passwordInput.length === 4){
        window.location.href="./welcomeToPayooPage.html"
    }

    else if(numberInput.length !== 11){
        alert('Your Phone number is not correct !!!');
        console.log('number wrong')
    }
    else if(passwordInput.length !== 4){
        alert('Your password is not correct !!!');
        console.log('pass wrong')
    }
   else{
    alert('something wrong')
   }
   
    
})