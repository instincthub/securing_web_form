const contactForm = document.getElementById('contact')

// Not a number and length of number >= 10 
const notNumber = (e) =>{
    if (Number(e) && e.length >= 10) {
        return true
    }
    else{
        return false
    }
}

// Check character length
const textLength = (e) =>{
    if (e.length >= 3) {
        return true
    }
    else{
        return false
    }
}


// Prevent default and handle error on submit.
contactForm.addEventListener('submit', (e) =>{
    e.preventDefault()

    const formInputs = contactForm.querySelectorAll('input')
    const formTextarea= contactForm.querySelector('textarea')

    formInputs.forEach(element => {
        if (element.getAttribute('type') === 'tel') {
            if (!notNumber(element.value)) {
                element.classList.add('err')
            }
        }
        else if (!textLength(element.value)) {
            element.classList.add('err')
        }
    });  

    if (!textLength(formTextarea.value)) {
        formTextarea.classList.add('err')
    }
})