"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var oops_1 = require("./oops");
var Compay = /** @class */ (function (_super) {
    __extends(Compay, _super);
    function Compay(f, s, p, lo, sts, comp, gt, state, areas) {
        var _this = _super.call(this, f, s, p, lo, sts) || this;
        _this.cname = comp;
        _this.gstno = gt;
        _this.state = state;
        _this.area = areas;
        return _this;
    }
    Compay.prototype.persondetails = function () {
        return ("Company name ==]".concat(this.cname, ", gstnumber= ").concat(this.gstno, ", state= ").concat(this.state, ", area= ").concat(this.area));
    };
    return Compay;
}(oops_1.default));
var company = new Compay("basil", "ahamed", 7397061751, "swizerland", true, "changepond technology", 43242344242, "tamil nadu", "chennai");
console.log(company.personaldetails());
console.log(company.gstno);
console.log(company.persondetails());
console.log(company.Firstname);
