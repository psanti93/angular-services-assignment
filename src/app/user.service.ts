import { Injectable } from "@angular/core";

@Injectable()
export class UserService {
  activeUsers = ['Max', 'Anna']
  inActiveUsers =['Paul', 'Emily']

  addToActiveUsers(id: number){
    this.activeUsers.push(this.inActiveUsers[id])
    this.inActiveUsers.splice(id, 1)
  }

  addToInactiveUsers(id: number){
    this.inActiveUsers.push(this.activeUsers[id])
    this.activeUsers.splice(id,1)
  }
}
