import renderHome from "./pages/home";
import renderAbout from "./pages/about";
import renderMenu from "./pages/menu";
import "./styles/style.css";

(function() {
    const nav = document.querySelector("nav");
    
    renderMenu();

    nav.addEventListener("click", (e) => {
        const element = e.target.id;
        if(element === "menu") {
            console.log("Menu");
        }
        else if(element === "home") {
            clearPage();
            renderHome();
        }
        else if(element === "about") {
            clearPage();
            renderAbout();
        }

    })

    function clearPage() {
        const content = document.querySelectorAll("#content > div");
        content.forEach( item => item.remove() );    
    }
    



})()


