let list = [];
let id = 0;

let refresh = () => {
    let ul = document.getElementById("lista")
    document.getElementById("lista").innerHTML = "";

    for (let i = 0; i <= list.length; i++) {

        if (list[i].status) {
            ul.innerHTML += 
            
            `<li><input class="Input" type="checkbox" onclick="through('${list[i].idCheck}')" id="${list[i].idCheck}">
                <label id="linea" class="form-check-label" " for="defaultCheck1" id="${list[i].idLabel}">
                ${list[i].textContent}
                </label></input>
                </li> `
        }

        else {
            ul.innerHTML += 
            
            `<li><input class="Input" type="checkbox" onclick="through('${list[i].idCheck}')" id="${list[i].idCheck}">
                <label id="linea" class="form-check-label" for="defaultCheck1" id="${list[i].idLabel}">
                ${list[i].textContent}
                </label></input>
                </li>`
                
        }
    }
}


const through = (idC) => {

    list[idC].status = true;
    idC = parseInt(idC) + 1;

    document.getElementById(idC).className += "INCORRECTO";

}

const agregarL = () => {

    let label = document.createElement("label");
    label.textContent = document.getElementById("escribirAca").value;

    if (label.textContent === '') {
        alert("¡Agrega un recordatorio!");

    }

    else {

        let ok1 = {
            idCheck: id,
            idLabel: id + 1,
            textContent: label.textContent,
            status: false
        }

        list.push(ok1);

        let ok2 = document.getElementById("listok");
        ul.innerHTML += `
        <li><input class="Input" type="checkbox" onclick="through('${work.idCheck}')" id="${work.idCheck}">
        <label class="form-check-label" for="defaultCheck1" id="${work.idLabel}">
        ${label.textContent}
        </label></input>
        </li>
        `
    
        id = id + 1;
        refresh();
    }

}