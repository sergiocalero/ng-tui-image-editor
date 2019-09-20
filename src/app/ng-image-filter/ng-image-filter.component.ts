import { Component, OnInit } from '@angular/core';

import Jimp from 'jimp';

@Component({
  selector: 'app-ng-image-filter',
  templateUrl: './ng-image-filter.component.html',
  styleUrls: ['./ng-image-filter.component.css']
})
export class NgImageFilterComponent implements OnInit {

  imgPath: string;
  imgTitle: string;
  target: {
    width: number,
    height: number,
    quality: number,
    grayscale: boolean,
    processed: boolean
  };
  targetImageB64: string;
  constructor() { }

  ngOnInit() {
    this.imgPath = 'assets/gorgonia.jpg';
    this.imgTitle = 'Gorgonia';
    this.target = {
      width : 256,
      height : 256,
      quality : 60,
      grayscale : true,
      processed: false
    };
  }

  applyFilter() {

    Jimp.read('http://localhost:4200/assets/gorgonia.jpg')
    .then(image => {
      // Do stuff with the image.
      image
      .resize(+this.target.width, +this.target.height) // resize
      .quality(+this.target.quality); // set JPEG quality

      if (this.target.grayscale) {
        image.greyscale(); // set greyscale
      }

      return image.getBase64(Jimp.MIME_JPEG, (err, img) => {
        // this image is 256 x 256, every pixel is set to 0x00000000
        console.log('base64', img);
        this.targetImageB64 = img;
      });
    })
    .then(( jimpObject => {
      console.log('then', jimpObject);
      this.target.processed = true;
    }))
    .catch(err => {
      // Handle an exception.
      console.error(err);
      this.target.processed = false;
    });
  }
}
