function formValidation() {
    var eid = document.registration.empid;
    var fname = document.registration.firstname;
    var lname = document.registration.lastname;
    var empemail = document.registration.email;
    var erole = document.registration.role;
    var mstatus = document.registration.status;   
    var msex = document.registration.male;
    var fsex = document.registration.female;
    var empsubmit = document.registration.submit;
    if (empid(eid)) {
        if (alphabet(fname)) {
            if (alphabet(lname)) {
                if (ValidateEmail(empemail)) {
                    if (emprole(erole)) {
                        if (maritalstatus(mstatus)) {
                                if (validsex(msex,fsex)) {
                                    if (sub(empsubmit)){

                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

    return false;
}



function empid(eid) {
    var eid_len = eid.value.length;
    if (eid_len == 0) {
        alert("Employee ID should not be empty");
        eid.focus();
        return false;
    }
    return true;
}


function alphabet(fname) {
    var letters = /^[A-Za-z]+$/;
    if (fname.value.match(letters)) {
        return true;
    }
    else {
        alert('First name should not be empty');
        fname.focus();
        return false;
    }
}

function alphabet(lname) {
    var letters = /^[A-Za-z]+$/;
    if (lname.value.match(letters)) {
        return true;
    }
    else {
        alert('Last name should not be empty');
        lname.focus();
        return false;
    }
}

function ValidateEmail(empemail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (empemail.value.match(mailformat)) {
        return true;
    }
    else {
        alert("Invalid email address");
        empemail.focus();
        return false;
    }
}

function emprole(role) {
    var letters = /^[A-Za-z]+$/;
    if (role.value.match(letters)) {
        return true;
    }
    else {
        alert('Role should not be empty');
        role.focus();
        return false;
    }
}

function maritalstatus(mstatus) {
    if (mstatus.value == "Default") {
        alert('Select your marital status from the list');
        mstatus.focus();
        return false;
    }
    else {
        return true;
    }
}


function validsex(msex,fsex) {
    x = 0;

    if (msex.checked) {
        x++;
    } if(fsex.checked) {
        x++;
    }
    
    if (x == 0) {
        alert('Select Male/Female');
        msex.focus();
        return false;
    }
    else {
        console.log(eid);
        window.location.reload()
        return true;
}
}


