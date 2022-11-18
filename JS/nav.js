(function(){
    console.dir(window.location);
    let url = window.location.href.split("/");
    console.dir(url);
    fileName = url.pop();

})()