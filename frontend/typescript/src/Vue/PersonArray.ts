import { current } from "../script.js";

export function showAll() {
    let content: HTMLElement | null = document.getElementById("content")
    if (content) {
        content.innerHTML="";
        let table:HTMLElement = document.createElement("table");
        let thead:HTMLElement = document.createElement("thead");
        let tbody:HTMLElement = document.createElement("tbody");
        let tr:HTMLElement = document.createElement("tr");
        //Table Head
        content.appendChild(table);
        if(current.getCurrent().length){
            Object.keys(current.getCurrent()[0]).forEach(key => {
                let th:HTMLElement = document.createElement("th");
                th.innerText = key;
                tr.appendChild(th);
            })
        }
        table.appendChild(thead);
        thead.appendChild(tr);

        //Table Body
        Object.values(current.getCurrent()).forEach(person => {
            let tr:HTMLElement = document.createElement("tr");
            Object.values(person).forEach(value => {
                let td:HTMLElement = document.createElement("td");
                td.innerText = value;
                tr.appendChild(td);
            })
            tbody.appendChild(tr);
        })
        table.appendChild(tbody);
    }
}