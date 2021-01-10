import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AddPage } from "./add.page";
import { ExploreContainerComponentModule } from "../../explore-container/explore-container.module";

import { Tab3PageRoutingModule } from "./add-routing.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: "", component: AddPage }]),
    Tab3PageRoutingModule,
  ],
  declarations: [AddPage],
})
export class AddPageModule {}
