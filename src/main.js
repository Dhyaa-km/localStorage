const input = document.getElementById("inputText");
const listResult = document.getElementById("uls");

function AddTasks() {
    if (input.value === '') {
        alert("You must write somthing");
    }else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listResult.appendChild(li);

        let remove = document.createElement("span");
        remove.innerHTML = "\u00d7";
        li.appendChild(remove);
    }
    input.value = '';
    saveData();
}

listResult.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
    
}, false);

let saveData = () => {
    localStorage.setItem("data", listResult.innerHTML);
}

let showTasks = () => {
    listResult.innerHTML = localStorage.getItem("data");
}
showTasks();