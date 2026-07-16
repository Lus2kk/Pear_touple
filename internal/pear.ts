import gsap from 'gsap'

const Bag = document.getElementById('pear_b') as HTMLButtonElement
const DefautlText = document.getElementById('bag-label') as HTMLElement

window.addEventListener("DOMContentLoaded", () => {
    Bag.disabled = true 

    gsap.delayedCall(5, () => {
        Bag.disabled = false 
    })
})

const BoringText: string[] = [
    "Бей!",
  " Хм, ты тут?",
  "Мне скучно...",
  " Ну давай, ударь меня!",
  " Я всё вижу",
  " Время для тренировки!",
  " Испугался??",
  "А удары будут?", 
  "Нападай давай!"
];

let BoringTextIndex = 0; 
let idleTimer: gsap.core.Tween | null = null;

function ChangePhraze(seconds: number): void {
    if (idleTimer) {
        idleTimer.kill();
    }

    idleTimer = gsap.delayedCall(seconds, () => {
        DefautlText.textContent = BoringText[BoringTextIndex];
        BoringTextIndex++ 
        if (BoringTextIndex === 9) {
            BoringTextIndex -=9 
        }
        ChangePhraze(seconds);
    });
}

function resetAndStartNewTimer(seconds: number): void {
    if (idleTimer) {
        idleTimer.kill();
    }

    DefautlText.textContent = BoringText[0];
    BoringTextIndex = 1;

    idleTimer = gsap.delayedCall(seconds, () => {
        ChangePhraze(5);
    });
}

window.addEventListener("DOMContentLoaded", () => {
    ChangePhraze(5);
})

Bag.addEventListener('click', () => resetAndStartNewTimer(2))


