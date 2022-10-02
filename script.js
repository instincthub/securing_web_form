
const contactForm = document.getElementById('contact');
const formInput = document.querySelectorAll('input');
const formTextarea = document.querySelector('textarea');
console.log(formInput)

// Not a number and lengnth number of >= 10
const notNumber = (e) =>{
  if(Number(e) && e.length >= 10){
    return true
  }
  else{
    return false
  }
}

// Check character lenth
const textLength = (e) =>{
  if(e.length >= 3){
    return true
  }
  else{
    return false
  }
}


// Prevent default and handle errors.
contactForm.addEventListener('submit', (e) =>{
  e.preventDefault()

  formInput.forEach(element =>{
    if(element.getAttribute('type') === 'tel'){

      if(notNumber(element.value) === false){
        element.classList.add('err')
        element.classList.remove('success')
      }
      else if(notNumber(element.value)){
        element.classList.remove('err')
        element.classList.add('success')
      }
    }
    else{
      if(textLength(element.value) === false){
        element.classList.add('err')
        element.classList.remove('success')
      }
      else{
        element.classList.remove('err')
        element.classList.add('success')
      }
    }

    if(textLength(formTextarea.value) === false){
      formTextarea.classList.add('err')
      formTextarea.classList.remove('success')
    }
    else{
      formTextarea.classList.remove('err')
      formTextarea.classList.add('success')
    }

  })


})
