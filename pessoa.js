var hospital;
(function (hospital) {
    var Pessoa = /** @class */ (function () {
        function Pessoa() {
        }
        Pessoa.prototype.setNome = function (nome) {
            return this._nome;
        };
        Pessoa.prototype.getNome = function () {
            return this._nome;
        };
        Pessoa.prototype.setCpf = function (cpf) {
            this._cpf = cpf;
        };
        Pessoa.prototype.getCpf = function () {
            return this._cpf;
        };
        return Pessoa;
    }());
    hospital.Pessoa = Pessoa;
})(hospital || (hospital = {}));
