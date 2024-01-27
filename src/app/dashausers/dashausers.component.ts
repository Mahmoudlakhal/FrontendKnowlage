// dashboard-users.component.ts
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../model/user';

@Component({
  selector: 'app-dashausers', // Assurez-vous que le sélecteur correspond
  templateUrl: './dashausers.component.html',
  styleUrls: ['./dashausers.component.css']
})
export class DashausersComponent implements OnInit {
  userList: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getAllUsers().subscribe(data => {
      this.userList = data;
    });
  }

  deleteUser(userId: number): void {
    this.userService.deleteUser(userId).subscribe(() => {
      // Mettez à jour la liste après la suppression
      this.loadUsers();
    });
  }
}
