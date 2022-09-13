import { Component, OnInit , EventEmitter, Output } from '@angular/core';
import { Post} from '../Post';


@Component({
  selector: 'form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  post : Post

  id ;
  title : string;
  desc : string;
  

@Output()  postCreate : EventEmitter<Post> = new EventEmitter<Post>();

  constructor() { }

  ngOnInit(){  }

  addPost(){
    this.post = {title:this.title,id:this.id,desc:this.desc}
    this.postCreate.emit(this.post);
    this.title="";
    this.id="";
    this.desc="";
  }
 

}
