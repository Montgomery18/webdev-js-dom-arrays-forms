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
            bodyElement.setAttribute("class");
        }
        else{
            bodyElement.setAttribute("class", newColour);
        }
        ev.target.setAttribute("class", ev.target.classList[0] + " " + ev.target.classList[1] + " " + newColour);
    }
    // Image rotation
    let myImageArray = ["test1", 123, true, "test2"];
    console.dir(myImageArray);
    let imageAr = ["images/view1.jpg","images/view2.jpg","images/view3.jpg","images/view4.jpg","images/view5.jpg","images/view6.jpg"]
    let myImages = document.getElementById("myImages");
    console.dir(imageAr);
    let count = 0;
    myImages.setAttribute("src", imageAr[count]);;

    function chgImage(){
        count++;
        console.info(count);
        if (count === imageAr.length)
        {
            count = 0;
        }
        else
        {
            myImages.setAttribute("src", imageAr[count]);
        }
    }
    setInterval(chgImage, 4000);
    //
})()