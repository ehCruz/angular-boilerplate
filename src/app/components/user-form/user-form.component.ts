import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { User } from '../../models/User';
import { Address } from '../../models/Address';

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

    private enableAddUser: boolean = true;
    private showForm: boolean = false;
    private user: User;
    private address: Address;

    @Output() novoUser = new EventEmitter();

    constructor() { }

    ngOnInit() {
        this.initializeObjects();
    }

    onSubmit(userForm: NgForm) {
        console.log(userForm.value)
        this.novoUser.emit(this.user);
        this.initializeObjects();
    }

    private initializeObjects(): void {
        this.address = {
            street: '',
            city: '',
            state: ''
        }

        this.user = {
            firstName: '',
            lastName: '',
            email: '',
            age: null,
            address: this.address
        }
    }

}
