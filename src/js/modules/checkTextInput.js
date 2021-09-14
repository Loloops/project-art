const checkTextInputs = (selector) => {
  const txtInputs = document.querySelectorAll(selector);
  

  txtInputs.forEach(input => {
    input.addEventListener('keypress', function (e) {  
      if (e.key.match(/[^а-яё 0-9]/ig)) {
        e.preventDefault()
      }
    });

    input.addEventListener('blur', function (e) {  
      if(input.value.match(/[a-z]/ig)){
        e.preventDefault()
        input.style.color = 'red'
        input.value = 'Введите корректное значение'
 
      }
    });
    input.addEventListener('focus', function () {  
        input.style.color = ''
        input.value = ''  
    });
    
  });
}
export default checkTextInputs;