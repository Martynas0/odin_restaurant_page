import "../styles/home.css";
const dailySpecial = "Szechuan style beef";

export default function renderPage() {
    
    const div = document.createElement("div");
    div.classList.add("home");

    const h2 = document.createElement("h2");
    h2.textContent = "Welcome to Oriental Flavors !";
    div.appendChild(h2);

    const p = document.createElement("p");
    p.textContent = "If you've come here for authentic chinese food - You're in the right place !";
    div.appendChild(p);

    const p2 = document.createElement("p");
    p2.textContent = `Our chefs special today is - ${dailySpecial}`;
    div.appendChild(p2);

    document.querySelector("#content").appendChild(div);
}