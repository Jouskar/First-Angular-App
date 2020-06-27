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

  private selectedPostSource: BehaviorSubject<Post> = new BehaviorSubject(null);
  selectedPost = this.selectedPostSource.asObservable();

  constructor( private http: HttpClient ) { }

  getPostObs(): Observable<Post[]> {
    return this.postSource.asObservable();
  }

  selectPost(post: Post): void {
    this.selectedPostSource.next(post);
  }

  updateData(posts: Post[]): void {
    this.postSource.next(posts);
    this.selectedPostSource.next(null);
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
