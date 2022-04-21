function getToken(){    
    let searchURL = new URLSearchParams(window.location.search)
    let token = "";
    if(searchURL.has("access_token"))
    {
        if(searchURL.get("access_token") != "")
        {
            token = searchURL.get("access_token");
            document.getElementById("body").innerHTML = token;
        }
        else
        {
            document.getElementById("body").innerHTML = "No token found";
        }
    }
    else
    {
        document.getElementById("body").innerHTML = "No token found";
    }  
}