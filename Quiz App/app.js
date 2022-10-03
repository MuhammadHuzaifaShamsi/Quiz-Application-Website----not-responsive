function signup(){
    var a = document.getElementById('name').value;
    var b = document.getElementById('email1').value;
    var c = document.getElementById('pass1').value;
    localStorage.setItem('name',a)
    localStorage.setItem('email',b)
    localStorage.setItem('pass',c)
    alert('Data Inserted Successfully!')
}

function login(){
    var a = document.getElementById('email2').value;
    var b = document.getElementById('pass2').value;
    var c = localStorage.getItem('email')
    var d = localStorage.getItem('pass')

    if(a == c && b == d){
        alert('Login Successfully :)')
        window.location.href = './quizes.html'

    }
    else{
        alert('Wrong Password or Email Address!')
    }
}