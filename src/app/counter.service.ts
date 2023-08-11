import { UserService } from './user.service';
import { EventEmitter, Injectable } from "@angular/core";

@Injectable()
export class CounterService {
  //I want to subscribe whenver an event is emitted on going active -> inactive
  // inactive - > active
  // have these be subscribed to by the active in active components respectivel
  inactiveCount = 0;
  activeCount = 0;
  activeToInactiveEmit = new EventEmitter<Number>();
  inactiveToActiveEmit = new EventEmitter<Number>();


  activeToInActiveIncrement(){
    this.inactiveCount++;
    this.activeToInactiveEmit.emit(this.inactiveCount);
  }

  inActiveToActiveIncrement(){
    this.activeCount++
    this.inactiveToActiveEmit.emit(this.activeCount);
  }
}
