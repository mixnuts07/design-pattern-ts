// Bridge
// ... 抽象化と実装を分離し、それらを独立に変更できる様にする。クラスの機能拡張と実装の変更を容易にするために使用している。
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

// 実装部分のインターフェース
interface Implementor {
  operationImpl(): string;
}

// 具体的な実装A
class ConcreteImplementorA implements Implementor {
  operationImpl(): string {
    return "ConcreteImplementorA";
  }
}

// 具体的な実装B
class ConcreteImplementorB implements Implementor {
  operationImpl(): string {
    return "ConcreteImplementorB";
  }
}

// 抽象部分
abstract class Abstraction {
  protected implementor: Implementor;

  constructor(implementor: Implementor) {
    this.implementor = implementor;
  }

  public operator(): string {
    return `Abstraction Base operation with: ${this.implementor.operationImpl()}`;
  }
}

// 派生した抽象部分
class RefinedAbstraction extends Abstraction {
  public operation(): string {
    return `RefinedAbstraction: Refined operation with: ${this.implementor.operationImpl()}`;
  }
}

// クライアントコード
function clientCode(abstraction: Abstraction) {
  console.log(abstraction.operator());
}

const implementationA = new ConcreteImplementorA();
const abstraction1 = new RefinedAbstraction(implementationA);
clientCode(abstraction1); // Output: "RefinedAbstraction: Refined operation with: ConcreteImplementorA"

const implementationB = new ConcreteImplementorB();
const abstraction2 = new RefinedAbstraction(implementationB);
clientCode(abstraction2); // Output: "RefinedAbstraction: Refined operation with: ConcreteImplementorB"
