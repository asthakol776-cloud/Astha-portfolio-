
// Current Year

let year = new Date().getFullYear();

document.querySelector("footer p").innerText =
    "© " + year + " Astha Kol | Portfolio";


// Navbar Active Effect

let links = document.querySelectorAll("nav ul li a");

links.forEach(function(link) {

    link.addEventListener("click", function() {

        links.forEach(function(item) {
            item.style.color = "#29213d";
        });

        this.style.color = "#925fc9";

    });

});


// Welcome Message

console.log("Welcome to Astha's Portfolio!");