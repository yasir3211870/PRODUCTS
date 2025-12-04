function submitData(event){
    event.preventDefault();

    let FirstName = document.getElementById("FirstName").value;
    let LastName = document.getElementById("LastName").value;
    let Email = document.getElementById("Email").value;
    let Mobile = document.getElementById("Mobile").value;
    let message = document.getElementById("message").value;

    if(FirstName === "" || LastName === "" || Email === "" || Mobile === "" || message === ""){
        alert("All fields are required");
        return;
    }

    let userData = {
        FirstName,
        LastName,
        Email,
        Mobile,
        message
    };

    console.log(userData);

    alert("Your Feedback Submitted Successfully");

    document.getElementById("FirstName").value = "";
    document.getElementById("LastName").value = "";
    document.getElementById("Email").value = "";
    document.getElementById("Mobile").value = "";
    document.getElementById("message").value = "";
}
