var customer = /** @class */ (function () {
    function customer() {
        this.customerName = "";
    }
    customer.prototype.validate = function () {
        alert("Test");
        return true;
    };
    return customer;
}());
var myName = "Tousif";
var myAge = 24;
var canVote = true;
var anything = "cat";
anything = 2;
