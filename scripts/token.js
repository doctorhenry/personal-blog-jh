var myUrl = new URL(window.location.href.replace(/#/g,"?"));
var token = myUrl.searchParams.get("access_token")
if(token)
{    
    console.log(token);
    document.getElementById("body").innerHTML = token;
}
else
{
    document.getElementById("body").innerHTML = "No token found";
}  