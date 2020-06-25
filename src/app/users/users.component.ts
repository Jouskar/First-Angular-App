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
  msg: string;


  constructor(private postsService: PostsService, private usersService:UsersService) { }

  ngOnInit(): void {
    this.getUsers();
    
    this.postsService.currentMsg.subscribe(msg => this.msg = msg);
    console.log(this.msg);
  }

  changeMsg(): void {
    this.postsService.changeMsg("deneme yeni");
    console.log(this.msg);
  }
  getAllPosts(): void {
    //this.postsService.getPostObs().subscribe(posts => this.posts = posts);
    this.postsService.createData();
  }

  getPostsById(userId:number): void {
    this.postsService.createDataById(userId);
  }

  getUsers():void {
    this.usersService.getUsers()
        .subscribe(users=> {
          this.users = users;
        });
  }
}
