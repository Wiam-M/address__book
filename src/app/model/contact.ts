export class Contact{
    constructor( 
     public id: number ,
     public firstName : string,
     public lastName: string,
     public birthDate : string,
     public phone : string,
     public address: Adress
    ){}
}
export class Adress {
constructor(
    public workHomeAddress : string,
    public streetNumber: number,
    public street : string,
    public city : string,
    public postalCode : number,
    public country : string,
    public remark: string
){}
}