import { Component, OnInit } from '@angular/core';
import { ApiModel } from 'src/app/models/api.model';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  APIs: Array<ApiModel> = [
    {
      name: "getAllTodos",
    }
  ];

  constructor(
    private _testService: TestService
  ) { }

  ngOnInit(): void {
  }

  tryApi(api: ApiModel) {
      api.response = this._testService.getAllTodos();
  }
}
