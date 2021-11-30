import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private snack:MatSnackBar) { }

  ngOnInit(): void {
  }


btnClick(){

  console.log("btn click");
  this.snack.open("Hello wlcome to this app");
}


}
