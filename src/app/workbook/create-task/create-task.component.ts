import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

  }

  onSubmit(){
    alert("submmited");
  }

}
