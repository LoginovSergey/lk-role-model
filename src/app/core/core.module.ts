import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

import { environment } from '../../environments/environment';
import { TodoState } from '../modules/cabinet/modules/todos/state/state/todos.state';

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
    NgxsModule.forRoot([
      TodoState,
    ], {
      developmentMode: !environment.production,
    }),
    NgxsModule.forRoot([]), NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
  ],
})

export class CoreModule { }
