import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-material-form',
  templateUrl: './material-form.component.html',
  styleUrls: ['./material-form.component.scss']
})
export class MaterialFormComponent implements OnInit {

  nameField = new FormControl('Hola', [Validators.required, Validators.minLength(10)]);
  emailField = new FormControl('', [Validators.required, Validators.email]);
  colorField = new FormControl('#000000', Validators.required);
  dateField = new FormControl(new Date(), Validators.required);
  ageField = new FormControl(12, Validators.required);
  phoneField = new FormControl(3112177342, Validators.required);
  stockField = new FormControl(10, Validators.required);
  textField = new FormControl(10, Validators.required);
  categoryField = new FormControl('1', Validators.required);
  tagsField = new FormControl('1', Validators.required);
  agreeField = new FormControl(false, Validators.required);
  genderField = new FormControl('', Validators.required);
  zoneField = new FormControl('', Validators.required);

  constructor() { }

  ngOnInit(): void {
    this.nameField.valueChanges
    .subscribe(value => {
      console.log(value);
    });
  }

  valueEmail() {
    console.log(this.nameField.value);
  }

  get isNameFieldValid() {
    return this.nameField.touched && this.nameField.valid;
  }

  get isNameFieldInvalid() {
    return this.nameField.touched && this.nameField.invalid;
  }


}
