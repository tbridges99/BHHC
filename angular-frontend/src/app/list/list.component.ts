import { Component, OnInit } from '@angular/core';
import {ReasonsService} from '../reasons.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    public reasons:any;
    constructor(private reasonsService: ReasonsService) { }

    ngOnInit() {
        this.reasonsService.getReasons().subscribe(Reason => this.reasons = Reason);
    }
}
