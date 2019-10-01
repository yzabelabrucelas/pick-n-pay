var tries = 3; 

        function validate()
        {
        var email = document.getElementById("email").value;
        var pass = document.getElementById("pass").value;
        if(email =="" && pass == "")
        {
        bootbox.alert("empty fields");
       
        }
        else if (email == "admin" && pass == "admin123")
        {
        bootbox.alert("Successfully logged in");
        window.location = "index.html";
        return false;
        }
        else
        {
        tries--;
        bootbox.alert("You have "+tries+" tries left");
        // Disabling fields after 3 attempts.
        if( tries == 0)
        {
        document.getElementById("email").disabled = true;
        document.getElementById("pass").disabled = true;
        document.getElementById("submit").disabled = true;
        return false;
        }
        }
        }


        