import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

const ADMIN_ENDPOINT = 'https://us-central1-ng-in-action.cloudfunctions.net/admin';

@Injectable()
export class AdminService {

  constructor(private http: HttpClient) {
  }

  user() {
    return this.http.get(`${ADMIN_ENDPOINT}/user/`).subscribe(console.log);
  }

  msg() {
    return this.http.get(`${ADMIN_ENDPOINT}/messages/`).subscribe(console.log);
  }

  all() {
    return this.http.get(`${ADMIN_ENDPOINT}/all/`).subscribe(console.log);
  }

}
