import { Component, OnInit } from "@angular/core";
import { InteractionService } from "@/interaction.service";
import { HttpClient } from "@angular/common/http";
import { NgxImageCompressService } from "ngx-image-compress";
import { ShareService } from "@/shared/share.service";

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
      });
  }

  onUpload() {
    this.imageCompress.uploadFile().then(({ image, orientation }) => {
      this.imageCompress
        .compressFile(image, orientation, 200, 150)
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
