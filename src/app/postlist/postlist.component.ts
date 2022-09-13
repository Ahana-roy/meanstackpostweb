import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {

  postlist: Post[] = [
    
    
  ]
  onCreatePost(post:Post)
  {
    this.postlist.unshift(post);
  }

  ngOnInit(){}
}