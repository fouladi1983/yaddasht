import { Component, OnInit } from "@angular/core";
import { InteractionService } from "@/interaction.service";
import { AuthServiceService } from "@/auth-service.service";
import { ShareService } from "./shared/share.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "yaddasht";
  displaySidebar = true;
  userEmail = "";

  userPhoto;

  constructor(
    private interactionService: InteractionService,
    public authService: AuthServiceService,
    private shareService: ShareService
  ) {}

  ngOnInit() {
    this.interactionService.homeMessage$.subscribe(message => {
      if (
        message === "homeComponent" ||
        message === "loginComponent" ||
        message === "registrationComponent" ||
        message === "userActivation"
      ) {
        this.displaySidebar = false;
      } else {
        this.displaySidebar = true;
      }
    });

    this.shareService
      .getUserPhoto(localStorage.getItem("userId"))
      .subscribe(data => {
        console.log(data);
        if (data !== null || data == "") {
          this.userPhoto = data.photo;
        } else {
          this.userPhoto = "../assets/img/avatar.png";
        }
      });
  }

  showSidebar() {
    this.displaySidebar = true;
  }
}
