import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { Producto } from "../../interfaces/Producto";
@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {

  producto:Producto={
    id:0,
    name:"",
    price:0,
    description:"",
    photo_url:""
  };

  constructor(private prdServ:ProductosService, private route:ActivatedRoute) { 

    const id = this.route.snapshot.paramMap.get("id")
    console.log("id",id)
    this.prdServ.getById(id)
    .subscribe(data=>{
      console.log(data);
      this.producto.id=data[0].id;
      this.producto.name=data[0].name;
      this.producto.price=data[0].price;
      this.producto.description=data[0].description;
      this.producto.photo_url=data[0].photo_url;
    })

  }

  recargar(){
    alert("reload"); 
  }

  ngOnInit(): void {
  }

}
 