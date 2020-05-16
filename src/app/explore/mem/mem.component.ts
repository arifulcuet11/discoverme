import { Component, OnInit } from '@angular/core';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
@Component({
  selector: 'app-mem',
  templateUrl: './mem.component.html',
  styleUrls: ['./mem.component.scss'],
})
export class MemComponent implements OnInit {
  images: any = [1, 2, 3, , 4, 5];
  constructor(private photoViewer: PhotoViewer) { }

  ngOnInit() {}

  viewPhoto(img: any){
    this.photoViewer.show(img);
  }
}
