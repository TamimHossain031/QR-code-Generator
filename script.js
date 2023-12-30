let btn = document.querySelector('.btn');
let img = document.querySelector('.qr-code');
let input = document.querySelector('#text');

btn.addEventListener('click',generate)

function generate(){
    if(input.value.length > 0){
        img.classList.remove('show')
        img.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+ input.value
        img.classList.add('show')
    }else{
        img.classList.remove('show');
        input.classList.add('error');
        setTimeout(()=>{
            input.classList.remove('error');
        },1000)
       
    }
   
        
}





