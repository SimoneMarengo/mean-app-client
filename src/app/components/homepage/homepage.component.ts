import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(
    private _testService: TestService
  ) { }

  ngOnInit(): void {
  }

  tryApi() {
     this._testService.pingTest();
  }
}
