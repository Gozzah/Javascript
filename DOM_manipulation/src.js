var id1 = document.createElement("div");
var id2 = document.createElement("div");
var id3 = document.createElement("div");
var outer = document.getElementById("outer");

var names = ["Peter", "Rune", "Marco", "Lorte Dogan"];

id1.style.backgroundColor = "red";
id2.style.backgroundColor = "blue";
id3.style.backgroundColor = "green";


var text = document.createTextNode("test");
var text2 = document.createTextNode("another test");
var text3 = document.createTextNode("last test");

id1.appendChild(text);
id2.appendChild(text2);
id3.appendChild(text3)


document.body.appendChild(id1);
document.body.appendChild(id2);
document.body.appendChild(id3);

var btn = document.createElement("BUTTON");
var textnode = document.createTextNode("Click on me");

btn.onclick = function(){
    id1.style.backgroundColor ="black";
    id2.style.backgroundColor = "purple";
    id3.style.backgroundColor = "yellow";

    console.log("Hello from the console");
}

id1.onclick = function(e){

    console.log("Hello from" + e.id);
}

outer.addEventListener("click",colorChange);

function colorChange(evt){
    var div = evt.target;
    console.log(div.id);
    document.getElementById("h3").innerText = div.id;
}


function listMaker(arr) {
    var lis = arr.map(function (name) {
        return "<li>" + name + "</li>";
    });
    return "<ul>" + lis.join("") + "</ul>";
}
;

 document.getElementById("listNames").innerHTML = listMaker(names);
            document.getElementById("btnadd").addEventListener("click", function () {
                var nn = document.getElementById("addname").value;
                names.push(nn);
                document.getElementById("listNames").innerHTML = listMaker(names);

            });

            document.getElementById("btnRf").addEventListener("click", function () {
                names.shift();
                document.getElementById("listNames").innerHTML = listMaker(names);
            });
            document.getElementById("btnRl").addEventListener("click", function () {
                names.pop();
                document.getElementById("listNames").innerHTML = listMaker(names);
            });


btn.appendChild(textnode);
document.body.appendChild(btn);

