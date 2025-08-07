//order 1
class Order {
    orderID: string;
    customerName: string;
    items: {
        name: string;
        price: number;
        amount: number;
        discount: number;
    }[] = [];
    totalAmount: number = 0;

    constructor(orderID: string, customerName: string) {
        this.orderID = orderID;
        this.customerName = customerName;
    }

    addItem(item: { name: string; price: number; amount: number; discount: number }) {
        this.items.push(item);
        console.log(`Đã thêm sản phẩm: 
                    name: ${item.name}
                    price: ${item.price}
                    amount: ${item.amount}
                    discount: ${item.discount}`)

    }
    calculateTotal(): number {
        let total = 0;
        for (let i = 0; i < this.items.length; i++) {
            let numberProduct = this.items[i];
            let totalAfterDiscount = numberProduct.price * (1 - numberProduct.discount / 100);
            let totalAfterAmount = totalAfterDiscount * numberProduct.amount;
            total += totalAfterAmount;
        }
        this.totalAmount = total;
        return total;

    }
    displayOrder() {
        console.log(` Đơn hàng ${this.orderID}`);
        console.log(` Tên khách hàng: ${this.customerName}`);
        console.log(" Danh sách sản phẩm:");

        this.items.forEach((item, index) => {
            console.log(
                `  ${index + 1}. ${item.name} - Giá: ${item.price}đ - SL: ${item.amount} - Giảm: ${item.discount}%`
            );
        });
        

        console.log(` Tổng tiền: ${this.calculateTotal()}đ`);
    }
}

let order = new Order("AA2003", "HO ANH TU");
let product1 = {
    name: "Rau Xà Lách",
    price: 5000,
    amount: 2,
    discount: 10
};

let product2 = {
    name: "Cá Hồi Nauy",
    price: 200000,
    amount: 1,
    discount: 20
};

order.addItem(product1);
order.addItem(product2);
order.displayOrder();
