// Factory Method
// ... オブジェクトのインスタンス化の過程をサブクラスに委譲する。
// ... 具体的には、クラスが具体的なクラスを知らなくても、そのインスタンスを生成するためのインターフェースを提供することができる。
// ... システムの拡張性が向上する
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

interface Product {
  operation(): string;
}

class ConcreteProductA implements Product {
  operation(): string {
    return "Result of ConcreteProductA";
  }
}

class ConcreteProductB implements Product {
  operation(): string {
    return "Result of ConcreteProductB";
  }
}
// abstractクラス。このクラスがFactory Methodを持っている。
abstract class Creator {
  // Factory Method
  abstract factoryMethod(): Product;
  // Factory Methodを呼び出して、Productを作成
  public someOperation(): string {
    const product = this.factoryMethod();
    return `Creator: The same creator's code has just worked with ${product.operation()}`;
  }
}
// 具体的なCreator。Factory Methodをオーバーライドして具体的なProductを探す
class ConcreteCreatorA extends Creator {
  factoryMethod(): Product {
    return new ConcreteProductA();
  }
}
class ConcreteCreatorB extends Creator {
  factoryMethod(): Product {
    return new ConcreteProductB();
  }
}
// 使用例
function clientCode(creator: Creator) {
  console.log(creator.someOperation());
}
const creator1 = new ConcreteCreatorA();
clientCode(creator1); // `Creator: The same creator's code has just worked with Result of ConcreteProductA`
const creator2 = new ConcreteCreatorB();
clientCode(creator2); // `Creator: The same creator's code has just worked with Result of ConcreteProductB`
