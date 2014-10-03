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

// Render
function itemsCallback (){
    if (this.readyState == 4){
        console.log(this.responseText);
        var json = JSON.parse(this.responseText)

        for(obj in json.rows){
            var div = generateDiv(json.rows[obj].text, 0);
            document.body.appendChild(div);
        }


    }
 }


var makeRequest = function(offfset, callback) {
    var req = new XMLHttpRequest();
    req.onreadystatechange = callback;
    req.open("GET", "/rest/get_items/" + offfset, true);
    req.send(null);
}


makeRequest(0, itemsCallback);

var load = function(){

    //var div = generateDiv("yo", 0);
    //document.body.appendChild(div);

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


