import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { USER_LOGIN_URL, USER_REGISTER_URL } from '../shared/constants/urls';
import { IUserLogin } from '../shared/interfaces/IUserLogin';
import { User } from '../shared/models/User';
import { ToastrService } from 'ngx-toastr';
import { IUserRegister } from '../shared/interfaces/IUserRegister';


const USER_KEY = 'User';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<User>(this.getUserToLocalStore());
  public userObservable:Observable<User>;
  constructor(private http:HttpClient, private toastrService:ToastrService) {
    this.userObservable = this.userSubject.asObservable();
  }

  public get currentUser():User{
    return this.userSubject.value;
  }

  login(userLogin:IUserLogin):Observable<User>{
      return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
        tap({
          next: (user) => {
            this.setUserToLocalStore(user);
            this.userSubject.next(user);
            this.toastrService.success(
              `Welcome to iFood ${user.name}!`,
              'Login Successful'
            )

          },
          error: (errorResponse) => {
             this.toastrService.error(errorResponse.error, 'Login Failed');
          }
        })
       );
  }

  register(userRegister:IUserRegister): Observable<User>{
    return this.http.post<User>(USER_REGISTER_URL, userRegister).pipe(
      tap({
        next: (user) => {
          this.setUserToLocalStore(user);
          this.userSubject.next(user);
          this.toastrService.success(
            `Bem vindo ao Dooh Ponto ${user.name}`,
            `Registado com sucesso`
          )
        },
        error: (errorResponse) => {
            this.toastrService.error(errorResponse.error,
              'Falha ao Registar')
        }

      })
    )}

logout(){
   this.userSubject.next(new User());
   localStorage.removeItem(USER_KEY);
   window.location.reload();
}

  private setUserToLocalStore(user:User){
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }


  private getUserToLocalStore():User{
    const userJson = localStorage.getItem(USER_KEY);
    if(userJson) return JSON.parse(userJson) as User;
    return new User();
  }
}
