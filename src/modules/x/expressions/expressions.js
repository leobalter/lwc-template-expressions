import { LightningElement } from 'lwc';

export default class extends LightningElement {
  opRange = 10;

  opRangeChange({ target: { value } }) {
    this.opRange = value;
  }
}
