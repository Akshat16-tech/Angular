import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  feedbackForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.feedbackForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.feedbackForm.valid) {
      // Process the form data (e.g., send it to a server)
      console.log(this.feedbackForm.value);
      
      // Show success alert
      alert('We have received your feedback. Thank you!');
      
      // Optionally reset the form
      this.feedbackForm.reset();
    } else {
      // Show validation errors to the user
      alert('Please fill out all required fields correctly.');
    }
  }
}
