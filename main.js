
/*VARIABLES UTILIZADAS*/ 
let pass = document.querySelector('#pass1');
let pass2 = document.querySelector('#pass2');
let nombre = document.querySelector('#name')
let phone = document.querySelector('#phone')
let captcha = document.querySelector('#captcha')
let alert = document.querySelector('#alert')
let alert2 = document.querySelector('#alert2')
let alert3 = document.querySelector('#alert3');
let alert4 = document.querySelector('#alert4')
let label = document.querySelector('#label8').innerHTML
let button = document.querySelector('#button')
let all = document.querySelectorAll('.ver');


button.disabled = true;

/*VALIDAR QUE TODOS LOS CAMPOS ESTEN COMPLETOS*/
all[6].addEventListener("keyup", () => {
    if(all[0].value !== "" && all[1].value !== "" && all[2].value !== "" && all[3].value !== "" && all[4].value !== "" && all[5].value !== "" && all[6].value !== "") {
        button.disabled = false;
        button.classList.add('red');
    } else {
        button.disabled = true;
    }
  })

/*VALIDAR CONTRASEÑÁ DIGITOS*/ 
const validar = (event) => {

    event.preventDefault();

    if (event.target.value.search(/[0-9]/) < 0) {
        
        pass.classList.add('invalido')
        alert.classList.add('alertPop')
       
    } else{
        alert.classList.remove('alertPop')
        pass.classList.remove('invalido')
       
    }

}

/*VALIDAR CONTRASEÑAS IGUALES*/ 
const same = (event) => {

    if (event.target.value !== pass.value) {
        pass2.classList.add('invalido')
        alert2.classList.add('alertPop')
    } else {
        pass2.classList.remove("invalido")    
        alert2.classList.remove('alertPop')
    }

}

/*VALIDAR NUMERO DE TELEFONO*/ 
const num = (event) => {

  
    if (event.target.value.charAt(0).search(/[1-4]/)) {
        phone.classList.add('invalido')
        alert3.classList.add('alertPop')
    } else {
        phone.classList.remove('invalido')
        alert3.classList.remove('alertPop')
    }

}

/*VALIDAR CAPTCHA*/
const captc = (event) => {
    
    console.log(event.target.value)
    console.log(label)

    if(captcha.value === label) {

        return true;

    } else {

        button.disabled = true;

        captcha.classList.remove('valido')
        
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'captcha incorrecto',
            showConfirmButton: false,
            timer: 1500
          })

    }

}

/*VALIDAR BOTON DE ENVIO*/ 
const subm = (event) => {


    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Formulario enviado correctamente',
        showConfirmButton: false,
        timer: 2500,
        
      })

    event.currentTarget.submit(3000)  
}






/*EVENTOS PARA EFECTOS DE LOS INPUT*/
const mouse = (id) => {

    document.querySelector(`#${id}`).classList.add('active');

}

const mouseOut = (id) => {

    document.querySelector(`#${id}`).classList.remove('active');

}

const focus = () => document.querySelector('#label').classList.replace('down','up') 
const blur = () => {

    document.querySelector('#name').value === "" ? document.querySelector('#label').classList.replace('up','down') : document.querySelector('#label').classList.add('up')
    
}

const focus2 = () => document.querySelector('#label2').classList.replace('down','up')
const blur2 = () => {

    document.querySelector('#email').value === "" ? document.querySelector('#label2').classList.replace('up','down') : document.querySelector('#label2').classList.add('up')
    
}

const focus3 = () => document.querySelector('#label3').classList.replace('down','up')
const blur3 = () => {

    document.querySelector('#pass1').value === "" ? document.querySelector('#label3').classList.replace('up','down') : document.querySelector('#label3').classList.add('up')
    
}

const focus4 = () => document.querySelector('#label4').classList.replace('down','up')
const blur4 = () => {

    document.querySelector('#pass2').value === "" ? document.querySelector('#label4').classList.replace('up','down') : document.querySelector('#label4').classList.add('up')
    
}

const focus5 = () => document.querySelector('#label5').classList.replace('down','up')
const blur5 = () => {

    document.querySelector('#message').value === "" ? document.querySelector('#label5').classList.replace('up','down') : document.querySelector('#label5').classList.add('up')
    
}

const focus6 = () => document.querySelector('#label6').classList.replace('down','up')
const blur6 = () => {

    document.querySelector('#phone').value === "" ? document.querySelector('#label6').classList.replace('up','down') : document.querySelector('#label6').classList.add('up')
    
}

const focus7 = () => document.querySelector('#label7').classList.replace('down','up')
const blur7 = () => {

    document.querySelector('#captcha').value === "" ? document.querySelector('#label7').classList.replace('up','down') : document.querySelector('#label7').classList.add('up')
    
}


/*ASIGNACIÓN DE EVENTOS*/
document.querySelector('#name').addEventListener('focus',focus)
document.querySelector('#name').addEventListener('blur',blur)
document.querySelector('#email').addEventListener('focus',focus2)
document.querySelector('#email').addEventListener('blur',blur2)
document.querySelector('#pass1').addEventListener('focus',focus3)
document.querySelector('#pass1').addEventListener('blur',blur3)
document.querySelector('#pass2').addEventListener('focus',focus4)
document.querySelector('#pass2').addEventListener('blur',blur4)
document.querySelector('#message').addEventListener('focus',focus5)
document.querySelector('#message').addEventListener('blur',blur5)
document.querySelector('#phone').addEventListener('focus',focus6)
document.querySelector('#phone').addEventListener('blur',blur6)
document.querySelector('#captcha').addEventListener('focus',focus7)
document.querySelector('#captcha').addEventListener('blur',blur7)

button.addEventListener('click',subm)
captcha.addEventListener('change',captc)
phone.addEventListener('keyup',num)
pass.addEventListener('change',validar)
pass2.addEventListener('change',same)