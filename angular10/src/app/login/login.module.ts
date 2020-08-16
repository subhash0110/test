import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [AuthComponent],
  providers: [
  ],
  imports: [CommonModule, LoginRoutingModule],
})
export class LoginModule {}
