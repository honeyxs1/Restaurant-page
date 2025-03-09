function Menu(){
    const content= document.getElementById("content");

    const heading=document.createElement("h1");
    heading.textContent="OUR MENU";

    const menuList =document.createElement("div");
    menuList.classList.add("menu-list");

    const menuItems=[
        {name:"Velvet Truffle Bisque", Description:"Creamy black truffle and wild mushroom soup, finished with white truffle oil", Price:"$16" },
        {name:"Ember-Seared Scallops", Description:" Butter-seared scallops with citrus beurre blanc and caviar", Price:"$22"},
        {name:"Charred Wagyu Tartare", Description:"Hand-chopped A5 Wagyu with quail egg, capers, and black garlic aioli.",Price:"$24"},
        {name:" Crispy Burrata & Fig", Description:"Panko-crusted burrata, roasted figs, and aged balsamic drizzle", Price:"$18"}
    ];

    menuItems.forEach((item)=>{
        const menuItem=document.createElement("div");
        menuItem.classList.add("menu-item");

        const itemName=document.createElement("h2");
        itemName.textContent=item.name;

        const itemDescription=document.createElement("p");
        itemDescription.textContent=item.Description;

        const itemPrice= document.createElement("span");
        itemPrice.textContent=item.Price;
        itemPrice.classList.add("Price");

        menuItem.appendChild(itemName);
        menuItem.appendChild(itemDescription);
        menuItem.appendChild(itemPrice);

        menuList.appendChild(menuItem);
    });
    content.appendChild(heading);
    content.appendChild(menuList);
}

export default Menu;