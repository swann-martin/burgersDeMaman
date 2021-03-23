import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isInterested: boolean = false;
  bNowPicture: string = 'assets/photo-1572802419224-296b0aeee0d9.jfif';
  burgersNow: string[] = [
    'Le JeanJack',
    'Le Bordelais',
    'El Salvador',
    'La Brute',
  ];

  constructor() {}

  ngOnInit(): void {}

  bonApp() {
    this.isInterested = !this.isInterested;
  }
}
