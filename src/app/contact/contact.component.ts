import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  myReactiveForm: FormGroup;

  constructor() { }

  ngOnInit(){
    this.myReactiveForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'email': new FormControl('abc@gmail.com', [Validators.required, Validators.email]),
      'select': new FormControl('Angular', Validators.required),
      'password': new FormControl(null, Validators.required)
    });
  }

  onSubmit(user){
    console.log(this.myReactiveForm.value);
    
  }

}
