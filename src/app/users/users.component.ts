import { Component } from '@angular/core';
import { User } from '../user';
import { UsersService } from '../users.service';
import { PostsService } from '../posts.service';
import { Post } from "../post";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users: User[];
  posts: Post[];

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private postsService: PostsService, private usersService:UsersService) { }

  ngOnInit(): void {
    this.getUsers();
    this.postsService.createData(this.apiUrl);
  }

  getAllPosts(): void {
    this.postsService.getPostObs().subscribe(posts => this.posts = posts);
  }

  getPostsById(user:User): void {
    this.postsService.getPostsById();
  }

  getUsers():void {
    this.usersService.getUsers()
        .subscribe(users=> {
          this.users = users;
        });
  }
}
