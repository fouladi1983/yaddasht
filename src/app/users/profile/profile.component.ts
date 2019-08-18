import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/interaction.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  selectedFile: File = null;

  constructor(private interactionService: InteractionService, private http: HttpClient) { }

  ngOnInit() {
    this.interactionService.sendHomeMessage('profileComponent');
  }

  onSelectedFile(event) {
    this.selectedFile = event.target.files[0] as File;
  }

  onUpload() {
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this.http.post("https://www.dropbox.com/request/5LMBgfzqIpdbIP5ijRG6", fd).subscribe(res => {
      console.log(res);
    });
  }

}
