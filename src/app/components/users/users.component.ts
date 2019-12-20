import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { EmailValidator } from '@angular/forms';
import { UsersService } from '../../services/users.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css'],
    providers: [UsersService]
})
export class UsersComponent implements OnInit {

    users: User[];
    showUsers: boolean = false;

    constructor(private usersService: UsersService) {
    }

    ngOnInit() {
        this.usersService.getUsers().subscribe(users => {
            this.users = users;
            this.showUsers = true;
        });
    }

    addUser(user: User): void {
        this.users.push(user);
    }
}
