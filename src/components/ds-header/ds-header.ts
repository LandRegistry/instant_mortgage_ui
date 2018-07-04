import { Component } from '@angular/core';

/**
 * Generated class for the DsHeaderComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'ds-header',
  templateUrl: 'ds-header.html'
})
export class DsHeaderComponent {

  text: string;

  constructor() {
    console.log('Hello DsHeaderComponent Component');
    this.text = 'Hello World';
  }

}
