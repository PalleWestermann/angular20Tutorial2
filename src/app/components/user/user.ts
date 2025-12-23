import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User implements OnInit {

  //userList:any[] = [];
  userList= signal<any>(null);

  userObj: any = {
  "userId": 0,
  "emailId": "",
  "password": "",
  "fullName": "",
  "mobileNo": ""
  };

  http = inject(HttpClient);

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.http.get("https://api.freeprojectapi.com/api/GoalTracker/getAllUsers").subscribe((Res:any) => {
      this.userList.set(Res);
    });;
  }

  onSaveUser() {
    this.http.post("https://api.freeprojectapi.com/api/GoalTracker/register", this.userObj).subscribe({
      next:(result) => {
        alert("User Created Successfully");
        this.getUsers();
      },
      error:(error) => {
        alert("Error -" + error);
      }}
    )
  }

  onReset() {
    this.userObj = {
    "userId": 0,
    "emailId": "",
    "password": "",
    "fullName": "",
    "mobileNo": ""
    };
  }

  onUpdateUser() {
    this.userObj.createdDate = new Date();
    this.http.put("https://api.freeprojectapi.com/api/GoalTracker/updateUser?id=" + this.userObj.userId, this.userObj).subscribe({
      next: ()=> {
        alert("User Updated Successfully");
        this.getUsers();
      },
      error:(error)=> {
        alert("Error -" + error.error);
      }
    })
  }

  onDeleteUser(id: number) {
    const isDelete = confirm("Are you sure you want to delete?");
    if (isDelete){
    this.http.delete("https://api.freeprojectapi.com/api/GoalTracker/deleteUserById?id=" + id).subscribe({
      next: () => {
        alert("User Deleted Successfully");
        this.getUsers();
      },
      error: (error) => {
        alert("Error -" + error.error);
      }
    });
    }
  }

  onEdit(item: any) {
    this.userObj = item;
  }
}
