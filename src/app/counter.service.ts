import { UserService } from './user.service';
import { EventEmitter, Injectable } from "@angular/core";

@Injectable()
export class CounterService {
  //I want to subscribe whenver an event is emitted on going active -> inactive
  // inactive - > active
  // have these be subscribed to by the active in active components respectivel
  activeToInactiveEmit = new EventEmitter<Number>();
  inactiveToActiveEmit = new EventEmitter<Number>();


  activeToInActiveUserCount(count: number){
    this.activeToInactiveEmit.emit(count);
  }

  inActiveToActiveUserCount(count: number){
    this.inactiveToActiveEmit.emit(count);
  }
}
