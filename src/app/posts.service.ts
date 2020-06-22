import { Injectable } from '@angular/core';
import { Post } from "./post";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(
    private http: HttpClient
  ) { }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl+'/posts');
  }
  
  getPostsById(id: number): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl+'/posts?userId='+id);
  }
}
