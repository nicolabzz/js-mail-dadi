const mailList = ['email1', 'email2', 'email3', 'email4', 'email5', 'email6', 'email7', 'email8', 'email9', 'email10', 'email11'];

const input = document.querySelector('[name="email"]'); // need this to get the email
const btn = document.querySelector('.btn');             // need this to use the verifying btn
const result = document.getElementById('result');       // need this to show the result
const cancel = document.querySelector('.cancel');       // need this to use the reser btn



//function to verify the email presence
btn.addEventListener('click', function() {

    if (input.value == '')
    {
        result.innerHTML = 'Please enter a valid email';
        return;
    }
    else
    {
        const currentEmail = input.value;
    
        // email verification cycle
        for (let i = 0; i < mailList.length; i++) {
    
            if (currentEmail === mailList[i])
            {
                result.innerHTML = 'Email already exists, sing-in :D';
                break;
            }
            else
            {
                result.innerHTML = 'Oh no, ci dispiace sembra che tu non sia registrato! Registrati, ti stiamo aspettando!';
            };
        };
    }
});



cancel.addEventListener('click', function() {
   
    result.innerText = '';
    window.location.reload();

});