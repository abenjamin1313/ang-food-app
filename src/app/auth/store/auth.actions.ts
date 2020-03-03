import { Action } from '@ngrx/store';

export const LOGIN_START = '[Auth Actions] LOGIN START';
export const AUTH_SUCCESS = '[Auth Actions] LOGIN';
export const AUTH_FAIL = '[Auth Actions] LOGIN FAIL';
export const SIGNUP_START = '[Auth Actions] Sign Up Start';
export const CLEAR_ERROR = '[Auth Actions] Clear Error';
export const LOGOUT = '[Auth Actions] LOGOUT';

export class AuthSuccess implements Action  {
    readonly type = AUTH_SUCCESS;

    constructor(
        public payload: {
            email: string,
            userId: string;
            token: string;
            expirationDate: Date;
        }
    ) { }
}

export class Logout implements Action {
    readonly type = LOGOUT;
}

export class LoginStart implements Action {
    readonly type = LOGIN_START;

    constructor(public payload: {email: string; password: string}) {}
}

export class AuthFail implements Action {
    readonly type = AUTH_FAIL;

    constructor(public payload: string) {}
}

export class SignupStart implements Action {
    readonly type = SIGNUP_START;

    constructor(public payload: {email: string; password: string}) {}
}

export class ClearError implements Action {
    readonly type = CLEAR_ERROR;
}

export type AuthActions = 
    AuthSuccess | 
    Logout | 
    LoginStart | 
    AuthFail |
    SignupStart |
    ClearError;