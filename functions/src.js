function add(n1, n2){
    return n1 +n2;
 }

 
 var sub = function(n1,n2){
    return n1 - n2
  } 

  
  var cb = function(n1,n2, callback){
    return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
  };


  var cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
  ];
  

  const carsNewerThan1999 = cars.filter((fabricantYear) =>fabricantYear.year>= 1999);

  const model = cars.filter((carModel) => carModel.make ===("Volvo"));

  const modelprice = cars.filter((carprice) => carprice.price < 5000);

  console.log(carsNewerThan1999);
  console.log(model);
  console.log(modelprice);
  
