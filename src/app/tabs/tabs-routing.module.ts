import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "home",
        loadChildren: () =>
          import("../screens/home/home.module").then((m) => m.HomePageModule),
      },
      {
        path: "search",
        loadChildren: () =>
          import("../screens/search/search.module").then(
            (m) => m.SearchPageModule
          ),
      },
      {
        path: "add",
        loadChildren: () =>
          import("../screens/add/add.module").then((m) => m.AddPageModule),
      },
      {
        path: "likes",
        loadChildren: () =>
          import("../screens/likes/likes.module").then(
            (m) => m.LikesPageModule
          ),
      },
      {
        path: "profile",
        loadChildren: () =>
          import("../screens/profile/profile.module").then(
            (m) => m.ProfilePageModule
          ),
      },
      {
        path: "",
        redirectTo: "/tabs/home",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "",
    redirectTo: "/tabs/home",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
