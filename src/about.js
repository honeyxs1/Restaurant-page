function aboutPage(){

    const content=document.getElementById("content");

    // Heading- About page 
    const heading=document.createElement("h1");
    heading.textContent="About Us";

    //Adding the content
    const paraAbout=document.createElement("p");
    paraAbout.textContent=`
    Location: 1520 Ember Avenue, Manhattan,NY
    Reservations: (212)555-8234
    Email: reservations@velvetember.com
    `
    const heading2=document.createElement("h2");
    heading2.textContent=`Hours of Operations`;

    const para2=document.createElement("p");
    para2.textContent=`
    Monday - Thursday: 5 Pm to 11 Pm
    Friday - Saturday: 5 Pm to 12.30 Pm
    Sunday: 5 Pm to 10 Pm`;

    content.appendChild(heading);
    content.appendChild(paraAbout);
    content.appendChild(heading2);
    content.appendChild(para2);
}

export default aboutPage;