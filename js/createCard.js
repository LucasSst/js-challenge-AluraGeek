import { connectApi } from "./api.js";

const form = document.querySelector("[data-form]");
async function createCardForm(event){
    event.preventDefault();
    const title = document.querySelector("[data-title]").value
    const value = document.querySelector("[data-value]").value
    const image = document.querySelector("[data-image]").value
    
    try{
        console.log(title, value, image)
        await connectApi.createList(title,value,image);
       
    }catch(e){
        alert(e)
    }

}


form.addEventListener("submit", e => createCardForm(e))