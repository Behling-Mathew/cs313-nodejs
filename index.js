const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()




express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(bodyParser.urlencoded({extended: false}))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .post('/getRate', jsonParser, function(req, res){
               const weight2 = req.body.weight
               const type = req.body.type
               const calculatedRate = calculateRate(weight2, type)
               console.log("weight is: " + weight2)
               console.log("type is: " + type)
                
               var params = {rate: calculatedRate, method: type, ounces: weight2};
               res.render('pages/postal', params)
})
  //.post('/results', jsonParser, (req, res) => res.render('pages/postal'))
.listen(PORT, () => console.log(`Listening on ${ PORT }`));


  
// Contains conditions to calculate the rate based on selected type and entered weight
function calculateRate(weight, type){
    
    let price = null;
    
    
    // Large Envelopes
    if (type == "flats" && weight > 0 && weight < 1) {price = "$1.00";}
    else if (type == "flats" && weight >= 1 && weight < 2) {price = "$1.15";}
    else if (type == "flats" && weight >= 2 && weight < 3) {price = "$1.30";}
    else if (type == "flats" && weight >= 3 && weight < 4) {price = "$1.45";}
    else if (type == "flats" && weight >= 4 && weight < 5) {price = "$1.60";}
    else if (type == "flats" && weight >= 5 && weight < 6) {price = "$1.75";}
    else if (type == "flats" && weight >= 6 && weight < 7) {price = "$1.90";}
    else if (type == "flats" && weight >= 7 && weight < 8) {price = "$2.05";}
    else if (type == "flats" && weight >= 8 && weight < 9) {price = "$2.20";}
    else if (type == "flats" && weight >= 9 && weight < 10) {price = "$2.35";}
    else if (type == "flats" && weight >= 10 && weight < 11) {price = "$2.50";}
    else if (type == "flats" && weight >= 11 && weight < 12) {price = "$2.65";}
    else if (type == "flats" && weight >= 12 && weight < 13) {price = "$2.80";}
    
    // Stamped Letters
    else if (type == "stamped" && weight > 0 && weight < 1) {price = "$0.55";}
    else if (type == "stamped" && weight >= 1 && weight < 2) {price = "$0.55";}
    else if (type == "stamped" && weight >= 2 && weight < 3) {price = "$0.55";}
    else if (type == "stamped" && weight >= 3 && weight < 3.5) {price = "$0.55";}
    
    // Metered Letters
    else if (type == "metered" && weight > 0 && weight < 1) {price = "$0.50";}
    else if (type == "metered" && weight >= 1 && weight < 2) {price = "$0.65";}
    else if (type == "metered" && weight >= 2 && weight < 3) {price = "$0.80";}
    else if (type == "metered" && weight >= 3 && weight < 3.5) {price = "$0.95";}
    
    // First-Class Package Service Zones 1 - 2
    
    else if (type == "first-class-zone1" && weight > 0 && weight < 1) {price = "$3.66";}
    else if (type == "first-class-zone1" && weight >= 1 && weight < 2) {price = "$3.66";}
    else if (type == "first-class-zone1" && weight >= 2 && weight < 3) {price = "$3.66";}
    else if (type == "first-class-zone1" && weight >= 3 && weight < 4) {price = "$3.66";}
    else if (type == "first-class-zone1" && weight >= 4 && weight < 5) {price = "$4.39";}
    else if (type == "first-class-zone1" && weight >= 5 && weight < 6) {price = "$4.39";}
    else if (type == "first-class-zone1" && weight >= 6 && weight < 7) {price = "$4.39";}
    else if (type == "first-class-zone1" && weight >= 7 && weight < 8) {price = "$4.39";}
    else if (type == "first-class-zone1" && weight >= 8 && weight < 9) {price = "$5.19";}
    else if (type == "first-class-zone1" && weight >= 9 && weight < 10) {price = "$5.19";}
    else if (type == "first-class-zone1" && weight >= 10 && weight < 11) {price = "$5.19";}
    else if (type == "first-class-zone1" && weight >= 11 && weight < 12) {price = "$5.19";}
    else if (type == "first-class-zone1" && weight >= 12 && weight < 13) {price = "$5.71";}
    
    // First-Class Package Service Zone 3
    else if (type == "first-class-zone3" && weight > 0 && weight < 1) {price = "$3.70";}
    else if (type == "first-class-zone3" && weight >= 1 && weight < 2) {price = "$3.70";}
    else if (type == "first-class-zone3" && weight >= 2 && weight < 3) {price = "$3.70";}
    else if (type == "first-class-zone3" && weight >= 3 && weight < 4) {price = "$3.70";}
    else if (type == "first-class-zone3" && weight >= 4 && weight < 5) {price = "$4.44";}
    else if (type == "first-class-zone3" && weight >= 5 && weight < 6) {price = "$4.44";}
    else if (type == "first-class-zone3" && weight >= 6 && weight < 7) {price = "$4.44";}
    else if (type == "first-class-zone3" && weight >= 7 && weight < 8) {price = "$4.44";}
    else if (type == "first-class-zone3" && weight >= 8 && weight < 9) {price = "$5.24";}
    else if (type == "first-class-zone3" && weight >= 9 && weight < 10) {price = "$5.24";}
    else if (type == "first-class-zone3" && weight >= 10 && weight < 11) {price = "$5.24";}
    else if (type == "first-class-zone3" && weight >= 11 && weight < 12) {price = "$5.24";}
    else if (type == "first-class-zone3" && weight >= 12 && weight < 13) {price = "$5.78";}
    
    // First-Class Package Service Zone 4
    else if (type == "first-class-zone4" && weight > 0 && weight < 1) {price = "$3.74";}
    else if (type == "first-class-zone4" && weight >= 1 && weight < 2) {price = "$3.74";}
    else if (type == "first-class-zone4" && weight >= 2 && weight < 3) {price = "$3.74";}
    else if (type == "first-class-zone4" && weight >= 3 && weight < 4) {price = "$3.74";}
    else if (type == "first-class-zone4" && weight >= 4 && weight < 5) {price = "$4.49";}
    else if (type == "first-class-zone4" && weight >= 5 && weight < 6) {price = "$4.49";}
    else if (type == "first-class-zone4" && weight >= 6 && weight < 7) {price = "$4.49";}
    else if (type == "first-class-zone4" && weight >= 7 && weight < 8) {price = "$4.49";}
    else if (type == "first-class-zone4" && weight >= 8 && weight < 9) {price = "$5.30";}
    else if (type == "first-class-zone4" && weight >= 9 && weight < 10) {price = "$5.30";}
    else if (type == "first-class-zone4" && weight >= 10 && weight < 11) {price = "$5.30";}
    else if (type == "first-class-zone4" && weight >= 11 && weight < 12) {price = "$5.30";}
    else if (type == "first-class-zone4" && weight >= 12 && weight < 13) {price = "$5.85";}
                                                                        
    // First-Class Package Service Zone 5
    else if (type == "first-class-zone5" && weight > 0 && weight < 1) {price = "$3.78";}
    else if (type == "first-class-zone5" && weight >= 1 && weight < 2) {price = "$3.78";}
    else if (type == "first-class-zone5" && weight >= 2 && weight < 3) {price = "$3.78";}
    else if (type == "first-class-zone5" && weight >= 3 && weight < 4) {price = "$3.78";}
    else if (type == "first-class-zone5" && weight >= 4 && weight < 5) {price = "$4.53";}
    else if (type == "first-class-zone5" && weight >= 5 && weight < 6) {price = "$4.53";}
    else if (type == "first-class-zone5" && weight >= 6 && weight < 7) {price = "$4.53";}
    else if (type == "first-class-zone5" && weight >= 7 && weight < 8) {price = "$4.53";}
    else if (type == "first-class-zone5" && weight >= 8 && weight < 9) {price = "$5.53";}
    else if (type == "first-class-zone5" && weight >= 9 && weight < 10) {price = "$5.35";}
    else if (type == "first-class-zone5" && weight >= 10 && weight < 11) {price = "$5.35";}
    else if (type == "first-class-zone5" && weight >= 11 && weight < 12) {price = "$5.35";}
    else if (type == "first-class-zone5" && weight >= 12 && weight < 13) {price = "$5.93";}
                                                                        
    // First-Class Package Service Zone 6
    else if (type == "first-class-zone6" && weight > 0 && weight < 1) {price = "$3.82";}
    else if (type == "first-class-zone6" && weight >= 1 && weight < 2) {price = "$3.82";}
    else if (type == "first-class-zone6" && weight >= 2 && weight < 3) {price = "$3.82";}
    else if (type == "first-class-zone6" && weight >= 3 && weight < 4) {price = "$3.82";}
    else if (type == "first-class-zone6" && weight >= 4 && weight < 5) {price = "$4.57";}
    else if (type == "first-class-zone6" && weight >= 5 && weight < 6) {price = "$4.57";}
    else if (type == "first-class-zone6" && weight >= 6 && weight < 7) {price = "$4.57";}
    else if (type == "first-class-zone6" && weight >= 7 && weight < 8) {price = "$4.57";}
    else if (type == "first-class-zone6" && weight >= 8 && weight < 9) {price = "$5.40";}
    else if (type == "first-class-zone6" && weight >= 9 && weight < 10) {price = "$5.40";}
    else if (type == "first-class-zone6" && weight >= 10 && weight < 11) {price = "$5.40";}
    else if (type == "first-class-zone6" && weight >= 11 && weight < 12) {price = "$5.40";}
    else if (type == "first-class-zone6" && weight >= 12 && weight < 13) {price = "$5.99";}
                                                                        
    // First-Class Package Service Zone 7
    else if (type == "first-class-zone7" && weight > 0 && weight < 1) {price = "$3.94";}
    else if (type == "first-class-zone7" && weight >= 1 && weight < 2) {price = "$3.94";}
    else if (type == "first-class-zone7" && weight >= 2 && weight < 3) {price = "$3.94";}
    else if (type == "first-class-zone7" && weight >= 3 && weight < 4) {price = "$3.94";}
    else if (type == "first-class-zone7" && weight >= 4 && weight < 5) {price = "$4.69";}
    else if (type == "first-class-zone7" && weight >= 5 && weight < 6) {price = "$4.69";}
    else if (type == "first-class-zone7" && weight >= 6 && weight < 7) {price = "$4.69";}
    else if (type == "first-class-zone7" && weight >= 7 && weight < 8) {price = "$4.69";}
    else if (type == "first-class-zone7" && weight >= 8 && weight < 9) {price = "$5.53";}
    else if (type == "first-class-zone7" && weight >= 9 && weight < 10) {price = "$5.53";}
    else if (type == "first-class-zone7" && weight >= 10 && weight < 11) {price = "$5.53";}
    else if (type == "first-class-zone7" && weight >= 11 && weight < 12) {price = "$5.53";}
    else if (type == "first-class-zone7" && weight >= 12 && weight < 13) {price = "$6.13";}
                                                                        
    // First-Class Package Service Zone 8
    else if (type == "first-class-zone8" && weight > 0 && weight < 1) {price = "$4.06";}
    else if (type == "first-class-zone8" && weight >= 1 && weight < 2) {price = "$4.06";}
    else if (type == "first-class-zone8" && weight >= 2 && weight < 3) {price = "$4.06";}
    else if (type == "first-class-zone8" && weight >= 3 && weight < 4) {price = "$4.06";}
    else if (type == "first-class-zone8" && weight >= 4 && weight < 5) {price = "$4.81";}
    else if (type == "first-class-zone8" && weight >= 5 && weight < 6) {price = "$4.81";}
    else if (type == "first-class-zone8" && weight >= 6 && weight < 7) {price = "$4.81";}
    else if (type == "first-class-zone8" && weight >= 7 && weight < 8) {price = "$4.81";}
    else if (type == "first-class-zone8" && weight >= 8 && weight < 9) {price = "$5.66";}
    else if (type == "first-class-zone8" && weight >= 9 && weight < 10) {price = "$5.66";}
    else if (type == "first-class-zone8" && weight >= 10 && weight < 11) {price = "$5.66";}
    else if (type == "first-class-zone8" && weight >= 11 && weight < 12) {price = "$5.66";}
    else if (type == "first-class-zone8" && weight >= 12 && weight < 13) {price = "$6.27";}
    
    // First-Class Package Service Zone 9
    else if (type == "first-class-zone9" && weight > 0 && weight < 1) {price = "$4.06";}
    else if (type == "first-class-zone9" && weight >= 1 && weight < 2) {price = "$4.06";}
    else if (type == "first-class-zone9" && weight >= 2 && weight < 3) {price = "$4.06";}
    else if (type == "first-class-zone9" && weight >= 3 && weight < 4) {price = "$4.06";}
    else if (type == "first-class-zone9" && weight >= 4 && weight < 5) {price = "$4.81";}
    else if (type == "first-class-zone9" && weight >= 5 && weight < 6) {price = "$4.81";}
    else if (type == "first-class-zone9" && weight >= 6 && weight < 7) {price = "$4.81";}
    else if (type == "first-class-zone9" && weight >= 7 && weight < 8) {price = "$4.81";}
    else if (type == "first-class-zone9" && weight >= 8 && weight < 9) {price = "$5.66";}
    else if (type == "first-class-zone9" && weight >= 9 && weight < 10) {price = "$5.66";}
    else if (type == "first-class-zone9" && weight >= 10 && weight < 11) {price = "$5.66";}
    else if (type == "first-class-zone9" && weight >= 11 && weight < 12) {price = "$5.66";}
    else if (type == "first-class-zone9" && weight >= 12 && weight < 13) {price = "$6.27";}
                                                                        
    
    return price;   
}

  


               

