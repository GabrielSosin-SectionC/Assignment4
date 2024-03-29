document.getElementById("submit").addEventListener("click", function() {
    // console.log("1") //Used to check if function is working on click
    const emailInput = document.getElementById("email").value.trim();
    const toastLiveExample = document.getElementById('liveToast');
    
    //If the email is not empty, show the toast making it seem the user registered
    if (emailInput !== "") {
        const toastBootstrap = new bootstrap.Toast(toastLiveExample);
        toastBootstrap.show();
    } 
    
    document.getElementById("email").value=""; //This is just a facade to make it seem like user is sending something to me. REUSED it from MY past lab 
});

