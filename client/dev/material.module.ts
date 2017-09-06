import { NgModule } from '@angular/core';

import {
  MdButtonModule,
  MdGridListModule,
  MdSidenavModule,
  MdCardModule,
  MdTableModule,
  MdDialogModule,
  MdIconModule,
  MdInputModule,
  MdMenuModule,
  MdToolbarModule,
  MdTooltipModule
} from '@angular/material';

@NgModule({
  imports: [
    MdButtonModule,
    MdGridListModule,
    MdSidenavModule,
    MdCardModule,
    MdTableModule,
    MdDialogModule,
    MdIconModule,
    MdInputModule,
    MdMenuModule,
    MdToolbarModule,
    MdTooltipModule
  ],
  exports: [
    MdButtonModule,
    MdGridListModule,
    MdSidenavModule,
    MdCardModule,
    MdTableModule,
    MdDialogModule,
    MdIconModule,
    MdInputModule,
    MdMenuModule,
    MdToolbarModule,
    MdTooltipModule
  ]
})
export class MaterialModule {}
