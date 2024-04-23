export default class Diary {
    #isLocked;
    #pin;

    constructor(pin) {
        this.#isLocked = true;
        this.#pin = pin;
    }

    isLocked = () => this.#isLocked;
  
    unlock(pin) {
        if (pin === this.#pin) {
           this.#isLocked = false;
        }  
    }
}