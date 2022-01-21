let main = document.getElementById("main");
let div = document.createElement("div");
let image = document.createElement("img");
image.src = "https://i1.wp.com/www.startuplanes.com/wp-content/uploads/2018/11/payment-successful.gif?fit=640%2C400&ssl=1";
let btn = document.createElement("button");
btn.textContent = "Home page";
btn.onclick = function(){
    location.href = "home.html";
};
div.append(image,btn);
main.append(div)