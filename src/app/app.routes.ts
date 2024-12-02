import { Routes } from '@angular/router';
import { isAuthenticatedGuard } from './shared/guards/auth.guard';
import { AcceuilComponent } from './home/acceuil/acceuil.component';
import { AboutComponent } from './home/about/about.component';
import { SeriesComponent } from './home/series/series.component';
import { ContactComponent } from './home/contact/contact.component';
import { TermsComponent } from './home/terms/terms.component';
import { PrivacyComponent } from './home/privacy/privacy.component';
import { ActorComponent } from './home/actor/actor.component';
import { TvComponent } from './home/tv/tv.component';
import { ContactsComponent } from './home/contacts/contacts.component';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes').then((m) => m.AUTH_ROUTES),
  },
  {
    path: 'home',
    canActivate: [isAuthenticatedGuard()],
    loadComponent: () => import('./home/home.component'),
    children: [
      { path: '', component: AcceuilComponent },
      { path: 'seriesmod', component: AboutComponent },
      { path: 'episodes', component: SeriesComponent },
      { path: 'seriesmot', component: ContactComponent },
      { path: 'terms', component: TermsComponent },
      { path: 'privacy', component: PrivacyComponent },
      { path: 'actor', component: ActorComponent },
      { path: 'tv', component: TvComponent },
      { path: 'contacts', component: ContactsComponent },
    ],
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
];

