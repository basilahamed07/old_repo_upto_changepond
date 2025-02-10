// this was fyll of calculator 

function arithmatic(){
    document.getElementById("tempractureee").style.display = "none";
    document.getElementById("calculator").style.display = "block";
    document.getElementById("currency").style.display = "none";
    document.getElementById("weight").style.display = "none"
    document.getElementById("percentage").style.display = "none"
    document.getElementById("age").style.display = "none"
    
}

function add(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var result = parseInt(num1) + parseInt(num2);
    document.getElementById("resultcalculator").innerHTML = result;
}
function sub(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var result = parseInt(num1) - parseInt(num2);
    document.getElementById("resultcalculator").innerHTML = result;
}
function mul(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var result = parseInt(num1) * parseInt(num2);
    document.getElementById("resultcalculator").innerHTML = result;
}
function div(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var result = parseInt(num1) / parseInt(num2);
    document.getElementById("resultcalculator").innerHTML = result;
}


// end of arithmatic operaction


// this is full of currency implementaction

function visiblecurr(){
    document.getElementById("tempractureee").style.display = "none";
    document.getElementById("currency").style.display = "block";
    document.getElementById("calculator").style.display = "none";
    document.getElementById("weight").style.display = "none"
    document.getElementById("percentage").style.display = "none"
    document.getElementById("age").style.display = "none"
}

function convert(){
    var inr = document.getElementById("curr").value;
    var result1 = inr * 0.012;
    var result2 = inr * 0.011
    var result3 = inr * 1.88;
    document.getElementById("result1").innerHTML =  "$" + result1 ;
    document.getElementById("result2").innerHTML = "£" + result2;
    document.getElementById("result3").innerHTML = "¥" + result3;
}


// this full of tempracture calculator

function tempconvector(){
document.getElementById("tempractureee").style.display = "block";
document.getElementById("currency").style.display = "none";
document.getElementById("calculator").style.display = "none";
document.getElementById("weight").style.display = "none"
document.getElementById("percentage").style.display = "none"
document.getElementById("age").style.display = "none"

}

function temprature(){
   

    let faranheat = document.getElementById("celcious").value
    let result = (parseInt(faranheat) * 9/5) + 32
    console.log();
    document.getElementById("resulttemp").innerHTML =  result + "°F";
    // (0°C × 9/5) + 32 = 32°F
}


// this full of weight calculator

function weightbuttion(){
    document.getElementById("tempractureee").style.display = "none";
document.getElementById("currency").style.display = "none";
document.getElementById("calculator").style.display = "none";
document.getElementById("weight").style.display = "block"
document.getElementById("percentage").style.display = "none"
document.getElementById("age").style.display = "none"
}

function weightconvert(){
    // bmi calculator
    let height = document.getElementById("height").value
    let weight = document.getElementById("weightss").value
    parseFloat(height, weight)
    let cm_m = height/100

    bmi_final = weight/cm_m**2
    document.getElementById("bmi").innerHTML = bmi_final

    // end bmi calculator

    // kg to pounds
    let pound = weight * 2.20462262185
    document.getElementById("pound").innerHTML = pound


    // kg to grams
    let grams = weight * 1000
    document.getElementById("grams").innerHTML = grams

    // kg  to LBS
    let Ton = weight / 907.185
    document.getElementById("ton").innerHTML = Ton


}

// end of weight calculator


// percentage calculator

function percentage(){
    document.getElementById("tempractureee").style.display = "none";
document.getElementById("currency").style.display = "none";
document.getElementById("calculator").style.display = "none";
document.getElementById("weight").style.display = "none"
document.getElementById("percentage").style.display = "block"
document.getElementById("age").style.display = "none"
}

function percenatge(){
    let num1 = document.getElementById("obtain").value
    let num2 = document.getElementById("total").value
    let fianl = num1 / num2 * 100
    document.getElementById("finalresult").innerHTML = (fianl + "%")
}




// age calculation

function agebutton(){
    document.getElementById("tempractureee").style.display = "none";
document.getElementById("currency").style.display = "none";
document.getElementById("calculator").style.display = "none";
document.getElementById("weight").style.display = "none"
document.getElementById("percentage").style.display = "none"
document.getElementById("age").style.display = "block"
}



function agecalculator(){



    let  test = document.getElementById("obtain").value
    let dateofbirth = new Date(test)
    let today = new Date()
    console.log(dateofbirth, today)
    
    // let year = document.getElementById("year").value
    // let month = document.getElementById("month").value
    // let day = document.getElementById("day").value
    // let result = (year * 365) + (month * 30) + (day)
    // document.getElementById("resultage").innerHTML = result
}

// tsting 


function calculateAge() {
    // Get the date of birth input value
    let dobInput = document.getElementById('dobInput').value;
    
    // Parse the date input to a Date object
    let dob = new Date(dobInput);
    
    // Get the current date
    let currentDate = new Date();
    
    // Calculate the difference in milliseconds between the current date and DOB
    let timeDiff = currentDate.getTime() - dob.getTime();
    
    // Calculate age in years
    let age = Math.floor(timeDiff / (1000 * 3600 * 24 * 365.25)); // Approximate year length in days
    
    // Display the age
    document.getElementById('ageResult').innerHTML = `Age: ${age}`;

    console.log(dobInput,dob,currentDate,timeDiff,age)
}