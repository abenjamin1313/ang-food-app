import { NgModule, ErrorHandler, NO_ERRORS_SCHEMA  } from '@angular/core';
// services
import { ErrorHandlerService } from './shared/error-handler.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeService } from './recipes/recipe.service';
import { AuthInterceptorService } from './auth/auth-intercepter.service';
// interceptor
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
    schemas: [ NO_ERRORS_SCHEMA ],
    providers: [
        ShoppingListService, 
        RecipeService,
    {provide: ErrorHandler, 
      useClass: ErrorHandlerService
    },
    {provide: HTTP_INTERCEPTORS, 
      useClass: AuthInterceptorService,
      multi: true
    }
  ]
})
export class CoreModule {}