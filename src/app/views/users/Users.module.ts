import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { UsersComponent } from './users.component';

// Buttons Routing
import { UsersRoutingModule } from './users-routing.module';

// Angular

@NgModule({
  imports: [CommonModule, UsersRoutingModule, FormsModule],
  declarations: [UsersComponent]
})
export class UsersModule {}
