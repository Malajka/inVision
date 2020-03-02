document.addEventListener('DOMContentLoaded', function(){

const slider = document.querySelector('.slider__items');
    const txt = document.querySelector('.call_to_action h1');


document.querySelector(".prev").addEventListener("click", function(){
        slider.classList.remove("slider__items--rocket")
        slider.classList.add("slider__items--moon")
        txt.innerHTML = "Visa to the Moon"



});
document.querySelector(".next").addEventListener("click", function(){
    slider.classList.remove("slider__items--moon")
    slider.classList.add("slider__items--rocket");
    txt.innerHTML = "Your trip start here"

});


});
