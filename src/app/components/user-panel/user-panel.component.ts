import { Component, OnInit, ViewChild } from '@angular/core';

import { UsersComponent } from '../users/users.component';
import { User } from '../../models/User';

@Component({
    selector: 'app-user-panel',
    templateUrl: './user-panel.component.html',
    styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

    private user: User;

    @ViewChild(UsersComponent, { static: false }) usersComponentChild;

    constructor() { }

    ngOnInit() {
    }

    reciverNovoUser(emitter: any): void {
        this.user = emitter;
        this.usersComponentChild.users.unshift(this.user);
    }

}
