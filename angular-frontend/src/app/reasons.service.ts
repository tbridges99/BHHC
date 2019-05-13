import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ReasonsService {

    constructor(private http:HttpClient) { }

    getReasons(){
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/reasons/getreasons', {headers:headers});
    }

    addReason(reason){
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/reasons/addnew',
        reason, {headers:headers});
    }
}
