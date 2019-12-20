import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Post } from '../../models/Post';
import { PostService } from '../../services/post.service';

@Component({
    selector: 'app-post-form',
    templateUrl: './post-form.component.html',
    styleUrls: ['./post-form.component.css'],
    providers: [PostService]
})
export class PostFormComponent implements OnInit {

    @Output() postEmitter: EventEmitter<Post> = new EventEmitter();
    @Output() updatedPost: EventEmitter<Post> = new EventEmitter();
    @Input() currentPost: Post;
    @Input() isEditable: boolean;

    constructor(private postService: PostService) { }

    ngOnInit() {
    }

    addNewPost(title: string, body: string): void {
        if (!title || !body) {
            alert("Post incompleto");
        } else {
            this.postService.addPost({ title, body } as Post)
                .subscribe(post => this.postEmitter.emit(post));
        }
    }

    updatePost(currentPost: Post): void {
        if (!this.currentPost.title || !this.currentPost.body) {
            alert("Post incompleto");
        } else {
            this.postService.updatePost(currentPost)
                .subscribe(post => {
                    console.log(post)
                    this.updatedPost.emit(post);
                });
        }
    }

}
