import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { CounterService } from '../counter.service';


@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{
   users?: string[];
   inActiveCount = 0;

  constructor(private userService: UserService, private counterService: CounterService){
    this.counterService.activeToInactiveEmit.subscribe(
      (count:number) => this.inActiveCount = count
    );
  }

  ngOnInit(): void {
      this.users = this.userService.inActiveUsers
  }


  onSetToActive(id: number) {
    this.userService.addToActiveUsers(id)
  }
}
