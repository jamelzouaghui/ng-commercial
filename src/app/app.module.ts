import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';


import {FormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
 import { HttpModule } from '@angular/http';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
// Modal Component
import { ModalModule } from 'ngx-bootstrap/modal';

import { AuthGuard } from './_guards';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {PERFECT_SCROLLBAR_CONFIG} from 'ngx-perfect-scrollbar';
import {PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};

import {AppComponent} from './app.component';

// Import containers
import {DefaultLayoutComponent} from './containers';

import {LoginComponent} from './views/login/login.component';
import {RegisterComponent} from './views/register/register.component';

const APP_CONTAINERS = [
    DefaultLayoutComponent
];




import {
    AppAsideModule,
    AppBreadcrumbModule,
    AppHeaderModule,
    AppFooterModule,
    AppSidebarModule,
    
   
    
} from '@coreui/angular';

// Import routing module
import {AppRoutingModule} from './app.routing';

// Import 3rd party components
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {ChartsModule} from 'ng2-charts/ng2-charts';

import {UsersModule} from './views/users/users.module';





@NgModule({
    imports: [
        FormsModule,
        HttpClientModule,
        HttpModule,
        BrowserModule,
        AppRoutingModule,
        AppAsideModule,
        AppBreadcrumbModule.forRoot(),
        AppFooterModule,
        AppHeaderModule,
        AppSidebarModule,
        PerfectScrollbarModule,
        BsDropdownModule.forRoot(),
        TabsModule.forRoot(),
        ChartsModule,
        ModalModule,
        UsersModule,
        BsDatepickerModule.forRoot()
    ],
    declarations: [
        AppComponent,
        ...APP_CONTAINERS,
        LoginComponent,
        RegisterComponent,
//        PanelComponent
    ],
    providers: [
        AuthGuard,
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        },
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
        
        ],
        
    bootstrap: [AppComponent]
})
export class AppModule {}
