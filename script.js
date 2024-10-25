var submitButton = document.getElementById('submitBtn');
var overlay = document.querySelector('.overlay');

gsap.set(overlay  , {
    scale : 0
})

submitButton.addEventListener("click" , function() {
    gsap.to(overlay  , {
        scale : 1 , 
        onComplete: function() {
           gsap.from(".text" , {
            opacity : 0 , 
            x: -100,
            stagger: 0.3,
            duration: 1
           })
        }
    })
})

overlay.addEventListener("click" , function() {
    gsap.to(overlay  , {
        scale : 0
    })
})