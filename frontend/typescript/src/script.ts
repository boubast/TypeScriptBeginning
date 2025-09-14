import { showAll } from "./Vue/PersonArray.js";
import { Person } from "./Model/Person.js"
import { persons } from "./BDD/Persons.js"
import { showFilterButtons } from "./Vue/FilterButtons.js";

export class CurrentPersons{
  public constructor(private current:Person[] = persons.slice()){}

  public getCurrent(): Person[] {
    return this.current;
  }

  public setCurrent(current: Person[]): void {
    this.current = current;
  }
}

export let current:CurrentPersons=new CurrentPersons();

document.addEventListener('DOMContentLoaded', (): void => {
  showFilterButtons();
  showAll();
});
