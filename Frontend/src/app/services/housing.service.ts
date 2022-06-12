import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Property} from "../core/property/property";

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) {
  }

  getAllProperties(): Observable<Property[]> {
    return this.http.get<Property[]>('data/properties.json');
  }
}
