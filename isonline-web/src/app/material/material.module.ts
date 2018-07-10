import { MatCardModule, MatIconModule, MatToolbarModule, MatMenuModule, MatButtonModule, MatSlideToggleModule, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogModule, MatProgressSpinnerModule, MatListModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatRadioModule, MAT_DATE_LOCALE, MatExpansionModule, MatProgressBarModule, MatCheckboxModule, MatChipsModule, MatNativeDateModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatRadioModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatChipsModule,
    MatNativeDateModule
  ],
  declarations: [],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatRadioModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatChipsModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
  ],
})
export class MaterialModule { }


