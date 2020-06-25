import { Injectable } from '@angular/core';
import { Post } from "./post";
import { HttpClient } from '@angular/common/http';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  posts: Post[];

  postSource: Subject<Post[]> = new Subject();

  private strTry: BehaviorSubject<string> = new BehaviorSubject("deneme");
  currentMsg = this.strTry.asObservable();

  constructor( private http: HttpClient ) { }

  getPostObs(): Observable<Post[]> {
    return this.postSource.asObservable();
  }

  changeMsg(msg:string): void {
    this.strTry.next(msg);
  }

  createData() {
    this.http.get<Post[]>(this.apiUrl)
        .subscribe(posts => {
          this.posts = posts;
          this.postSource.next(posts);
        });
  }

  createDataById(userId:number) {
    this.http.get<Post[]>(this.apiUrl+"?userId="+userId)
        .subscribe(posts => {
          this.posts = posts;
          this.postSource.next(posts);
        });
  }
}
