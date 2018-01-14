var cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
  ];
  


function listMaker(arr) {
    var list = arr.map(function (car) {
        return  "<tr>" +
                "<td>" + car.id + "</td>" +
                "<td>" + car.year + "</td>" +
                "<td>" + car.make + "</td>" +
                "<td>" + car.model + "</td>" +
                "<td>" + car.price + "</td>" +
                "</tr>";
    });
    return list.join("");
}
;
document.getElementById("carlist").innerHTML = listMaker(cars);



function filterPrice (cars, price){

    var price = document.getElementById("price").value;

    if(cars.price < price){

        console.log(cars.price);
        return cars;
    }

}

document.getElementById("btn").addEventListener("click",function(){
var price = document.getElementById("price").value;
var temp = cars.filter(filterPrice);
console.log(temp.length);
    
})


