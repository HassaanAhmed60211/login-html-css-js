function getPrint(){
    var email = document.getElementById('email_inp').value;
    var pw = document.getElementById('pw_inp').value;
    var show_pw = document.querySelector('.show-pw');
    var show_email = document.querySelector('.show-email');
    show_email.textContent = 'Email: '+email;
    show_pw.textContent = 'Password: '+pw;
    show_email.style.display = 'block';
    show_pw.style.display = 'block';

}
