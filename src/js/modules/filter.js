const filter = () => {
  const menu = document.querySelector('.portfolio-menu'),
        all = menu.querySelector('.all'),
        items = menu.querySelectorAll('li'),
        lovers = menu.querySelector('.lovers'),
        chef = menu.querySelector('.chef'),
        girl = menu.querySelector('.girl'),
        guy = menu.querySelector('.guy'),
        grandmother = menu.querySelector('.grandmother'),
        granddad = menu.querySelector('.granddad'),
        wrapper = document.querySelector('.portfolio-wrapper'),
        markAll = wrapper.querySelectorAll('.all'),
        markGirl = wrapper.querySelectorAll('.girl'),
        markLovers = wrapper.querySelectorAll('.lovers'),
        markChef = wrapper.querySelectorAll('.chef'),
        markGuy = wrapper.querySelectorAll('.guy'),
        no = document.querySelector('.portfolio-no');
        
  const typeFilter = markType => {
    markAll.forEach(mark => {
      mark.style.display = 'none'
      mark.classList.remove('animated', 'fadeIn')
    })
    no.style.display = 'none'
    no.classList.remove('animated', 'fadeIn')

    if (markType) {
      markType.forEach(mark => {
        mark.style.display = 'block'
        mark.classList.add('animated', 'fadeIn')
      })
    } else {
        no.style.display = 'block'
        no.classList.add('animated', 'fadeIn')
    }
  }

  all.addEventListener('click', () => {
    typeFilter(markAll);
  })

  lovers.addEventListener('click', () => {
    typeFilter(markLovers)
  })

  chef.addEventListener('click', () => {
    typeFilter(markChef)
  })

  girl.addEventListener('click', () => {
    typeFilter(markGirl)
  })

  guy.addEventListener('click', () => {
    typeFilter(markGuy)
  })

  grandmother.addEventListener('click', () => {
    typeFilter()
  })

  granddad.addEventListener('click', () => {
    typeFilter()
  })


  
  menu.addEventListener('click', (e) => {
    let target = e.target;
    if (target && target.tagName == 'LI') {
      items.forEach(btn => btn.classList.remove('active'))
      target.classList.add('active');
    }
  })
}
export default filter;