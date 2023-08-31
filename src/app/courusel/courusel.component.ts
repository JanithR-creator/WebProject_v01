import { Component } from '@angular/core';

@Component({
  selector: 'app-courusel',
  templateUrl: './courusel.component.html',
  styleUrls: ['./courusel.component.css']
})
export class CouruselComponent {
  images = [
    {id:1, src:"\assets\image\IMG-5220.JPG"},
    {id:2,src:"\assets\image\IMG-5221.JPG"}
  ]
}
