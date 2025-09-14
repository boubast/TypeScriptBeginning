import { Person } from "../Model/Person.js"
import { current } from "../script.js";

export function filterHair(has:boolean){
    console.log(current);
    current.setCurrent(current.getCurrent().filter(person => person.hair === has));
}