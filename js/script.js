let mobileNumber = document.getElementById("mobileNumber");
let pin = document.getElementById("pin");
let loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener('click', function(){
    if(mobileNumber.value === "01880102830" && pin.value === "2000"){
        alert("Enter the next page");
    }
    else if(mobileNumber.value === "" && pin.value === ""){
        alert("please Fillup input");
    }
    else{
       alert("try again");
    }
})
