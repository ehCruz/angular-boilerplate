import { Component, OnInit } from '@angular/core';

import { Post } from '../../models/Post';
import { PostService } from '../../services/post.service';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css'],
    providers: [PostService]
})
export class PostsComponent implements OnInit {

    private posts: Array<Post>;
    private isEditable: boolean = false;
    private currentPost: Post = {
        id: 0,
        title: '',
        body: ''
    }

    constructor(private postService: PostService) { }

    ngOnInit() {
        this.postService.getPosts()
            .subscribe(posts => this.posts = posts);
    }

    reciverNewPost(emmiter: any): void {
        this.posts.unshift(emmiter as Post);
    }

    editPost(post: Post): void {
        this.isEditable = true;
        this.currentPost = post;
    }

    onUpdatedPost(emmiter: Post): void {
        console.info(emmiter)
        this.posts.forEach((cur, index) => {
            if (emmiter.id === cur.id) {
                console.log('ok')
                this.posts.splice(index, 1);
                this.posts.unshift(emmiter);
                this.clearEditable();
                return;
            }
        });
    }

    deletePost(postId: number): void {
        if (postId && postId > 0) {
            this.postService.deletePost(postId)
                .subscribe(() => {
                    this.posts.forEach((cur, index) => {
                        if (postId === cur.id) {
                            this.posts.splice(index, 1);
                            this.clearEditable();
                        }
                    });
                });
        }
    }

    private clearEditable(): void {
        this.isEditable = false;
        this.currentPost = {
            id: 0,
            title: '',
            body: ''
        } as Post;
    }
}
