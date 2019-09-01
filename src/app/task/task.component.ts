import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.scss"]
})
export class TaskComponent implements OnInit {
  edit = false;
  chatStyleNumber = [
    "card-body",
    "card bg-primary text-white",
    "card bg-success text-white",
    "card bg-info text-white",
    "card bg-warning text-white",
    "card bg-danger text-white",
    "card bg-secondary text-white",
    "card bg-dark text-white",
    "card bg-light text-dark"
  ];

  constructor() {}

  ngOnInit() {}

  editTask() {
    if (this.edit === false) {
      this.edit = true;
    } else {
      this.edit = false;
    }
  }
}
