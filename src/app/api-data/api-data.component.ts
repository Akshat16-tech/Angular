import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-api-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './api-data.component.html',
  styleUrls: ['./api-data.component.scss']
})
export class ApiDataComponent implements OnInit {
  apiData: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getApiData().subscribe(data => {
      this.apiData = data;
    });
  }
}
