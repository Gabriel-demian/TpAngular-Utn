export interface Producto{
    id:number;
    name:string;
    price:number;
    description:string;
    photo_url:string;
    categorias?:{
        [k:string]:string;
    }
}