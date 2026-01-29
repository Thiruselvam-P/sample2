import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  AbstractControl,
} from '@angular/forms';

declare var bootstrap: any;

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
})
export class ContactUsComponent implements OnInit {
  contactForm!: FormGroup;

  districts: string[] = [
    'Ariyalur',
    'Chengalpattu',
    'Chennai',
    'Coimbatore',
    'Cuddalore',
    'Dharmapuri',
    'Dindigul',
    'Erode',
    'Kallakurichi',
    'Kancheepuram',
    'Kanyakumari',
    'Karur',
    'Krishnagiri',
    'Madurai',
    'Mayiladuthurai',
    'Nagapattinam',
    'Namakkal',
    'Nilgiris',
    'Perambalur',
    'Pudukkottai',
    'Ramanathapuram',
    'Ranipet',
    'Salem',
    'Sivaganga',
    'Tenkasi',
    'Thanjavur',
    'Theni',
    'Thoothukudi',
    'Tiruchirappalli',
    'Tirunelveli',
    'Tirupattur',
    'Tiruppur',
    'Tiruvallur',
    'Tiruvannamalai',
    'Tiruvarur',
    'Vellore',
    'Viluppuram',
    'Virudhunagar',
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      queryType: ['', Validators.required],
      district: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  onMobileInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = input.value.replace(/[^0-9]/g, '').slice(0, 10);
    input.value = value;
    this.contactForm.get('mobile')?.setValue(value);
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const modal = new bootstrap.Modal(
        document.getElementById('successModal')
      );
      modal.show();
      this.contactForm.reset();
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.contactForm.controls;
  }
}
