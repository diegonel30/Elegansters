import { Component } from '@angular/core';
import { Tab1PageModule } from './tab1.module';

declare const encodeURIComponent: (input: string) => string;


@Component({
  selector: 'app-tab1',
  templateUrl:'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  productos: any;

  constructor(private tab1Module: Tab1PageModule) {
    this.productos = tab1Module.productos;
  }

}
