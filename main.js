const form1 = document.getElementById('form');
const form2 = document.getElementById('form-suc');
const mailPat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let element = document.getElementById('txt-field');
function myFun(abC) {
    let myInput = abC.value;
     if(myInput.match(mailPat)) {
        form1.style.display = 'none';
        form2.style.display = 'block';
        element.id = 'txt-field';
        return true
    } else {
        document.getElementById('n-v').style.display = 'flex';
        element.id = 'invalid';
        
    } 
    if (myInput == "") {
        element.id = 'txt-field';
    }
} 
function myFun1() {
    form2.style.display = 'none';
    form1.style.display = 'flex';
    let abc = document.getElementById('invalid');
    abc.id = 'txt-field'
}
  






    /* if (input !== mailPat) {
        document.getElementById('n-v').style.display = 'flex';
    }
    if(input == mailPat){
        form1.style.display = 'none';
        form2.style.display = 'block';
        }
    }
    
    function myFun1() {
        form2.style.display = 'none';
        form1.style.display = 'flex';
    }
 */ 