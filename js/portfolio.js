
/*Validate form*/

function validateForm() {
    let x = document.forms["myForm"]["phone"].value;
    if ( x=="") {
        alert ("Phone number must be filled out");
        return false;
    }
}

/*Pop-up box open and close*/

function openForm() {
    document.getElementById("myForm").style.display="block";
}

function closeForm() {
    document.getElementById("myForm").style.display="none";
}