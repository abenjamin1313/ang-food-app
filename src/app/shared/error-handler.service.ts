import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService extends ErrorHandler {

  constructor() { 
    super();
  }

  handleError(error) {
    let date = new Date();
    
    console.error('There was an error...', {
        timestamp: date.toISOString(),
        message: error.message,
        zone: error.zone,
        task: error.task
    });
}
}