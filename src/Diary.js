export default class Diary {
  #isLocked;
  #pin;
  entries;

  constructor(pin) {
    this.#isLocked = true;
    this.#pin = pin;
    this.entries = [];
  }

  isLocked = () => this.#isLocked;
  lock = () => (this.#isLocked = true);
  unlock(pin) {
    if (pin === this.#pin) {
      this.#isLocked = false;
    }
  }

  addEntry = (entry) => {
    if (this.#isLocked) return;

    this.entries.push(entry);
  };

  getEntries = () => this.entries;
}
