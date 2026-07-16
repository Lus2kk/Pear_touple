import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const startAnomation = gsap.timeline({ defaults: { ease: "power2.out" } });


startAnomation.from('.тапалка', {
    duration: 1.5,
    opacity: 0, 
     y: -50
}).from('.text_t', {
    duration: 1.5, 
    opacity: 0,
    y: 50
}).from('.counter', {
    duration: 1.5,
    opacity: 0, 
    x: 150
}, "+=0.5")

const finalAnimation = gsap.timeline({
     onStart: () => {
        gsap.delayedCall(3, () => buttonJump.play())
    },
    defaults: { ease: "power2.out" },
    scrollTrigger: {
        trigger: ".footer",
        start: "top 90%",
        toggleActions: "play none none none"
    }
});

finalAnimation.from('.author', {
        duration: 1,
        opacity: 0,
        y: 50
    })
    .from('.footer__links', {
        duration: 1,
        opacity: 0,
        y: 30
    }, "-=0.5");

const buttonJump = gsap.timeline({
    repeat: -1,
    repeatDelay: 3,
    paused: true
})
    buttonJump.to('.instagram_b', { duration: 0.2, y: -10 })
    .to('.instagram_b', { duration: 0.2, y: 0 }, "+=0.1")
    .to('.telegram_b', { duration: 0.2, y: -10 })
    .to('.telegram_b', { duration: 0.2, y: 0 }, "+=0.1")
    .to('.github_b', { duration: 0.2, y: -10 })
    .to('.github_b', { duration: 0.2, y: 0 }, "+=0.1");

const socialButtons = document.querySelectorAll('.instagram_b, .telegram_b, .github_b');

socialButtons.forEach((btn) => {

  btn.addEventListener('mouseenter', () => {
    buttonJump.pause();
    buttonJump.progress(0);
  });

  btn.addEventListener('mouseleave', () => {
    buttonJump.play(1.5);
  });
});
