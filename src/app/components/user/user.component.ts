import { Component, OnInit, Input } from '@angular/core';

import { User } from '../../models/User';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    @Input() user: User;
    private isShowDetailsEnable: boolean = false;
    private iconeDetalhes: string = 'fa fa-plus';

    constructor() {
    }

    ngOnInit() {
    }

    showDetails(e: any): void {
        this.isShowDetailsEnable = !this.isShowDetailsEnable;
        this.isShowDetailsEnable ? 
            this.iconeDetalhes = 'fa fa-minus' : this.iconeDetalhes = 'fa fa-plus'
    }

}