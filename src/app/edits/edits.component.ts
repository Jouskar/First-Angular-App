import { Component, OnInit } from '@angular/core';
import { Post } from "../post";
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-edits',
  templateUrl: './edits.component.html',
  styleUrls: ['./edits.component.css']
})
export class EditsComponent implements OnInit {

  post: Post;

  constructor(private postsService: PostsService) { }
  
  ngOnInit(): void {
    this.postsService.editedPost.subscribe(post => this.post = post);
  }

  saveChanges(title: string, body: string): void {
    
  }
}
