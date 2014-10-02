console.log('hello');


var generateDiv = function(text, index){

    var div = document.createElement("div");
    div.className = "item"
    div.innerText = text

    return div;
};

var load = function(){

    var div = generateDiv("yo", 0);
    document.body.appendChild(div);
};

document.onreadystatechange = function(){
    var state = document.readyState;
    console.log('state', state);

    if(state === 'interactive'){
        /// WTF?
        console.log('interactive');
    } else if ( state === 'complete') {
        console.log('complete');
        load(); // TODO: make a comprise
    }

}


window.onscroll = function(_event){
    console.log(window.pageYOffset);
}
