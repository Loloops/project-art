const calc = (size, material, options, promoCode, result, state) => {
  const sizeBlock = document.querySelector(size),
        materialblock = document.querySelector(material),
        optionsBlock = document.querySelector(options),
        promocodeBlock = document.querySelector(promoCode),
        resultBlock = document.querySelector(result),
        endCalc = document.querySelector('.calc-price');

  let sum = 0;

  const calcFunction = () => {
    sum = Math.round((+sizeBlock.value) * (+materialblock.value) + (+optionsBlock.value));

    if (sizeBlock.value == '' || materialblock.value == '') {
      resultBlock.textContent = "Пожалуйста, выберите размер и материал";
    } else if (promocodeBlock.value === 'IWANTPOPART') {
      resultBlock.textContent = Math.round(sum * 0.7);
    } else {
      resultBlock.textContent = sum;
    }
  }

  sizeBlock.addEventListener('change', calcFunction)
  materialblock.addEventListener('change', calcFunction)
  optionsBlock.addEventListener('change', calcFunction)
  promocodeBlock.addEventListener('input', calcFunction)

  function bindActionToElems (event, elem, prop) {
      elem.addEventListener(event, () => {
        switch (elem.nodeName) {
          case 'SELECT':
            state[prop] = elem.value;
            break;
          case 'INPUT':
            state[prop] = elem.value;
            break;
        }
      state.inTotal = endCalc.innerHTML;
      })
  }

  bindActionToElems('change', sizeBlock, 'size');
  bindActionToElems('change', materialblock, 'material');
  bindActionToElems('change', optionsBlock, 'option');
  bindActionToElems('input', promocodeBlock, 'promoCode');
  
}
export default calc