import { Component, Input } from '@angular/core';
import { Post } from '../Post';

@Component({
    'selector':'post',
    'templateUrl':"./post.component.html",
    'styleUrls':["./post.component.css"]
})
export class PostComponent{
    @Input() post  : Post;

}