import { Component, OnDestroy, ComponentFactoryResolver, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponseData } from './auth.service';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as AuthActions from './store/auth.actions';
// alert component
import { AlertComponet } from '../shared/alert/alert.component';
import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {
  isLogInMode: boolean = true;
  isLoading: boolean = false;
  error: string = null;
  @ViewChild(PlaceholderDirective, { static: false}) alertHost: PlaceholderDirective;
  private closeSub: Subscription; 

  constructor(private authService: AuthService,
              private router: Router,
              private comFactoryResolver: ComponentFactoryResolver,
              private store: Store<fromApp.AppState>) { }

    ngOnInit() {
      this.store.select('auth').subscribe(authState => {
        this.isLoading = authState.loading;
        this.error = authState.authError;
        if (this.error) {
          this.showErrorAlert(this.error);
        }
      });
    }

  onSwitchMode() {
    this.isLogInMode = !this.isLogInMode;
  }

  onSubmit(form: NgForm) {
      if (!form.valid) {
        return;
      }
      const email = form.value.email;
      const password = form.value.password;
      // set auth
      let authObs: Observable<AuthResponseData>;
      // Set Loading Mode to True
      this.isLoading = true;


      if (this.isLogInMode) {
       // authObs = this.authService.login(email, password);
       this.store.dispatch(new AuthActions.LoginStart({ email: email, password: password }) 
       );
      } else {
        authObs = this.authService.signup(email, password);
      }

      // authObs.subscribe(resData => {
      //     console.log(resData);
      //     this.isLoading = false;
      //     this.router.navigate(['/recipes']);
      //   }, 
      //   errorMessage => {
      //     console.log(errorMessage);
      //     this.error = errorMessage;
      //     this.showErrorAlert(errorMessage);
      //     this.isLoading = false;
      // });

      form.reset();
  }

  onHandleError() {
      this.error = null;
  }

  private showErrorAlert(message: string) {
    const alertCmpFactory =  
      this.comFactoryResolver.resolveComponentFactory(AlertComponet);
      const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();

    const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);

    componentRef.instance.message = message;
    this.closeSub = componentRef.instance.close.subscribe(() => {
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
    });
  }

  ngOnDestroy() {
    if (this.closeSub) {
      this.closeSub.unsubscribe();
    }
  }
}