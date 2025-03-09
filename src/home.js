import homeImage from "./images/restro.png";

//making home page
function homePage(){
    const content = document.getElementById("content");

    const heading = document.createElement("h1");
    heading.textContent="Velvet Ember";

    const info=document.createElement("p");
    info.textContent=`Welcome to Velvet Ember – Where Elegance Meets Indulgence.
    Step into a world of refined luxury and warm sophistication at Velvet Ember, a dining experience where rich flavors and exquisite ambiance intertwine. 
    Inspired by the deep allure of velvet and the mesmerizing glow of embers, our restaurant offers a captivating setting perfect for intimate evenings, celebratory moments, and culinary indulgence.
    Our carefully curated menu blends timeless classics with bold, contemporary flavors, crafted from the finest ingredients to ignite your senses. 
    Whether you’re savoring a meticulously aged cut of steak, indulging in a delicate seafood creation, or sipping on a handcrafted signature cocktail, every bite and sip at Velvet Ember tells a story of passion and perfection.Join us for an unforgettable journey of taste, elegance, and warmth—where every meal is a masterpiece, and every moment lingers like a glowing ember.`

    //Adding Image
    const image=document.createElement("img");
    image.src= homeImage;
    image.alt="AI generated image of the restaurant";
    image.width=600;

    //appending to the content div
    content.appendChild(heading);
    content.appendChild(info);
    content.appendChild(image);

}

export default homePage;