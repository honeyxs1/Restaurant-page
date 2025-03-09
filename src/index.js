
import "./styles.css";
import homePage from "./home";
import Menu from "./menu";
import aboutPage from "./about";

document.addEventListener("DOMContentLoaded",()=>{
    const content=document.getElementById("content");
    const buttons=document.querySelectorAll(".nav-button");

    function initialPage(tab){
        content.innerHTML='';
        buttons.forEach((btn)=> btn.classList.remove("active"));

        switch(tab){
            case "Home":
                homePage();
                document.getElementById("Home").classList.add("active");
                break;
            case "Menu":
                Menu();
                document.getElementById("Menu").classList.add("active");
                break;
            case "About":
                aboutPage();
                document.getElementById("About").classList.add("active");
                break;
                
        }
    }

    buttons.forEach((button)=> {
        button.addEventListener("click", (e)=>{
            initialPage(e.target.innerText);
        });
    });

    initialPage("Home");
})

