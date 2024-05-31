import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class PasswordValidator {
  static confirmPassword(controlName: string, matchingControlName: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const controlValue = control.parent?.get(controlName)?.value;
      const matchingControlValue = control.parent?.get(matchingControlName)?.value;
      if (controlValue !== matchingControlValue) {
        return { 'passwordsNotMatch': true };
      } else {
        return null;
      }
    };
  }
}