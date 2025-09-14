import { filterHair } from "../Logic/Filters.js"
import { showAll } from "./PersonArray.js";

export function showFilterButtons(){
    let divButtons:HTMLElement | null =  document.getElementById("buttons");
    let hasHairButton:HTMLElement = document.createElement("button");
    let hasNotHairButton:HTMLElement = document.createElement("button");

    hasHairButton.innerText = "A des cheveux";
    hasHairButton.onclick = () => {
        filterHair(true);
        showAll();
    };
    hasNotHairButton.innerText = "N'a pas de cheveux";
    hasNotHairButton.onclick = () => {
        filterHair(false);
        showAll();
    };


    divButtons?.appendChild(hasHairButton);
    divButtons?.appendChild(hasNotHairButton);
}