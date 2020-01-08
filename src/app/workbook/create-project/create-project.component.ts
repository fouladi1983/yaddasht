import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {
  projectStartDate;

  constructor(private formBuilder: FormBuilder) { }

  createProjectFrom = this.formBuilder.group({
    projectName: ['', Validators.required]
  });

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.createProjectFrom.value);
  }

}
