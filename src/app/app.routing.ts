import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Import Containers
import { DefaultLayoutComponent } from "./containers";

import { P404Component } from "./views/error/404.component";
import { P500Component } from "./views/error/500.component";
import { LoginComponent } from "./views/login/login.component";
import { RegisterComponent } from "./views/register/register.component";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full"
  },
  {
    path: "404",
    component: P404Component,
    data: {
      title: "Page 404"
    }
  },
  {
    path: "500",
    component: P500Component,
    data: {
      title: "Page 500"
    }
  },
  {
    path: "login",
    component: LoginComponent,
    data: {
      title: "Login Page"
    }
  },
  {
    path: "register",
    component: RegisterComponent,
    data: {
      title: "Register Page"
    }
  },
  {
    path: "",
    component: DefaultLayoutComponent,
    data: {
      title: "Home"
    },
    children: [
      {
        path: "dashboard",
        loadChildren: () => import("./views/dashboard/dashboard.module").then(m => m.DashboardModule)
      },
      {
        path: "series",
        loadChildren: () => import("./views/series/series.module").then(m => m.SeriesModule)
      },
      {
        path: "steppingstones",
        loadChildren: () => import("./views/stepping-stones/stepping-stones.module").then(m => m.SteppingStonesListModule)
      },
      {
        path: "book",
        loadChildren: () => import("./views/books/books.module").then(m => m.BooksModule)
      },
      {
        path: "storytime",
        loadChildren: () => import("./views/storytime/storytime.module").then(m => m.StorytimeModule)
      },
      {
        path: "blog",
        loadChildren: () => import("./views/blog/blog.module").then(m => m.BlogModule)
      },
      {
        path: "home",
        loadChildren: () => import("./views/home/home.module").then(m => m.HomeModule)
      },
      {
        path: "about-us",
        loadChildren: () => import("./views/about-us/about-us.module").then(m => m.AboutUsModule)
      },
      {
        path: "help",
        loadChildren: () => import("./views/help/help.module").then(m => m.HelpModule)
      }
    ]
  },
  { path: "**", component: P404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
