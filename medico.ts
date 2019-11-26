///<reference path="pessoa.ts" />

namespace hospital{
export class Medico extends Pessoa{
    private _crm:number;
    private _especialidade:string;

    public setCrm(crm:number){
       this._crm = crm;
    }
    public getCrm(){
        return this._crm;
    }
    public setEspecialidade(especialidade:string){
        this._especialidade = especialidade;
    }
    public  getEspecialidade(){
        return this._especialidade;
    }






}
}