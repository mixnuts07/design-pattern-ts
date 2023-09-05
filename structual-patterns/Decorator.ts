// Decorator ... 動的に責任を追加する。
// ...　オブジェクトに動的に新しい機能を追加する。
// ...　既存のコードを修正することなくオブジェクトの挙動を拡張できる。
// ...
// ...
// ... 具体的には、サブクラスを大量に生成する必要があるときの代替手段。
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

// Component Interface
interface Coffee {
  cost(): number;
  description(): string;
}

// 具体的なコンポーネント
class SimpleCoffee implements Coffee {
  cost(): number {
    return 5;
  }

  description(): string {
    return "Simple Coffee";
  }
}

// Decoratorの基底クラス
class CoffeeDecorator implements Coffee {
  constructor(private coffee: Coffee) {}

  cost(): number {
    return this.coffee.cost();
  }

  description(): string {
    return this.coffee.description();
  }
}

// 具体的なDecorator(1)
class MilkDecorator extends CoffeeDecorator {
  cost(): number {
    return super.cost() + 2;
  }

  description(): string {
    return super.description() + `, milk`;
  }
}

// 具体的なDecorator(2)
class SugarDecorator extends CoffeeDecorator {
  cost(): number {
    return super.cost() + 1;
  }

  description(): string {
    return super.description() + `, sugar`;
  }
}

// Client Code
const simpleCoffee = new SimpleCoffee();
console.log(
  `Cost: ${simpleCoffee.cost()} Description: ${simpleCoffee.description()}`
);

const milkCoffee = new MilkDecorator(simpleCoffee);
console.log(
  `Cost: ${milkCoffee.cost()} Description: ${milkCoffee.description()}`
);

const sugarMilkCoffee = new SugarDecorator(milkCoffee);
console.log(
  `Cost: ${sugarMilkCoffee.cost()} Description: ${sugarMilkCoffee.description()}`
);
