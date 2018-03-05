var Order = /** @class */ (function () {
    function Order() {
        this.cancelledOrderState = new CancelledOrder(this);
        this.paymentPendingState = new PaymentPending(this);
        this.orderShippedState = new OrderBeingShipped(this);
        this.orderBeingPreparedState = new OrderBeingPrepared(this);
        this.setState(this.paymentPendingState);
    }
    Order.prototype.setState = function (state) {
        this.currentState = state;
    };
    Order.prototype.getState = function () {
        return this.currentState;
    };
    return Order;
}());
var PaymentPending = /** @class */ (function () {
    function PaymentPending(order) {
        this.order = order;
    }
    PaymentPending.prototype.cancelOrder = function () {
        console.log('Cancel your unpaid order.');
        this.order.setState(this.order.cancelledOrderState);
    };
    PaymentPending.prototype.verifyPayment = function () {
        console.log('Verify your payment, we will ship the product soon');
        this.order.setState(this.order.orderBeingPreparedState);
    };
    PaymentPending.prototype.shipOrder = function () {
        console.log('Cannot ship unpaid product.');
        this.order.setState(this.order.orderShippedState);
    };
    return PaymentPending;
}());
var CancelledOrder = /** @class */ (function () {
    function CancelledOrder(order) {
        this.order = order;
    }
    CancelledOrder.prototype.cancelOrder = function () {
        console.log('The order has already being cancelled.');
    };
    CancelledOrder.prototype.verifyPayment = function () {
        console.log('You cannot confirm a cancelled order.');
    };
    CancelledOrder.prototype.shipOrder = function () {
        console.log('We cannot shipped a cancelled order.');
    };
    return CancelledOrder;
}());
var OrderBeingPrepared = /** @class */ (function () {
    function OrderBeingPrepared(order) {
        this.order = order;
    }
    OrderBeingPrepared.prototype.cancelOrder = function () {
        console.log('Cancelling your order...');
        this.order.setState(this.order.cancelledOrderState);
    };
    OrderBeingPrepared.prototype.verifyPayment = function () {
        console.log('Payment already verified...');
    };
    OrderBeingPrepared.prototype.shipOrder = function () {
        console.log('Shipping your order now');
        this.order.setState(this.order.orderShippedState);
    };
    return OrderBeingPrepared;
}());
var OrderBeingShipped = /** @class */ (function () {
    function OrderBeingShipped(order) {
        this.order = order;
    }
    OrderBeingShipped.prototype.cancelOrder = function () {
        console.log('Order already Shipped you canno cancel it.');
    };
    OrderBeingShipped.prototype.verifyPayment = function () {
        console.log('Payment already verified...');
    };
    OrderBeingShipped.prototype.shipOrder = function () {
        console.log('The product already shipped!');
    };
    return OrderBeingShipped;
}());
var order = new Order();
order.getState().verifyPayment();
order.getState().verifyPayment();
order.getState().shipOrder();
order.getState().cancelOrder();
console.log("Order State is: " + order.getState().constructor.name);
