const input = document.querySelectorAll("input")
const clearBtn = document.querySelector('button[type="button"]')

function clearForm(){
    input.forEach((e) => e.value = "")
}

clearBtn.addEventListener("click", clearForm)