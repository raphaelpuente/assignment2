/* Description: IIFE - Immediately Invokes Function Expression
   File: Assignment2
   Name: Raphael Puente 
   Id: 301075627 */

(function(){
    
    function NavActiveLink() 
    {
        let title = document.title;
        title = title.toLowerCase();
    
        console.log(`The title of the page is ${title}`);
    
        let navAnchors = document.querySelectorAll("li a");
    
        for (const anchor of navAnchors) {
    
            let anchorString = anchor.getAttribute("href");
            anchorString = anchorString.substr(0, anchorString.length - 5);
    
            if ((title === "home") && (anchorString === "index") || (title === anchorString)) {
                anchor.className = "nav-link active";
            }
        }
    }

    function Start()
    {
        console.log('My app started...')
            

        //Applying nav-link active to all the navbar

        let title = NavActiveLink();


        // Text in my index page

        let jumbotron = document.getElementsByClassName("jumbotron")[0];
        let myGreeting = document.createElement("p");
        myGreeting.textContent = "I was born and raised in an industrial city called Monterrey, in the northern part of Mexico. I have a bachelor's degree in Marketing and Advertisement from TecMilenio University. I graduated in 2014 and I had 6 years of experience working as a buyer for FEMSA, one of the biggest companies in Mexico that owns OXXO, a chain of convenience stores with more than 18,000 locations accross Mexico, Colombia, Chile, Peru and the United States.";
        jumbotron.appendChild(myGreeting);

        let jumbotron2 = document.getElementsByClassName("jumbotron")[0];
        let whoAmI = document.createElement("p");
        whoAmI.textContent = "Then, I decided to change the course of my professional carreer and since January 2020, I arrived to Canada and now I'm sturying Software Engineering Technician at Centennial College. My goal is to work for a big company and to become a front-end developer.";
        jumbotron2.appendChild(whoAmI);


    }

    window.addEventListener("load",Start);

})();


