function redirectLogin() {
    location.href = "index.php";
}
function redirectDashboard() {
    location.href = "dashboard.php";
}
function redirectInfor() {
    location.href = "#";
}
function redirectCart() {
    location.href = "cart.html";
}
function redirectHome() {
    location.href = "index.html";
}
function redirectNam() {
    location.href = "male.html";
}
function redirectNu() {
    location.href = "female.html";
}
function redirectDetails(){
    location.href="details-product.html";
}
function redirectList(){
    location.href="yourlikes.html";
}
function  redirectPayment(){
    location.href = "payment.html";
}
function displayInfo() {
    let display = document.getElementById("content-user").style.display;
    if (display == "none") {
        $("#content-user").css({
            "display": "flex",
            "z-index": "1100", "width": "250px",
            // "transform": "translateX(0px)",
            // "transition": "all ease 0.2s"
        });
    }
    else {
        $("#content-user").css({ "display": "none", "z-index": "0", "width": "0px" });
    }
}
var scroll = 0;
window.onscroll = () => {
    var current = document.documentElement.scrollTop;
    if (current < scroll) {
        scroll = current;
        $("#nav").css({
            "top": "0",
            "transition": ".3s ease-in-out",
        });

    } else if (current > scroll) {
        $("#nav").css({
            "top": "-90px"
        });
        $("#content-user").css({ "display": "none", "z-index": "0", "width": "0px" });
        scroll = current;
    }
}