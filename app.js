let captchaValue;

let data = () => {
    let arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let x = (Math.floor(Math.random()* 62 ));
    return arr[x];
};


let  captcha = () => {
    let str = '';
    for(let i = 1; i <= 6; i++ ) {
        str += data();
    }
    return (str);
}


document.querySelector('.captcha').innerHTML = captcha(); 


let refreshCaptcha = () => {
    let newCaptcha = captcha();
    document.querySelector('.captcha').innerHTML = newCaptcha;
    document.querySelector('.success').innerHTML = '';
    document.querySelector('.success').innerHTML = '';
}




let submit = () => {
    let x = document.querySelector('.captcha-input').value;
    console.log(x);
    let y = document.querySelector('.captcha').innerHTML;
    console.log(y);

    document.querySelector('.captcha-input').value = '';

    if(x == y) {
        console.log('Success');
        document.querySelector('.success').innerHTML = 'Success';
    } else {
        console.log('Invalid Captcha');
        document.querySelector('.success').innerHTML = 'Invalid Captcha';

    }  
}





