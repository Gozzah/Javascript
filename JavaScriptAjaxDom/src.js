var btn = document.getElementById("btn");
var quote = document.getElementById("quote");
var url = "http://uinames.com/api/?amount=2&region=denmark&gender=female";

btn.onclick = function(){
    getRandomQuote();
};

var getRandomQuote = function(){

    fetch(url, 
    {method: "get"})
    .then(function(response){
        return response.text();
    }).then(function(text){
        console.log(text);
        var quoteObject = JSON.parse(text);
        quote.innerHTML = quoteObject.value;
    });
};
