function checkvalid(){

    let firstname = document.myform.firstname.value;
    let secondname = document.myform.secondname.value;  
    let password = document.myform.password.value;
    let expression = "^[a-zA-Z]{3,15}$";
    let passwoedexpression = "^[a-zA-Z@!@#$%^&*()0-9]{8,20}$";
    let gender_check = document.myform.gender;
  
    let checking = document.myform.subject;
    if(firstname.trim()===""){
     window.alert("This the first name");
     return false;
    }
    if(!firstname.trim().match(expression)){
     window.alert("user name must contain only character min-3 and max-15");
     return false;
    }
    if(secondname.trim()===""){
     window.alert("This second name");
     return false;
    }
    if(!secondname.trim().match(expression)){
     window.alert("user name must contain only character min-3 and max-15");
     return false;
    }
    if(!password.trim().match(passwoedexpression)){
        window.alert("password must contain only character min-3 and max-15");
        return false;
    }
    
    if(gender_check[0].checked == false && gender_check[1].checked == false){
        window.alert("please select your gender");
        return false;
    }

    if(checking[0].checked==false && checking[1].checked==false && checking[2].checked==false && checking[3].checked==false&& checking[4].checked==false){
        window.alert("please select your qualification");
        return false;
    }
}