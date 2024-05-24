const leftNavItems = document.querySelectorAll(".left-nav-item");
const products_img = document.querySelectorAll(".product img");
const products_title=document.querySelectorAll(".product h2");
const products_price=document.querySelectorAll(".product .price");
const products_content=document.querySelectorAll(".product .description")
const JsonFiles=['../JSON/Rings.json','../JSON/Necklace.json','../JSON/Bracelets.json','../JSON/Watchs.json','../JSON/Wedding_decorations.json','../JSON/Earrings.json'];
leftNavItems.forEach((leftNavItem, index) => {
    leftNavItem.addEventListener("click", () => {
        readJson(JsonFiles[index]);
    });
});

function readJson(jsonFile) {
    fetch(jsonFile)
        .then(response => response.json())
        .then(data => {
            products_img.forEach((img,index)=>{
                img.src=data["src"][index];
            });
            products_title.forEach((title,index)=>{
                title.textContent=data["title"][index];
            });
            products_price.forEach( (price,index)=>{
                price.textContent=data["price"][index];
            })
            products_content.forEach((content,index)=>{
                content.textContent=data["content"][index];
            })
        })
        .catch(error => {
            console.log('Произошла ошибка:', error);
        });
}

    


