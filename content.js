console.log('console script loaded');

var greeting = "Hello, ";
var button = document.getElementById("login-button");
button.person_name = "Roberto";
button.addEventListener(
    "click", () => alert(greeting + button.person_name + "."), false);


$("#login-button").click(() => {
    // delete the cookies
    chrome.cookies.getAll({domain: "https://www.reddit.com"}, (cookies) => {
        console.log("deleting " + cookies.length + " cookies")
        for(var i = 0; i < cookies.length; i++){
        console.log(i + " deleted")
        chrome.cookies.remove({
            url: "https://www.youtube.com" + cookies[i].path,
            name: cookies[i].name
        })
        }
    }
}