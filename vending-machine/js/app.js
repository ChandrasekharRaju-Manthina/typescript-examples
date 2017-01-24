var Quarter = (function () {
    function Quarter() {
        this.value = .25;
    }
    Object.defineProperty(Quarter.prototype, "Value", {
        get: function () {
            return this.value;
        },
        set: function (newValue) {
            this.value = newValue;
        },
        enumerable: true,
        configurable: true
    });
    Quarter.prototype.getImageUrl = function () {
        return "img/quarter.jpeg";
    };
    return Quarter;
}());
var coin = new Quarter();
var value = coin.Value;
coin.Value = 25;
var VendingMachine = (function () {
    function VendingMachine() {
        var _this = this;
        this.paid = ko.observable(0);
        this.acceptedCoins = [new Quarter()];
        this.acceptCoin = function (coin) {
            var oldTotal = _this.paid();
            _this.paid(oldTotal + coin.Value);
        };
    }
    return VendingMachine;
}());
var machine = new VendingMachine();
ko.applyBindings(machine);
var HelloWorld = (function () {
    function HelloWorld() {
    }
    return HelloWorld;
}());
//# sourceMappingURL=app.js.map