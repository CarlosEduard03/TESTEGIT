///<reference path="pessoa.ts" />
namespace hospital{
export class enfermeiro extends Pessoa{
    public _coren:number;

    public getCoren(){
        return this._coren;
    }
    public setCoren(coren:number){
        this._coren = coren;
    }
    }
}