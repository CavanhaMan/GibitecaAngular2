import { Component,OnInit } from '@angular/core';
import { LoginServiceService } from './login/login-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {

  constructor (private authService: LoginServiceService){ }

  private showNavBar: boolean = false;

  ngOnInit(){
    this.authService.showNavbarEmmitter.subscribe(
      (mode: boolean) =>{
        if ( mode !== null){
          this.showNavBar = mode;
        }
      }
    );
  }

  isAuth(){
    return this.authService.isAuthenticated();
  }

  onLogout(){
    this.authService.logout();
  }
  
  title = 'Gibiteca do Cavanha';
}