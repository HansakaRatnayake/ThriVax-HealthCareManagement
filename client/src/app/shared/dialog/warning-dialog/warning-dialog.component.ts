import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogClose} from "@angular/material/dialog";

@Component({
  selector: 'app-warning-dialog',
  standalone: true,
    imports: [
        MatDialogClose
    ],
  templateUrl: './warning-dialog.component.html',
  styleUrl: './warning-dialog.component.scss'
})
export class WarningDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) protected data: { heading:string,message:string }) {
  }
}
