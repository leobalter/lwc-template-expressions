import { LightningElement } from 'lwc';

export default class extends LightningElement {
    counter = 0;

    increment() {
        if (this.counter < 5) {
            this.counter++;
        }
    }
    decrement() {
        if (this.counter > 0) {
            this.counter--;
        }
    }
}
