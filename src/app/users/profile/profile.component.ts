import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/interaction.service';
import { HttpClient } from '@angular/common/http';
import { NgxImageCompressService } from 'ngx-image-compress';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  uploadedImage;

  constructor(
    private interactionService: InteractionService,
    private http: HttpClient,
    private imageCompress: NgxImageCompressService) { }



  ngOnInit() {
    this.interactionService.sendHomeMessage('profileComponent');
  }

  onUpload() {
    this.imageCompress.uploadFile().then(({image, orientation}) => {
      this.imageCompress.compressFile(image, orientation, 20, 20).then(
        result => {
          this.uploadedImage = result;
          console.log(result);
        }
      );
    });
  }

}
