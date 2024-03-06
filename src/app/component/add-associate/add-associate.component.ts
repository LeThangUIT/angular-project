import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-associate',
  templateUrl: './add-associate.component.html',
  styleUrl: './add-associate.component.css',
})
export class AddAssociateComponent implements OnInit {
  title = 'Create Associate'
  isEdit = false
  dialogData: any;

  constructor(private builder: FormBuilder, private ref: MatDialogRef<AddAssociateComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}
  ngOnInit(): void {
    this.dialogData = this.data;
    this.title = this.dialogData.title;
  }
  associateForm = this.builder.group({
    id: this.builder.control(0),
    name: this.builder.control('', Validators.required),
    email: this.builder.control(
      '',
      Validators.compose([Validators.required, Validators.email])
    ),
    phone: this.builder.control(0, Validators.required),
    address: this.builder.control(0, Validators.required),
    type: this.builder.control('CUSTOMER'),
    group: this.builder.control('level1'),
    status: this.builder.control(true),
  });
  SaveAssociate() {
    if(this.associateForm.valid) {

    }
  }
  ClosePopup() {
    this.ref.close();
  }
}
