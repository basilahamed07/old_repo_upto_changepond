import { AbstractControl, ValidatorFn } from '@angular/forms';

export function matchPasswordsValidator(): ValidatorFn {
  return (formGroup: AbstractControl): { [key: string]: any } | null => {
    const password = formGroup.get('password');
    const confirmPassword = formGroup.get('confirm_password');
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      return { 'passwordMismatch': true };
    }
    return null;
  };
}
