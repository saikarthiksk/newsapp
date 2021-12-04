import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public apikey:any='832b84db7455424390f66fba0bc39077';
  constructor(private http:HttpClient) { }

  getNews(topic,date){
    return this.http.get('https://newsapi.org/v2/everything?q='+topic+'+&from='+date+'&sortBy=publishedAt&apiKey='+this.apikey);
  }
}
