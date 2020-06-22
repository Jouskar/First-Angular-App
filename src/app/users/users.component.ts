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

  constructor(private postsService: PostsService, private usersService:UsersService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getAllPosts(): void {
    this.postsService.getAllPosts()
        .subscribe(posts=> {
          this.posts = posts;
        });
  }

  getPostsById(user:User): void {
    this.postsService.getPostsById(user.id)
        .subscribe(posts=> {
          this.posts = posts;
        });
  }

  getUsers():void {
    this.usersService.getUsers()
        .subscribe(users=> {
          this.users = users;
        });
  }
}
