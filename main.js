console.log('hello');




var generateDiv = function(text, index){
    var div = document.createElement("div");
    div.className = "item"
    div.innerText = text

};


window.onscroll = function(_event){
    console.log(window.pageYOffset);
}
