import {connectApi} from "./api.js";
 
const list = document.querySelector("[data-list]");


export default function createCardList(title, value, image, id){
    const video = document.createElement("li");
    
    video.className= "li__products";
    video.innerHTML= `
    <img class="img__products" src="${image}" alt="${title}">
        <div class="text__products" >
            <h3>${title}</h3>
            <div class="value__products">
                <p>$ ${value}</p> 
                <img id=${id} class="trash" src="img/trash.png" alt="Imagem de Lixeira">
            </div> 
        </div>
    `;
    return video;
}
async function showCard(){
    try {
        const cardApi = await connectApi.fetchAPI();
        cardApi.forEach(e => list.appendChild(createCardList(e.title, e.value, e.image, e.id)));

        const trash = document.querySelectorAll(".trash");
        trash.forEach((e) => {e.addEventListener("click", function(){
            connectApi.deleteItem(e.id);
        })})
        
    }catch{
        list.innerHTML = `<h2 class="message__title> Não foi possível carregar a lista de produtos</h2>`;

    }
    
    
}

showCard();