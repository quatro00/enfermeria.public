import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms.component';

const routes: Routes = [{ path: '', component: FormsComponent,
children : [
  {
    path: 'form-basic-inputs',
    loadChildren: () =>
      import('./form-basic-inputs/form-basic-inputs.module').then(
        (m) => m.FormBasicInputsModule
      ),
  },
  {
    path: 'form-horizontal',
    loadChildren: () =>
      import('./form-horizontal/form-horizontal.module').then(
        (m) => m.FormHorizontalModule
      ),
  },
  {
    path: 'form-input-groups',
    loadChildren: () =>
      import('./form-input-groups/form-input-groups.module').then(
        (m) => m.FormInputGroupsModule
      ),
  },
  {
    path: 'form-mask',
    loadChildren: () =>
      import('./form-mask/form-mask.module').then((m) => m.FormMaskModule),
  },
  {
    path: 'form-validation',
    loadChildren: () =>
      import('./form-validation/form-validation.module').then(
        (m) => m.FormValidationModule
      ),
  },
  {
    path: 'form-vertical',
    loadChildren: () =>
      import('./form-vertical/form-vertical.module').then(
        (m) => m.FormVerticalModule
      ),
  },
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
