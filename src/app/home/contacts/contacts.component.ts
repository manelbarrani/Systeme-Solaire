import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import axios from 'axios';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatButtonModule, MatFormFieldModule],
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit() {
    const WEB3FORMS_URL = 'https://api.web3forms.com/submit';
    const ACCESS_KEY = '08796025-a0eb-4f44-a612-0b7347288eb9'; // Replace with your Web3Forms access key.

    const payload = {
      access_key: ACCESS_KEY,
      ...this.formData
    };

    axios
      .post(WEB3FORMS_URL, payload)
      .then((response) => {
        alert('Your message has been sent!');
        this.formData = { name: '', email: '', subject: '', message: '' }; // Reset form
      })
      .catch((error) => {
        alert('Failed to send message. Please try again.');
        console.error(error);
      });
  }
}

