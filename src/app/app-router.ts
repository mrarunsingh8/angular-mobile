import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FaqComponent } from './faq/faq.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

export const AppRoutes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'about', component: AboutUsComponent},
	{path: 'faq', component: FaqComponent},
	{path: 'contact-us', component: ContactUsComponent},
]