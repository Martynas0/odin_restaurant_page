import "../styles/about.css";


export default function renderPage() {

    const div = document.createElement("div");
    div.classList.add("about");

    const h2 = document.createElement("h2");
    h2.textContent = "Oriental flavors - Our mission.";
    div.appendChild(h2);

    const address = document.createElement("p");
    address.setAttribute("aria-label", "Address");
    address.innerHTML = "Building 26,<br>Rockton blue road,<br>Salford,<br>Manchester,<br>M37 6GU.";
    div.appendChild(address);

    const p = document.createElement("p");
    p.textContent = "We are a small family restaurant with a goal to cook and serve amazing quality authentic chinese food.";
    div.appendChild(p);



    document.querySelector("#content").appendChild(div);
}