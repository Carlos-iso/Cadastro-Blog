let eye = document.querySelector('#eyepassword')
let inputpassword = document.querySelector('#password')
let eyecomfirm = document.querySelector('#eyepasswordcomfirm')

eye.addEventListener('click', ()=>{

    if (inputpassword.getAttribute('type') == 'password') {
        inputpassword.setAttribute('type', 'text')        
    } else {
        inputpassword.setAttribute('type', 'password')
    }
})

eyecomfirm.addEventListener('click', ()=>{
    let inputpasswordcomfirm = document.querySelector('#passwordcomfirm')

    if (inputpasswordcomfirm.getAttribute('type') == 'password') {
        inputpasswordcomfirm.setAttribute('type', 'text')        
    } else {
        inputpasswordcomfirm.setAttribute('type', 'password')
    }
})