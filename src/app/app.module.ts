import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule, Store } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { InitAppEffects } from './state/init/init-app.effects';
import { initAppFactory } from './state/init/init-app.factory';
import { ServicesModule } from './services/services.module';
import { DrawCardEffects } from './state/draw-card/draw-card.effect';
import { ColumnsContainerComponent } from './components/columns-container/columns-container.component';
import { CardColumnComponent } from './components/card-column/card-column.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    ColumnsContainerComponent,
    CardColumnComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    ServicesModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([
      InitAppEffects,
      DrawCardEffects
    ])
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initAppFactory,
      deps: [Store],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
