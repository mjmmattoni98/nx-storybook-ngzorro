import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { ButtonSubmitModule } from './button-submit/button-submit.module';
import { MyFormRoutingModule } from './my-form-routing.module';
import { MyFormComponent } from './my-form.component';

@NgModule({
  imports: [
    MyFormRoutingModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
    NzSelectModule,
    NzButtonModule,
    NzCheckboxModule,
    NzToolTipModule,
    NzGridModule,
    NzDatePickerModule,
    ButtonSubmitModule,
  ],
  declarations: [MyFormComponent],
  exports: [MyFormComponent],
})
export class MyFormModule {}
