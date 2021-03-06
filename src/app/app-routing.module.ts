import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { QuestionsComponent as AdminQuestionsPage } from './components/admin/questions/questions.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'signup',
    loadChildren: () => import('./components/signup/signup.module').then(m => m.SignupModule),
  },
  {
    path: 'categories',
    loadChildren: () => import('./components/categories/categories.module').then(m => m.CategoriesModule),
  },
  {
    path: 'searching-opponent/:categoryId',
    loadChildren: () => import('./components/searching-opponent/searching-opponent.module').then(m => m.SearchingOpponentModule),
  },
  {
    path: 'quiz',
    loadChildren: () => import('./components/quiz/quiz.module').then(m => m.QuizModule),
  },
  {
    path: 'admin/questions',
    component: AdminQuestionsPage,
  },
  {
    path: '**',
    redirectTo: '/login'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  providers: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
