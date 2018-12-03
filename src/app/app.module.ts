import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { MatInputModule,
  MatMenuModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatExpansionModule,
  MatSelectModule,
  MatBadgeModule } from '@angular/material';

  // App componenets
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieAddComponent } from './movie-add/movie-add.component';
import { MovieEditComponent } from './movie-edit/movie-edit.component';
import { ReviewListComponent } from './review-list/review-list.component';
import { ReviewAddComponent } from './review-add/review-add.component';
import { ReviewEditComponent } from './review-edit/review-edit.component';

// App services
import { PostService } from './services/post.service';
import { MovieService } from './services/movie.service';
import { ReviewService } from './services/review.service';




const appRoutes: Routes = [
  {
    path: 'movie-list',
    component: MovieListComponent
  },
  {
    path: 'movie-add',
    component: MovieAddComponent
  },
  {
    path: 'movie-edit/:id',
    component: MovieEditComponent
  },
  {
    path: 'review-list',
    component: ReviewListComponent
  },
  {
    path: 'review-add',
    component: ReviewAddComponent
  },
  {
    path: 'review-edit/:id',
    component: ReviewEditComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    MovieAddComponent,
    MovieEditComponent,
    MovieListComponent,
    ReviewAddComponent,
    ReviewListComponent,
    ReviewEditComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatMenuModule,
    MatSelectModule,
    MatBadgeModule
  ],
  providers: [MovieService, ReviewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
