namespace hospital{
    export abstract class Pessoa{
        private _nome: string;
        private _cpf:string;

        public setNome(nome:string){
            return  this._nome;
        }
        public getNome(){
           return this._nome;
        }
        public setCpf(cpf:string){
            this._cpf = cpf;
        }
        public getCpf(){
            return this._cpf;
        }
    }
}