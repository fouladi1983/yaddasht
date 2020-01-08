import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
declare const $: any;

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  createTaskForm = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    fromDate: '',
    toDate: '',
    assign: ''
  });

  ngOnInit() {
    $(document).ready(() => {
      $('.pDatepicker').datepicker();
    })
  }

  onSubmit(fromDate,toDate){
    console.log(this.createTaskForm.get('title').value, this.createTaskForm.get('description').value,fromDate,toDate);
  }

}
