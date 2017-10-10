import { NgModule, ModuleWithProviders } from '@angular/core';
import { ShowMenuDirective } from './show-menu.directive';
import { AppStoreService } from './app-store.service';
import { NoDataComponent } from './no-data/no-data.component';
import { NgMaterialModule } from './ng-material.module';

@NgModule({
  declarations: [
    NoDataComponent,
    ShowMenuDirective
  ],
  imports: [
    NgMaterialModule
  ],
  exports: [
    NgMaterialModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        AppStoreService
      ]
    };
  }
}