import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public username="";
  public pwd1="";
  
  constructor() {
    // this.username = "",
    //   this.password = ""

  }

  ngOnInit(): void {
  }

  public onClickMe() {
      // let users=[]
      // users.push({
      //   username:username,
      //   password:password
      // })
   
    console.log("Entered username is " + this.username + " password is " + this.pwd1)
    alert("Username " + this.username)

  }
  clear() {
    this.username = "",
      this.pwd1 = ""
  }

}
