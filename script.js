function validate(callback) {
    var id = document.registration.eid;
    var fname = document.registration.fname;
    var lname = document.registration.lname;
    var email = document.registration.email;
    var role = document.registration.role;
    var gender = document.registration.gender;
    var status = document.registration.status; 
   
    if (id.value.length <= 0) {
        alert("Employee ID is required");
        id.focus();
        return false;
    }
    if (fname.value.length <= 0) {
        alert("First Name is required");
        fname.focus();
        return false;
    }
    if (lname.value.length <= 0) {
        alert("Last Name is required");
        lname.focus();
        return false;
    }
    if (email.value.length <= 0) {
        alert("Email Id is required");
        email.focus();
        return false;
    }
    if (role.value.length <= 0) {
        alert("Role is required");
        role.focus();
        return false;
    }
    if (gender.value.length <= 0) {
        alert("Gender is required");
        gender.focus();
        return false;
    }
    
    if (status.value == "Default") {
        alert("Marital status is required");
        status.focus();
        return false;
    }
    

    callback();
    return false;
}


