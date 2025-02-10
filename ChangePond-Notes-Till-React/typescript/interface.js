var Result = /** @class */ (function () {
    function Result(a, b, c) {
        this.python = a;
        this.java = b;
        this.typescript = c;
    }
    Result.prototype.totalmark = function () {
        return this.total = this.python + this.java + this.typescript;
    };
    Result.prototype.percentage = function () {
        return (this.total / 600) * 100;
    };
    Result.prototype.studentresulr = function () {
        console.log("python: ".concat(this.python));
        console.log("python: ".concat(this.java));
        console.log("python: ".concat(this.typescript));
        console.log("python: ".concat(this.totalmark()));
        console.log("python: ".concat(this.percentage()));
    };
    return Result;
}());
var studentOBJ = new Result(170, 123, 200);
studentOBJ.studentresulr();
