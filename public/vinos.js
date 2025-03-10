fetch('/vinos')
.then(res => res.json())
.then(data => {
    console.log(data)
    
    generarTabla(data)

})
.catch(error => console.log(error));

function generarTabla(array){
    const table = document.createElement("table")
    const thead = document.createElement("thead")
    table.appendChild(thead)
    const tr = document.createElement("tr")
    thead.appendChild(tr)

    const claves = Object.keys(array[0])

    for (let i = 0; i < claves.length; i++) {
        const td = document.createElement("td")
        td.innerText = claves[i]
        tr.appendChild(td)
    }

    const tbody = document.createElement("tbody")
    table.appendChild(tbody)

    for (let i = 0; i < array.length; i++) {
        const tr = document.createElement("tr")
        
        if (array[i].estado === "activo") {
            tr.style.backgroundColor = "green"
        } else if (array[i].estado === "inactivo") {
            tr.style.backgroundColor = "red"
        }

        for (let j = 0; j < claves.length; j++) {
            const td = document.createElement("td")
            const clave = claves[j]
            td.innerText = array[i][clave]
            tr.appendChild(td)
        }

        tbody.appendChild(tr)
    }
    
    document.body.appendChild(table)
}