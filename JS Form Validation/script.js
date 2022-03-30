function validate(){

    // Personal Details
    var ApplicatioNum = document.getElementById("applicationno").value;
    if(ApplicatioNum == ""){
        let spanid = document.getElementById("spanapplicationno");
        spanid.innerHTML = "Empty Field";
        return false;
    }
    var FullName = document.getElementById("fullname").value;
    if(FullName == ""){
        let spanid = document.getElementById("spanfullname");
        spanid.innerHTML = "Empty Field";
        return false;
    }
    var Email = document.getElementById("email").value;
    var reEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(Email == ""){
        let spanid = document.getElementById("spanemail");
        spanid.innerHTML = "Empty Field";
        return false;
    }
    else if(!Email.match(reEmail)){
        let spanid = document.getElementById("spanemail");
        spanid.innerHTML = "Incorrect Email Address";
        return false;
    }
    
    var Mobile = document.getElementById("mobile").value;
    var reMobile = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(Mobile == ""){
        let spanid = document.getElementById("spanmobile");
        spanid.innerHTML = "Empty Field";
        return false;
    }
    else if(!Mobile.match(reMobile)){
        let spanid = document.getElementById("spanmobile");
        spanid.innerHTML = "Incorrect Mobile Number";
        return false;
    }
    var Dob = document.getElementById("dob").value;
    if(Dob == ""){
        let spanid = document.getElementById("spandob");
        spanid.innerHTML = "Empty Field";
        return false;
    }
    var Gender = document.getElementById("gender").value;
    if(Gender == ""){
        let spanid = document.getElementById("spangender");
        spanid.innerHTML = "Empty Field";
        return false;
    }
    
    var Aadhar = document.getElementById("aadhar").value;
    if(Aadhar == ""){
        let spanid = document.getElementById("spanaadhar");
        spanid.innerHTML = "Empty Field";
        return false;
    }
    var FatherName = document.getElementById("fathername").value;
    if(FatherName == ""){
        let spanid = document.getElementById("spanfathername");
        spanid.innerHTML = "Empty Field";
        return false;
    }
    var MotherName = document.getElementById("mothername").value;
    if(MotherName == ""){
        let spanid = document.getElementById("spanmothername");
        spanid.innerHTML = "Empty Field";
        return false;
    }
    
    var Category = document.getElementById("category").value;
    if(Category == ""){
        let spanid = document.getElementById("spancategory");
        spanid.innerHTML = "Empty Field";
        return false;
    }
    var Religion = document.getElementById("religion").value;
    if(Religion == ""){
        let spanid = document.getElementById("spanreligion");
        spanid.innerHTML = "Empty Field";
        return false;
    }
    var Nationality = document.getElementById("nationality").value;
    if(Nationality == ""){
        let spanid = document.getElementById("spannationality");
        spanid.innerHTML = "Empty Field";
        return false;
    }
    
    
    // Address Details
    var Address = document.getElementById("address").value;
    if(Address == ""){
        let spanid = document.getElementById("spanaddress");
        spanid.innerHTML = "Empty Field";
        return false;
    }
    var State = document.getElementById("state").value;
    if(State == ""){
        let spanid = document.getElementById("spanstate");
        spanid.innerHTML = "Empty Field";
        return false;
    }

    var City = document.getElementById("city").value;
    if(City == ""){
        let spanid = document.getElementById("spancity");
        spanid.innerHTML = "Empty Field";
        return false;
    }
    var Pincode = document.getElementById("pincode").value;
    if(Pincode == ""){
        let spanid = document.getElementById("spanpincode");
        spanid.innerHTML = "Empty Field";
        return false;
    }
    
    
    // Course Details
    var Discipline = document.getElementById("discipline").value;
    if(Discipline == ""){
        let spanid = document.getElementById("spandiscipline");
        spanid.innerHTML = "Empty Field";
        return false;
    }    
}