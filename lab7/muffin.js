const muffins = document.querySelectorAll(".muffinsTable li");
let currentPage = 1;
muffins.forEach((muffin, i) =>{
    if (i >= 5){
        muffin.style.display = "none";
    }
});

const nextBtn = document.querySelector("#nextBtn");
nextBtn.addEventListener("click", event => {
   let pageNum = parseInt(document.querySelector("#pageNum").textContent);
    if (pageNum+1 <= 4){
        showMuffins(pageNum+1, muffins);
        document.querySelector("#pageNum").textContent = pageNum+1;
    }
});

const backBtn = document.querySelector("#backBtn");
backBtn.addEventListener("click", event => {
    let pageNum = parseInt(document.querySelector("#pageNum").textContent);
    if (pageNum-1 >= 1){
        showMuffins(pageNum-1, muffins);
        document.querySelector("#pageNum").textContent = pageNum-1;
    }
});

function showMuffins(page, muffins){
    let start = page * 5 - 5;
    let end = page * 5;
    muffins.forEach((muffin, i) =>{
        if (i < start){
            muffin.style.display = "none";
        }
        else if (i >= end){
            muffin.style.display = "none";
        }
        else{
            muffin.style.display = "block";
        }
    });
}

muffins.addEventListener("click", event =>{
    if (event.target.closest("button")){
        let item = event.target.closest("li");
        let itemName = item.querySelector(".muffinName").textContent;
        let price = parseInt(item.querySelector(".muffinPrice").dataset.price);
        let id = parseInt(item.querySelector(".muffinPrice").dataset.id);
    }
});