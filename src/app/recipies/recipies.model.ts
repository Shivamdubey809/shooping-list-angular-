export class Recipie {
    public name : string;
    public description : string;
    public imgFilePath: string;
    
    constructor(name:string,desc:string,imgFilePath:string){
        this.name = name;
        this.description = desc;
        this.imgFilePath = imgFilePath;

    }
}