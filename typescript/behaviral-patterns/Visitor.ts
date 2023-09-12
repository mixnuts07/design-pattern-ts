// Visitor (ビジター): オブジェクトの操作を表現するオペレーションを追加する。
// ...　オブジェクトの構造の要素に対する新しい操作を追加することを容易にするためのパターン。
// ...　これを実現するために、操作をオブジェクト構造のクラスから独立したクラスに分離します。
// ... 具体的には、新しい操作を追加するのが簡単。オブジェクト構造を実装する新しい訪問者クラスを簡単に追加できる。
// 使用例
// ...
// ...
// ...
// ...
// 問題点
// ...
// ...
// ...

// Elementインターフェース
interface Element {
  accept(visitor: Visitor): void;
}

// ConcreteElementクラス
class ConcreteElementA implements Element {
  accept(visitor: Visitor): void {
    visitor.visitConcreteElementA(this);
  }

  operationA(): void {
    console.log("ConcreteElementA operation");
  }
}

class ConcreteElementB implements Element {
  accept(visitor: Visitor): void {
    visitor.visitConcreteElementB(this);
  }

  operationB(): void {
    console.log("ConcreteElementB operation");
  }
}

// Visitorインターフェース
interface Visitor {
  visitConcreteElementA(concreteElementA: ConcreteElementA): void;
  visitConcreteElementB(concreteElementB: ConcreteElementB): void;
}

// ConcreteVisitorクラス
class ConcreteVisitor1 implements Visitor {
  visitConcreteElementA(concreteElementA: ConcreteElementA): void {
    console.log("ConcreteVisitor1 visiting ConcreteElementA");
    concreteElementA.operationA();
  }

  visitConcreteElementB(concreteElementB: ConcreteElementB): void {
    console.log("ConcreteVisitor1 visiting ConcreteElementB");
    concreteElementB.operationB();
  }
}

class ConcreteVisitor2 implements Visitor {
  visitConcreteElementA(concreteElementA: ConcreteElementA): void {
    console.log("ConcreteVisitor2 visiting ConcreteElementA");
  }

  visitConcreteElementB(concreteElementB: ConcreteElementB): void {
    console.log("ConcreteVisitor2 visiting ConcreteElementB");
  }
}

// クライアントコード
const elements: Element[] = [new ConcreteElementA(), new ConcreteElementB()];

const visitor1: Visitor = new ConcreteVisitor1();
for (const element of elements) {
  element.accept(visitor1);
}

const visitor2: Visitor = new ConcreteVisitor2();
for (const element of elements) {
  element.accept(visitor2);
}
