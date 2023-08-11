import { EventEmitter, Injectable } from "@angular/core";
import { CounterService } from "./counter.service";

@Injectable()
export class UserService {
  activeUsers = ['Max', 'Anna']
  inActiveUsers =['Paul', 'Emily']

  constructor(private countService: CounterService){

  }

  addToActiveUsers(id: number){
    this.activeUsers.push(this.inActiveUsers[id])
    this.inActiveUsers.splice(id, 1)
    this.countService.inActiveToActiveIncrement()

  }

  addToInactiveUsers(id: number){
    this.inActiveUsers.push(this.activeUsers[id])
    this.activeUsers.splice(id,1)
    this.countService.activeToInActiveIncrement()
  }
}
