import { Component, OnInit } from "@angular/core";
import { InteractionService } from "src/app/interaction.service";
import { HttpClient } from "@angular/common/http";
import { NgxImageCompressService } from "ngx-image-compress";
import { ShareService } from "src/app/shared/share.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  uploadedImage;
  userImg;

  constructor(
    private interactionService: InteractionService,
    private http: HttpClient,
    private imageCompress: NgxImageCompressService,
    private shareService: ShareService
  ) {}

  ngOnInit() {
    this.interactionService.sendHomeMessage("profileComponent");
    this.shareService
      .getUserPhoto(localStorage.getItem("userId"))
      .subscribe(userPhoto => {
        if (userPhoto === '' || userPhoto == null) {
          this.userImg = "../../../assets/img/profileImg.jpg";
        } else {
          this.userImg = userPhoto.photo;
        }
        console.log(userPhoto);
      });
  }

  onUpload() {
    this.imageCompress.uploadFile().then(({ image, orientation }) => {
      this.imageCompress
        .compressFile(image, orientation, 300, 300)
        .then(result => {
          this.uploadedImage = result;
          const userInfo = {
            photo: result,
            userId: localStorage.getItem("userId")
          };

          this.shareService.uploadPhoto(userInfo).subscribe(
            data => {},
            error => {
              console.log(error);
            }
          );
        });
    });
  }
}
