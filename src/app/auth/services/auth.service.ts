import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';


@Injectable()
export class AuthService {

  user: Observable<firebase.User>;
  private loggedIn: boolean = false;
  token: string;
  
  constructor(private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
    // console.log(this.user);
  }

  signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });    
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');

        // return true;
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }

  loginWithGoogle() {
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
  }

  isLoggedin(): any {

    firebase.auth().onAuthStateChanged(function(user) {
      // if (user) {
      //   console.log(user);
      //   return true;
      // } 

      // return false;
    });


    // this.firebaseAuth.authState.subscribe((auth) => {
    //   console.log(auth);      
    // });
    // console.log(this.user);
    // console.log(firebase.auth().currentUser);
    
    // if (this.loggedIn) {
    //   return true;
    // } else {
    //   return false;      
    // }

    return true;
  }


  // maximilian impimitation ===================
  getToken() {
    firebase.auth().currentUser.getToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }

  isAuthenticated() {
    console.log(this.token != null);
    return this.token != null;
  }

}
