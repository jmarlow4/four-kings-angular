import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnsContainerComponent } from './columns-container/columns-container.component';
import { CardColumnComponent } from './card-column/card-column.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [ColumnsContainerComponent, CardColumnComponent, CardComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
