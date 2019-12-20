import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { User } from '../models/User';

@Injectable({
	providedIn: 'root'
})
export class UsersService {

	private users: User[];
	private data: Observable<any>;

	constructor() {
		this.users = [
			{
				firstName: 'Eduardo',
				lastName: 'Cruz',
				email: 'eduardo@email.com',
				age: 24,
				address: {
					street: 'Jose Milek',
					city: 'Almirante Tamandare',
					state: 'PR'
				},
			},
			{
				firstName: 'Robert',
				lastName: 'Marin',
				email: 'Robert@email.com',
				age: 32,
				address: {
					street: '88 Main St',
					city: 'New York',
					state: 'NY'
				},
			},
			{
				firstName: 'Ellie',
				lastName: 'Johnson',
				email: 'ellie@email.com',
				age: 19,
				address: {
					street: '123 Saint Roulet St',
					city: 'Las Vegas',
					state: 'NV'
				}
			}
		];
	}

	getData(): Observable<any> {
		return this.data = new Observable<any>(observer => {
			setTimeout(() => {
				observer.next(1);
			}, 2000);
		})
	}

	getUsers(): Observable<User[]> {
		return of(this.users);
	}

}
