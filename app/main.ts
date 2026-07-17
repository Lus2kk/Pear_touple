import "../internal/pear";
import "../internal/text"
import "../internal/punching"

window.onload = () => {
    history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
};
const HitCount = document.getElementById("hitCount") as HTMLElement;
const Pear = document.getElementById("pear_b") as HTMLElement;

let count = 0;

Pear.addEventListener('click', (event: MouseEvent) => {
    count++;
    HitCount.textContent = count.toString();
});