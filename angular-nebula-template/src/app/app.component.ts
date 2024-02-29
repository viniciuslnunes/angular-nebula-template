import { Component } from '@angular/core';
import { NbThemeModule, NbThemeService } from '@nebular/theme';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router'; // we also need angular router for Nebular to function properly
import { NbSidebarModule, NbLayoutModule, NbButtonModule } from '@nebular/theme';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NbThemeModule,  NbSidebarModule, NbLayoutModule, NbButtonModule],
  providers: [NbThemeService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private themeService: NbThemeService) {}
  title = 'angular-nebula-template';
}
