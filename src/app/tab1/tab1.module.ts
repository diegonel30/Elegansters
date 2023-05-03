import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { HttpClientModule } from '@angular/common/http';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,HttpClientModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {
  productos: any = [];
  constructor() {
    // Inicialización de la variable productos
    this.productos = [
      {
        "titulo": "Camiseta Negra",
        "descripcion": "Descripción del producto 1",
        "imagen": "/assets/img/camiseta.png"
      },
      {
        "titulo": "Camiseta Azul",
        "descripcion": "Descripción del producto 2",
        "imagen": "assets/img/camiseta1.png"
      },
      {
        "titulo": "Camiseta Azul",
        "descripcion": "Descripción del producto 3",
        "imagen": "assets/img/camiseta1.png"
        
      },
      {
        "titulo": "Camiseta Negra ",
        "descripcion": "Descripción del producto 3",
        "imagen": "/assets/img/camiseta.png"
        
      }
    ];
  }
}
