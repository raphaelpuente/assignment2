/* Description: IIFE - Immediately Invokes Function Expression
   File: Assignment2
   Name: Raphael Puente 
   Id: 301075627 */

(function(){
    
    function Start()
    {
        console.log('My app started...')
            

        //Applying nav-link active to all the navbar

        let title = document.title;
        title = title.toLowerCase();

        console.log(`The title of the page is ${title}`);
        
        let navAnchors = document.querySelectorAll("li a");

        for (const anchor of navAnchors) {
            
            let anchorString = anchor.getAttribute("href");
            anchorString = anchorString.substr(0,anchorString.length-5);

            if ((title === "home") && (anchorString === "index") || (title === anchorString)) 
            {
                anchor.className = "nav-link active";   
            }
        }


        // Text in my index page

        let myGreeting = document.querySelectorAll("h1");

        if (title === "home") 
        {
            console.log("nav-link active");   
        }


    }

    window.addEventListener("load",Start);

})();