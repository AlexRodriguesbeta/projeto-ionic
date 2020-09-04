import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { 
    path: 'pagina2', 
    loadChildren: './pagina2/pagina2.module#Pagina2PageModule' },
  { 
    path: 'grids', 
    loadChildren: './grids/grids.module#GridsPageModule' 
  },
  { 
    path: 'tabs', 
    loadChildren: './tabs/tabs.module#TabsPageModule' 
  },
  { 
    path: 'tab1', 
    loadChildren: './tab1/tab1.module#Tab1PageModule' 
  },
  { 
    path: 'tab2', 
    loadChildren: './tab2/tab2.module#Tab2PageModule' 
  },
  { 
    path: 'tab3', 
    loadChildren: './tab3/tab3.module#Tab3PageModule'
   },
  { 
    path: 'actionsheet', 
    loadChildren: './actionsheet/actionsheet.module#ActionsheetPageModule'
   },
  {
     path: 'alert', 
     loadChildren: './alert/alert.module#AlertPageModule' 
  },
  { 
    path: 'buttons', 
    loadChildren: './buttons/buttons.module#ButtonsPageModule' 
  },
  { 
    path: 'check-radio',
     loadChildren: './check-radio/check-radio.module#CheckRadioPageModule'
  },
  { 
    path: 'datetime', 
    loadChildren: './datetime/datetime.module#DatetimePageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
