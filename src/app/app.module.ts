import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { PostsComponent } from './components/posts/posts.component';
import { CommentsComponent } from './components/comments/comments.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { PostComponent } from './components/post/post.component';
import { UserComponent } from './components/user/user.component';
import { CommentComponent } from './components/comment/comment.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { CommentsTransferPipe } from './components/comments/comments-transfer.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    CommentsComponent,
    PostComponent,
    UserComponent,
    CommentComponent,
    UserDetailComponent,
    CommentsTransferPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'users', component: UsersComponent},
      {path: 'users/:id', component: UserDetailComponent},
      {path: 'posts', component: PostsComponent},
      {path: 'comments', component: CommentsComponent},
      {path: 'select', loadChildren: () => import('./select/select.module').then(m => m.SelectModule)},

    ])
  ],
  providers: [],
  exports: [
    // UserComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
