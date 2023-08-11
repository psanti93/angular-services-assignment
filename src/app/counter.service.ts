import { UserService } from './user.service';
import { EventEmitter, Injectable } from "@angular/core";

@Injectable()
export class CounterService {

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
