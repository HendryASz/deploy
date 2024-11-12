// import { NgModule } from '@angular/core';
// import { RouterModule } from '@angular/router';
// import { routes } from './routes';


// @NgModule({
//   imports: [RouterModule.forRoot(routes, { useHash: true } )],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }




import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { routes } from './routes';

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }  // Gunakan HashLocationStrategy
  ]
})
export class AppRoutingModule { }
