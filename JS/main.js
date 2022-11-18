(function(){ // IIFE
    console.info("No this is not a console");
    console.dir(document);
    document.getElementById("myHeading").innerHTML="Your name";
    let fistListItem = document.querySelector('nav ul li')
    fistListItem.setAttribute("class", "currentPage");
    console.info(fistListItem)
    document.getElementById("myTestEvent").addEventListener("click", myfunction)
    function myfunction(ev)
    {
        console.info("Hello");
        console.dir(ev);
    }
    let colourBtn = document.querySelectorAll(".colPicker");
    let bodyElement = document.body;
    for(let i=0; i<colourBtn.length; i++)
    {
        colourBtn[i].addEventListener("click", chgColour)
        console.info(colourBtn[i])
    }
    function chgColour(ev)
    {     
        for(let i=0; i<colourBtn.length; i++)
        {
            colourBtn[i].setAttribute("class", colourBtn[i].classList[0] + " " + colourBtn[i].classList[1]) ;
        }
        console.dir(ev.target.classList)
        let newColour = ev.target.classList[0] + "Back";
        if(newColour === "resetback"){
            body.setAttribute("class");
        }
        else{
            body.setAttribute("class", newColour);
        }
        ev.target.setAttribute("class", ev.target.classList[0] + " " + ev.target.classList[1] + " " + newColour);
    }
})()