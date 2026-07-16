import "../internal/pear";
import "../internal/text"
import "../internal/punching"

const HitCount = document.getElementById("hitCount") as HTMLElement;
const Pear = document.getElementById("pear_b") as HTMLElement;
const bagWrapper = document.querySelector('.bag-wrapper') as HTMLElement;

let count = 0;

Pear.addEventListener('click', (event: MouseEvent) => {
    count++;
    HitCount.textContent = count.toString();
});