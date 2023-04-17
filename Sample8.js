var request = new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all', true)
request.send();
request.onload = function(){
    if(request.status == 200){
        var data = JSON.parse(request.responseText) 

// Get all the countries from the Asia continent /region using the Filter function
        let Data1 = data.filter((val)=>{
           return val.continents = "Asia";
        })
       console.log(Data1);

       
// Get all the countries with a population of less than 2 lakhs using Filter function
        let Data2 = data.filter((val)=>{
            return val.population < 200000;
         })
        console.log(Data2);

// Print the following details name, capital, flag using forEach function
         data.forEach(data3 => {
          console.log(data3.name, data3.capital, data3.flag);
         });

// Print the total population of countries using reduce function
         let Data21 = data.filter((val)=>{
            let val1 = val.population;
            return val1
         })

         let reduceR1 = Data21.reduce((accumulatorValue, currentValue)=>{
            accumulatorValue.population =  accumulatorValue.population+currentValue.population;
         return accumulatorValue;
            })
            console.log(reduceR1.population);
            // Print the country which uses US Dollars as currency.
            let currency = data.filter((data)=>{
              return  data.currencies = "$";
            })
            console.log(currency);      
    }
}


