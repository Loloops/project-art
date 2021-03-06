

const scrolling = (upSelector) => {
  const upElement = document.querySelector(upSelector);
  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 1650) {
      upElement.classList.add('animated', 'fadeIn')
      upElement.classList.remove('fadeOut')
    } else {
      upElement.classList.add('fadeOut')
      upElement.classList.remove('fadeIn')
    }
  });

  //Request animation frame

  let links = document.querySelectorAll('[href^="#"]'),
      speed = 0.2;

  links.forEach(link => { 
    link.addEventListener('click', function (e) {  
      e.preventDefault();

      let widthTop = document.documentElement.scrollTop,
          hash = this.hash, //запоминаем хэш элемента по которому кликнули
          toBlock = document.querySelector(hash).getBoundingClientRect().top,//возвращаем размер элемента и его позицию относительно верха
          start = null;
      
      requestAnimationFrame(step)

      function step(time) {//автоматически передаваемый аргумент
        if (start === null) { //проверка на то первый раз ли запускается анимация
          start = time;
        }
        
        let progress = time - start,
            r = (toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock));
        //r - отвечает за кол-во пикселей на которое надо прокуртить за время анимации
        
        document.documentElement.scrollTo(0, r);

        if (r != widthTop + toBlock) { //условие остановки анимации если равна то долистали до элемента(px)
          requestAnimationFrame(step);
        } else {
          location.hash = hash;
        }
      }
    })
  })

  //Native JS
  // const element = document.documentElement,
  //       body = document.body;
  
  // const calcScroll = () => {
  //   upElement.addEventListener('click', function (e) {  
  //     let scrollTop = Math.round(body.scrollTop || element.scrollTop);

  //     if (this.hash !== '') {
  //       e.preventDefault();
  //       let hashElement = document.querySelector(this.hash),
  //           hashElementTop = 0;
        
  //       while(hashElement.offsetParent) {
  //         hashElementTop += hashElement.offsetTop;
  //         hashElement = hashElement.offsetParent;
  //       }

  //       hashElementTop = Math.round(hashElementTop);
  //       smoothScroll(scrollTop, hashElementTop, this.hash)
  //     }
  //   })
  // }

  // const smoothScroll = (from, to, hash) => {
  //   let timeInterval = 1,
  //       prevScrollTop,
  //       speed;

  //   if (to > from) {
  //     speed = 30;
  //   } else {
  //     speed = -30
  //   }

  //   let move = setInterval(function () { 
  //     let scrollTop = Math.round(body.scrollTop || element.scrollTop);

  //     if (
  //       prevScrollTop === scrollTop ||
  //       (to > from && scrollTop >= to) ||
  //       (to < from && scrollTop <= to)
  //     ) {
  //       clearInterval(move)
  //       history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
  //     } else {
  //       body.scrollTop += speed;
  //       element.scrollTop += speed;
  //       prevScrollTop = scrollTop;
  //     }
  //   }, timeInterval)

  // }

  // calcScroll();
}
export default scrolling