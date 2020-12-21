import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  myForm:FormGroup;

  constructor(private fb:FormBuilder) { 
    this.myForm=this.fb.group({
      fistName:['',[Validators.required, Validators.minLength(2)]],
      lastName:['',[Validators.required, Validators.minLength(2)]],
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(6)]]
    })
  }
  registrar(){
    console.log(this.myForm.value)
  }

  ngOnInit(): void {
  }

}
