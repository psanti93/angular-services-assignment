import { EventEmitter, Injectable } from "@angular/core";
import { CounterService } from "./counter.service";

@Injectable()
export class UserService {
  activeUsers = ['Max', 'Anna']
  inActiveUsers =['Paul', 'Emily']
  activeToInActiveCount : number = 0;
  inactiveToActiveCount : number = 0;

  constructor(private countService: CounterService){

  }

  addToActiveUsers(id: number){
    this.activeUsers.push(this.inActiveUsers[id])
    this.inActiveUsers.splice(id, 1)
    var activeCount = this.inactiveToActiveCount++;
    this.countService.inActiveToActiveUserCount(this.inactiveToActiveCount)

  }

  addToInactiveUsers(id: number){
    this.inActiveUsers.push(this.activeUsers[id])
    this.activeUsers.splice(id,1)
    var inActiveCount = this.activeToInActiveCount++;
    this.countService.activeToInActiveUserCount(this.activeToInActiveCount)
  }
}
