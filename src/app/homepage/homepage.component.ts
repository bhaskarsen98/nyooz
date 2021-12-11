import { Component, OnInit } from '@angular/core';
import { news } from '../sample';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  data = news.news;

  constructor() { }

  ngOnInit(): void {
  }

  openNews(resource: string) {
    console.log(resource);
  }

}
