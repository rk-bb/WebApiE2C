import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; 
import { environment } from 'src/environments/environment';
import { Motscles } from '../models/motscles.model';

@Injectable({
  providedIn: 'root'
})
export class MotsclesService {


  constructor(private http:HttpClient) { 
     
  }
  listeMotsCles : Motscles[]; 
  /*readonly root_url='https://localhost:44350/api';*/

  refreshList(){
    this.http.get<any>(environment.API_URL +'/MotCles')
    .subscribe(data=>{
      this.listeMotsCles=data;
    })

    
  }

  create(data: any): Observable<any> {
    return this.http.post(environment.API_URL +'/AddMotsCles', data);
  }
}

