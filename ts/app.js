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
var myname = "tornike";
var x = 11;
var arr = ["T", "O", "K", "O"];
var a = "toko";
var user = {
    name: "admin",
    age: 23,
    role: "momxmarebeli",
    test: function () {
        return true;
    }
};
var logoobj = {
    errorlog: "home/bin/www/pulbic_html/index.php",
    successlog: "home.php",
    data: 2022,
    savelog: function () {
        return "toookkooo";
    }
};
logoobj.savelog();
function sm(name) {
    console.log("toookkooo");
}
sm("tkkkk");
sm(1995);
sm(true);
console.log(user);
var input = document.querySelector("#inputt");
input.addEventListener("input", function () {
    console.log(input.value);
});
var Car = /** @class */ (function () {
    function Car(carname) {
        this.carname = carname;
    }
    Car.prototype.getName = function () {
        return this.carname;
    };
    return Car;
}());
var mark = /** @class */ (function (_super) {
    __extends(mark, _super);
    function mark(carname) {
        return _super.call(this, carname) || this;
    }
    mark.prototype.Getmark = function () {
        return _super.prototype.getName.call(this);
    };
    return mark;
}(Car));
var carr = new Car("Mercedes");
