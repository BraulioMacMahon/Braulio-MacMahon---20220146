$('.slider-cabecalho').slick({
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    fade: false,
    autoplay: true,
    autoplaySpeed:4000,
    cssEase: 'linear',
    slidesToScroll: 1

});



/*
document.addEventListener("DOMContentLoaded", function() {
    // Adiciona a classe "visible" ao menu após um pequeno atraso
    setTimeout(function() {
        document.querySelector(".menu").classList.add("visible");
    }, 1200); // Atraso de 500ms (0.5 segundos)
   
});

document.addEventListener("DOMContentLoaded", function() {
    // Adiciona a classe "visible" ao menu após um pequeno atraso
    setTimeout(function() {
        document.querySelector(".logo img").classList.add("visible");
    }, 500); // Atraso de 500ms (0.5 segundos)
   
});

document.addEventListener("DOMContentLoaded", function() {
    // Adiciona a classe "visible" ao menu após um pequeno atraso
    setTimeout(function() {
        document.querySelector(".texto-cabecalho").classList.add("visible");
    }, 2000); // Atraso de 500ms (0.5 segundos)
   
});

document.addEventListener("DOMContentLoaded", function() {
    // Adiciona a classe "visible" ao menu após um pequeno atraso
    setTimeout(function() {
        document.querySelector(".cabecalho-icones").classList.add("visible");
    }, 3000); // Atraso de 500ms (0.5 segundos)
   
});



// Função para verificar se o objeto está visível na tela
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


var objeto = document.querySelector('.pc');

var observer = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {
        
        if (entry.isIntersecting) {

            setTimeout(function() {
                objeto.classList.add('visible');
            }, 500); 

        }else {
        
        objeto.classList.remove('visible');
    }
});
}, { threshold: 0.5 }); 

observer.observe(objeto);


var objeto1 = document.querySelector('.banner-2-txt');

var observer = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {
        
        if (entry.isIntersecting) {

            setTimeout(function() {
                objeto1.classList.add('visible');
            }, 500); 

        }else {
        
        objeto1.classList.remove('visible');
    }
});
}, { threshold: 0.5 }); 

observer.observe(objeto1);



var objeto2 = document.querySelector('.banner-botao');

var observer = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {
        
        if (entry.isIntersecting) {

            setTimeout(function() {
                objeto2.classList.add('visible');
            }, 1000); 

        }else {
        
        objeto2.classList.remove('visible');
    }
});
}, { threshold: 0.5 }); 

observer.observe(objeto2);
*/
