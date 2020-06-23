import { Injectable } from '@angular/core';
import { Post } from "./post";
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: Post[];

  postSource: Subject<Post[]> = new Subject();

  constructor( private http: HttpClient ) { }

  getPostObs(): Observable<Post[]> {
    return this.postSource.asObservable();
  }

  createData(url:string) {
    this.http.get<Post[]>(url)
        .subscribe(posts => {
          this.posts = posts;
          this.postSource.next(posts);
        });
  }
  
  getPostsById(): void {
    this.postSource.next(this.posts);
  }
}
