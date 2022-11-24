window.addEventListener('load',function(){
    new Glider(document.querySelector('.carousel__list'), {
        slidesToShow: 1,
        
        dots: '.carousel__indicadores',
        arrows: {
          prev: '.carousel__anterior',
          next: '.carousel__siguiente'
        }
      });
});
