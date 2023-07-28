import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductService } from './services/product.service';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProductDetailComponentComponent } from './components/product-detail-component/product-detail-component.component';

@NgModule({
  declarations: [AppComponent, ProductListComponent, NavBarComponent, ProductDetailComponentComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
