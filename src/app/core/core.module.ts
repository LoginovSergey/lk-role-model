import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IConfig, NgxMaskModule } from 'ngx-mask';

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxMaskModule.forRoot(maskConfigFunction),
  ],
})

export class CoreModule { }
