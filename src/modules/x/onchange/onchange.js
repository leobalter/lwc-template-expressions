import { LightningElement } from 'lwc';

export default class extends LightningElement {
  text = 'LWC Superstar';

  textChange({target}) {
    this.text = target.value;
  }
}
