const clickBlocker = document.querySelector("#clickBlocker");
const modalTitle = document.querySelector("#modalTitle");
const modalDescription = document.querySelector("#modalDescription");
const modalImage = document.querySelector("#modalImage");
const modalClose = document.querySelector("#modalClose");

const offerTables = document.querySelectorAll(".offersTable");
offerTables.forEach(offerTable =>{
    offerTable.addEventListener("click", event => {
        if (event.target.closest("li")){
            clickBlocker.style.display = "block";
            modalTitle.textContent = event.target.closest("li").querySelector("h4").textContent;
            modalDescription.textContent = event.target.closest("li").querySelector("p").textContent;
            modalImage.src = event.target.closest("li").querySelector("img").src;
        }
    });
});

modalClose.addEventListener("click", event => {
    clickBlocker.style.display = "none";
});