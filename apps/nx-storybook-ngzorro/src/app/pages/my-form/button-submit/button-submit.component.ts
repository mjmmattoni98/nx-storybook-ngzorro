/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, Input } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button-submit',
  templateUrl: './button-submit.component.html',
  styleUrls: ['./button-submit.component.scss']
})
export class ButtonSubmitComponent {
  @Input() text: string = 'Submit';
  @Input() type: 'primary' | 'secondary' = 'primary';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;

  public get classes(): string[] {
    return [`storybook-button--${this.size}`, `storybook-button--${this.type}`];
  }
}
