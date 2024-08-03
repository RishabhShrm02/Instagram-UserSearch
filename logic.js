var username = document.getElementById("username");
var mainDiv = document.getElementById("mainDiv");

function SearchUser(){
    var url="https://instagram-scraper-api2.p.rapidapi.com/v1/search_users?search_query=" +username.value;
    var request = new XMLHttpRequest();
    request.open('GET',url,true);
    request.setRequestHeader('x-rapidapi-key', '345fecb88bmsh9fd87e59d6ec29bp11fb64jsn3db04af75f47');
    request.setRequestHeader('x-rapidapi-host', 'instagram-scraper-api2.p.rapidapi.com');

    request.onload = callBackResponse;
    request.send();
}

function callBackResponse(){
    mainDiv.innerText = this.responseText;
}