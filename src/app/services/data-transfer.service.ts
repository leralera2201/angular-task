import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {User} from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  user: BehaviorSubject<any> = new BehaviorSubject<any>(null)

  constructor() { }
}
