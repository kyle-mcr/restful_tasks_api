import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myUrl = ''
  myobjects: any = [{ name: "", type: "", watered: false }];
  show: any;
  constructor(
    private http: HttpService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getAllObjects()
  }

  getAllObjects() {
    let observable = this.http.findAll()
    observable.subscribe(data => {
      this.myobjects = data;
    })
  }
  deleteObject(x) {
    let observable = this.http.delete(x);
    observable.subscribe(data => {
      console.log(data)
      this.getAllObjects()
    })
  }

  showObject(id: string) {
    console.log('click is working');
    let observable = this.http.findOne(id);
    observable.subscribe(data => {
      this.show = data;
      console.log("got details", data)
      
    })
  }
}