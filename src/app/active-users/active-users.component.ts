import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../user.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  @Input() users?: string[];
  activeCount = 0 ;
  constructor(private userService: UserService, private counterService: CounterService){
    this.counterService.inactiveToActiveEmit.subscribe(
      (count:number) => this.activeCount = count
    );
  }

  onSetToInactive(id: number) {
    this.userService.addToInactiveUsers(id);
  }
}
