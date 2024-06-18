export class Book {
    id?:number;
    author:string;
    title:string;
    description:string;
    condition:string;
    available:boolean;
    isbn:string;
    url_image:string;
    ownerId?:number;
    requested?: boolean; 
}

export enum BookCondition{
    NUEVO = 'Nuevo',
    USADO = 'Usado',
    MUY_USADO = 'Muy usado',
    BASTANTE_USADO = 'Bastante usado'
}

