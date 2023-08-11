import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from '../user.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users?: string[];
  activeCount = 0 ;
  constructor(private userService: UserService, private counterService: CounterService){
    this.counterService.inactiveToActiveEmit.subscribe(
      (count:number) => this.activeCount = count
    );
  }
  ngOnInit() {
      this.users = this.userService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.userService.addToInactiveUsers(id);
  }
}
