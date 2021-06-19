import { HttpClient, HttpRequest } from '@angular/common/http';
import {Component, OnInit} from '@angular/core';

interface CityWeather {
  name: string;
  weather: string;
  status: string[];
}

interface ApiResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: CityWeather[];
}

@Component({
  selector: 'weather-finder',
  templateUrl: './weatherFinder.component.html',
  styleUrls: ['./weatherFinder.component.scss']
})
export class WeatherFinder implements OnInit {

  constructor(private http:HttpClient){}

  searchKey;

  res:CityWeather;

  search(){
    let url =` https://jsonmock.hackerrank.com/api/weather?name=${this.searchKey}`;
    this.http.get(url).toPromise().then(res => {
      this.res = res[`data`];
    });
      
  }

  ngOnInit(): void {
  }
}
