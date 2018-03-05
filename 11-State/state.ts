interface State{
    order:Order;

    cancelOrder();
    verifyPayment();
    shipOrder();
}

class Order{
    cancelledOrderState : State;
    paymentPendingState : State;
    orderShippedState : State;
    orderBeingPreparedState : State;

    currentState : State;

    constructor(){
        this.cancelledOrderState=new CancelledOrder(this);
        this.paymentPendingState=new PaymentPending(this);
        this.orderShippedState=new OrderBeingShipped(this);
        this.orderBeingPreparedState=new OrderBeingPrepared(this);

        this.setState(this.paymentPendingState);
    }

    setState(state:State){
        this.currentState=state;
    }
    getState():State{
        return this.currentState;
    }
}

class PaymentPending implements State {
    order: Order;
    constructor(order:Order){
        this.order=order;
    }
    cancelOrder() {
        console.log('Cancel your unpaid order.');
        this.order.setState(this.order.cancelledOrderState);
    }
    verifyPayment() {
        console.log('Verify your payment, we will ship the product soon');
        this.order.setState(this.order.orderBeingPreparedState);
    }
    shipOrder() {
        console.log('Cannot ship unpaid product.');
        this.order.setState(this.order.orderShippedState);
    }
}
class CancelledOrder implements State {
    order: Order;
    constructor(order:Order){
        this.order=order;
    }
    cancelOrder() {
        console.log('The order has already being cancelled.');
    }
    verifyPayment() {
        console.log('You cannot confirm a cancelled order.');
    }
    shipOrder() {
        console.log('We cannot shipped a cancelled order.');
    }
}
class OrderBeingPrepared implements State {
    order: Order;
    constructor(order:Order){
        this.order=order;
    }
    cancelOrder() {
        console.log('Cancelling your order...');
        this.order.setState(this.order.cancelledOrderState);
    }
    verifyPayment() {
        console.log('Payment already verified...');
    }
    shipOrder() {
        console.log('Shipping your order now');
        this.order.setState(this.order.orderShippedState);
    }
}
class OrderBeingShipped implements State {
    order: Order;
    constructor(order:Order){
        this.order=order;
    }
    cancelOrder() {
        console.log('Order already Shipped you canno cancel it.');
    }
    verifyPayment() {
        console.log('Payment already verified...');
    }
    shipOrder() {
        console.log('The product already shipped!');
    }
}

let order = new Order();
order.getState().verifyPayment();
order.getState().verifyPayment();
order.getState().shipOrder();
order.getState().cancelOrder();
console.log("Order State is: " + (<any> order.getState()).constructor.name);