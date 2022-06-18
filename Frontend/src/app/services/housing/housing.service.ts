import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Property} from "../../core/property/property";

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) {
  }

  getProperties(sellrent: number): Observable<Property[]> {
    return this.http.get<Property[]>('data/properties.json').pipe(
      map(data => data.filter(p => p.sellrent === sellrent))
    );
  }
}
