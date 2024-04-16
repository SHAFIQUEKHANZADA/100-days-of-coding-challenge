"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cls = void 0;
var cls = /** @class */ (function () {
    function cls(x) {
        this.name = x;
    }
    cls.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name));
    };
    return cls;
}());
exports.cls = cls;
