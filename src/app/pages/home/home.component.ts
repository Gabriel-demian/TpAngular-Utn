import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit { 
  //Variables de clase
  productos:any = []; 
  productos_async;

  constructor(private prdServ:ProductosService) { 

    this.productos_async = this.prdServ.getAll();

  }

  filtrar(){
    this. productos=[];
  }

  ngOnInit(): void {
  }

}
