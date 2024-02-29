import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { NbThemeModule, DEFAULT_THEME } from '@nebular/theme';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { NbSidebarModule, NbLayoutModule, NbButtonModule } from '@nebular/theme';

enableProdMode();

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      NbSidebarModule.forRoot(),
      NbLayoutModule,
      NbButtonModule,
      NbThemeModule.forRoot({ name: 'default' }, [ DEFAULT_THEME ])
    ),
  ],
}).catch(err => console.error(err));