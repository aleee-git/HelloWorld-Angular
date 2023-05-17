import { Injectable } from '@angular/core';
import { User } from '../other/interfases';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userr!: User;

  constructor() { }

}
 