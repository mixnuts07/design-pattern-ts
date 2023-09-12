// Strategy (ストラテジー): アルゴリズムをカプセル化し、それらを交換可能な形で提供するパターン。
// ...　実行時に異なるアルゴリズムを選択でき、オブジェクトの振る舞いを変更できる。
// ... 具体的には、
// 使用例
// ...
// ...
// ...
// ...
// ...
// 問題点
// ...
// ...
// ...

// Strategy Interface
interface PaymentStrategy {
  pay(amount: number): void;
}

// Concrete Strategy Class
class CreditCardPayment implements PaymentStrategy {
  constructor(private cardNumber: string) {}

  pay(amount: number): void {
    console.log(`Paid $${amount} with credit card ${this.cardNumber}`);
  }
}

class PayPalPayment implements PaymentStrategy {
  constructor(private email: string) {}

  pay(amount: number): void {
    console.log(`Paid $${amount} with PayPal account ${this.email}`);
  }
}

// Context Class
class ShoppingCart {
  private paymentStrategy: PaymentStrategy | null;

  constructor() {
    this.paymentStrategy = null;
  }

  setPaymentStrategy(strategy: PaymentStrategy): void {
    this.paymentStrategy = strategy;
  }

  checkout(amount: number): void {
    if (this.paymentStrategy === null) {
      console.log("Please Select A Payment Method");
    } else {
      this.paymentStrategy.pay(amount);
    }
  }
}

// Client Code
const cart = new ShoppingCart();

cart.setPaymentStrategy(new CreditCardPayment("1234-5678-9012-3456"));
cart.checkout(100); // Paid $100 with credit card 1234-5678-9012-3456

cart.setPaymentStrategy(new PayPalPayment("user@example.com"));
cart.checkout(50); // Paid $50 with PayPal account user@example.com
