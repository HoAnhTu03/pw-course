//customer
class Customer {
    id: string;
    name: string;
    email: string;
    phone: number;

    constructor(id: string, name: string, email: string, phone: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    displayInfo() {
        console.log(`Thông tin khách hàng:`);
        console.log(`ID: ${this.id}`)
        console.log(`Name: ${this.name}`)
        console.log(`Email: ${this.email}`)
        console.log(`Phone: ${this.phone}`)
    }
    updateEmail(newEmail: string) {
        this.email = newEmail;
        console.log(`Email được cập nhật mới: ${this.email}`)
    }

}
let customer1 = new Customer("A03", "ANH TU", "anhtudz2k03@gmail.com",0865841203)
customer1.displayInfo(customer1);
customer1.updateEmail("newemail@gmail.com")