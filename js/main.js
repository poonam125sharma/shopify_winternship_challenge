//document.addEventListener('DOMContentLoaded',function(){
    //let wrapper=document.getElementById("wrapper");
    /*var emp=document.getElementById("email").value;
    var error=document.getElementById("error");*/
    

   /* function checkforempty(){
        /*if(emp === "")
            {   
               
                error.innerHTML="Please enter a valid email address";
                //alert("Please enter a valid email address");
                return false;
            }
        else
            {
                window.location.href = "https://google.com";
                return true;
            }*/
        /*if(emp!==null)
            {
                document.getElementById("btn").onclick=window.location.href="https://google.com";
            }
        else
            {
                document.getElementById("btn").onclick(function()
            {
                error.innerHTML="Please enter a valid email address";
                return false;
            });
            }
}*/
//});


document.addEventListener('DOMContentLoaded',function(){
    var email=document.getElementById("email");
    var btn=document.getElementById("btn");
    var error=document.getElementById("error");
    document.addEventListener('submit',function(){
        if(email.value==="")
            {
                error.innerHTML="Please enter a valid email address";
                return false;
            }
        else if(email.value!=="")
            {
                error.innerHTML="Thank you for providing your email address";
                error.style.color="green";
                return true;
            }
    });
});