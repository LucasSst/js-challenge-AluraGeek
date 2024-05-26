async function fetchAPI() {
    try{
        const db = await fetch("http://localhost:3000/products");
        const dbJson = await db.json();
        return dbJson;
    } catch(e){
        alert("Erro para mostrar as informações do banco de dados");
    } 
}

async function createList(title,value, image){
    try{
        const api = await fetch("http://localhost:3000/products", {
            method:"POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                title:title,
                value:value, 
                image:image
            })
        });
        const apiJson = await api.json();
        return apiJson;
    }catch{
        alert("Erro ao criar o cartaz")
    }
}

async function deleteItem(id) {
    try{
        const api = await fetch("http://localhost:3000/products/" + id, {
        method:"DELETE",
    });
    }catch{
        alert("Erro ao deletar o cartaz")
    } 
}


export const connectApi = {
    fetchAPI,
    createList,
    deleteItem
}

