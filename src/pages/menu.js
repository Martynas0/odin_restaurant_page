import "../styles/menu.css";

const menuItems = ["Chicken fried rice", "Beef in satay sauce", "Salt and pepper chicken", "Red Thai curry", "Green Thai curry", "Sesame prawn toast"];


function renderPage() {
    
    const div = document.createElement("div");
    div.classList.add("menu");
    
    const h2 = document.createElement("h2");
    h2.textContent = "Oriental Flavors menu: "
    div.appendChild(h2);

    // Menu
    const innerDiv = document.createElement("div");
    innerDiv.classList.add("inner-div");
       
    menuItems.forEach((item, index) => {
        const div = document.createElement("div");
        div.classList.add("menu-item");
        div.dataset.index = index;

        const p = document.createElement("p");
        p.textContent = item;
        const btn = document.createElement("button");
        btn.textContent = "+";
        div.appendChild(p);
        div.appendChild(btn);
        innerDiv.appendChild(div);
    })
    div.appendChild(innerDiv);
    
    document.querySelector("#content").appendChild(div);
}

export default renderPage;