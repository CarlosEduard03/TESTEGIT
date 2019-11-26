var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
///<reference path="pessoa.ts" />
var hospital;
(function (hospital) {
    var enfermeiro = /** @class */ (function (_super) {
        __extends(enfermeiro, _super);
        function enfermeiro() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        enfermeiro.prototype.getCoren = function () {
            return this._coren;
        };
        enfermeiro.prototype.setCoren = function (coren) {
            this._coren = coren;
        };
        return enfermeiro;
    }(hospital.Pessoa));
    hospital.enfermeiro = enfermeiro;
})(hospital || (hospital = {}));
