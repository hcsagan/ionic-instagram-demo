import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";
import { ExploreContainerComponentModule } from "../../explore-container/explore-container.module";

import { AddPage } from "./add.page";

describe("Tab3Page", () => {
  let component: AddPage;
  let fixture: ComponentFixture<AddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
