import { AbstractControl } from '@angular/forms';

export class MyValidators {

  static isPriceValid(control: AbstractControl) {
    const value = control.value;
    console.log(value);
    if (value > 10000) {
      return {price_invalid: true};
    }
    return null;
  }

  static validPassword(control: AbstractControl) {
    const value = control.value;
    if (!containsNumber(value)) {
      return {invalidPassword: true};
    }
    return null;
  }

  static matchingPasswordValidators(control: AbstractControl) {
    if (control.get('password')?.value !== control.get('confirm')?.value) {
      return { notMatchPassword: true };
    }
    return null;
  }

}

function containsNumber(value: string){
  return value.split('').find(v => isNumber(v)) !== undefined;
}

function isNumber(value: any){
  return !isNaN(parseInt(value, 10));
}
