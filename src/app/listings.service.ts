import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ListingsService {

  constructor(private http:Http) { 

  }

  getListings(){
    return this.http.get('/listings')
      .map(res => res.json());
  }

}
