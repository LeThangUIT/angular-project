import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddAssociateComponent } from '../add-associate/add-associate.component';

@Component({
  selector: 'app-associate-listing',
  templateUrl: './associate-listing.component.html',
  styleUrl: './associate-listing.component.css',
})
export class AssociateListingComponent implements OnInit {
  constructor(private dialog: MatDialog) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  FuncAdd() {this.OpenPopup(0, 'Create Associate')}
  OpenPopup(code: number, title: string) {
    this.dialog.open(AddAssociateComponent, {
      width: '50%',
      enterAnimationDuration: '1000ms',
      data: {
        code: code,
        title: title,
      },
    });
  }
}
