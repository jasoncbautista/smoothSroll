console.log('hello');


var generateDiv = function(text, index){

    var div = document.createElement("div");
    div.className = "item"
    div.innerText = text

    return div;
};

var magicFinder = function(targetObject, substringOriginal, soFar){
    var substring = substringOriginal.toLowerCase();
    for  (prop in targetObject) {
        if(Object.prototype.hasOwnProperty.call(targetObject, prop)){

            var propLil = prop.toLowerCase();

            if(propLil.indexOf(substring) >= 0) {
                console.log("PROP:", prop);
                console.log("STR:", soFar);
            }

            // TODO: Need to fix Stack size
            //magicFinder(targetObject[prop], substringOriginal, soFar);

        }

    }
};

var load = function(){

    var div = generateDiv("yo", 0);
    document.body.appendChild(div);

    var realHeight = div.offsetHeight
    magicFinder(div, "Height", "");
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


