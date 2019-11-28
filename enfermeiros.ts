///<reference path="pessoa.ts" />
namespace hospital{
export class enfermeiro extends Funcionario{
    private _coren:number;



    public getCoren(){
        return this._coren;
    }
    public setHospital(coren:number){
        this._coren = coren;
    }
    
    }
}