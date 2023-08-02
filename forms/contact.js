var form=document.getElementById("FormSubmit");

function SubmitForm(event){
    var formDetails = document.getElementById("FormSubmit");
    var name = formDetails.elements["name"].value
    var email = formDetails.elements["email"].value
    var subject = formDetails.elements["subject"].value
    var message = formDetails.elements["message"].value
    
    event.preventDefault();

    if (name === "" || name==null || email === "" || email == null || subject === "" || subject == null || message === "" || message == null){
        console.log("name");
        
    }
    else isvalid();
    

    function isvalid(){
        console.log("sending");

        fetch("https://formsubmit.co/ajax/896d8cb407577bd18d8a846712e6bd5c", {
            method: "POST",headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        body: JSON.stringify({
            name: name,
            email: email,
            subject: subject,
            message: message  
        })
})
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
        document.getElementById("message_sent").innerHTML= "Message Sent!";
        form.reset();
         console.log("valid");
    }
    
}

form.addEventListener('submit', SubmitForm);
