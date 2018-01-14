var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];

var all = boys.concat(girls);
var all2 = boys.concat(girls);

document.write(all.join(","));

document.write(all2.join("-"));

all2.unshift("Nyt navn");
all2.push("sidste navn");



all2.shift();
all2.pop();

all2.splice(2,2);

all2.reverse();

all2.sort();

var arrayUppercase = all.map (function(e){
    return e.toUpperCase()

});

const filtered = all2.filter((names) => names.startsWith("l", "d"));

var filteredNames = [filtered];



console.log(all);
console.log(all2);
console.log(arrayUppercase);
console.log(filtered);
console.log(filteredNames);