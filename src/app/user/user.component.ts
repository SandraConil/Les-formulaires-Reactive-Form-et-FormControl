import { Component } from '@angular/core';
import { FormControl} from '@angular/forms';
import { User } from '../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
 
  username = new FormControl ('');
email = new FormControl ('');
password = new FormControl ('');
adress = new FormControl ('');

newUser : User | any;

inscription(){
  this.newUser = new User(this.username.value, this.email.value, this.password.value, this.adress.value);
}

}