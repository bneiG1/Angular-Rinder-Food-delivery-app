import { Injectable } from '@angular/core';
import { Card } from '../database-service/card';
import { User } from '../database-service/user';

@Injectable()
export class AuthentificationService {

  user_card: Card={
    Owner_Name: '',
    Card_Number: '',
    Expiration_Date: '',
    CVV: 0,
  }

  preferences: string[] =[]

  User: User = {
    id: 0,
    username: '',
    cos: [],
    comenzi: [],
    card: this.user_card,
    preferences: this.preferences,
    Adress: '',
  };
  constructor(){}

  ngOnInit(): void {
  }


}
