export class User {
    constructor(
        public email: string, 
        public id: string, 
        private _token: string, 
        private _tokenExperationDate: Date
        ) {}
        // getter 
        get token() {
            if(!this._tokenExperationDate || new Date() > this._tokenExperationDate) {
                return null;
            }
            return this._token;
        }
}