import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import {DynamicTableComponent} from "../../directives/DynamicTable/dynamic.table";
import {GraphService} from "../../services/GraphService";


@NgModule({
  imports:      [ CommonModule ],
  declarations: [ DynamicTableComponent],
  exports:      [ DynamicTableComponent ]
})
export class SharedModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        GraphService
      ]
    };
  }
}
