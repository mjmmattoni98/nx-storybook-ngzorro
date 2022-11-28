import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { ButtonSubmitComponent } from './button-submit.component';

@NgModule({
  imports: [NzButtonModule],
  exports: [ButtonSubmitComponent],
  declarations: [ButtonSubmitComponent],
  providers: [],
})
export class ButtonSubmitModule { }
