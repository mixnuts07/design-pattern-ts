// Mediator (メディエーター): オブジェクトの相互作用の集中化。オブジェクト間の通信をカプセル化することで、クラス間の直接の依存関係を削減し、疎結合を促進する
// ...　これにより、オブジェクト間の通信を整理し、独立性を維持するのに役立つ。
// ... 具体的には、複雑なGUIやシステム間の相互作用が多い場合に、コードの組織と疎結合を維持するのに役立つ。
// 使用例... この例では、Component1 と Component2 が互いに通信する必要があるが、直接通信せず、ConcreteMediator を介して通信しする。
// これにより、各コンポーネントの独立性が維持され、再利用が容易になる。
// ...
// ...
// ...
// ...
// ...
// 問題点
// ...
// ...
// ...

// Mediator Interface
interface Mediator {
  notify(sender: BaseComponent, event: string): void;
}

// Base Component Class
class BaseComponent {
  protected mediator: Mediator;

  constructor(mediator: Mediator) {
    this.mediator = mediator;
  }

  setMediator(mediator: Mediator) {
    this.mediator = mediator;
  }
}

// Concrete Component Class
class Component1 extends BaseComponent {
  doA(): void {
    console.log("Component1 does A.");
    this.mediator.notify(this, "A");
  }
  doB(): void {
    console.log("Component1 does B.");
  }
}

// Concrete Component Class
class Component2 extends BaseComponent {
  doC(): void {
    console.log("Component2 does C.");
  }

  doD(): void {
    console.log("Component2 does D.");
  }
}

// Concrete Mediator Class
class ConcreteMediator implements Mediator {
  private component1: Component1;
  private component2: Component2;

  constructor(c1: Component1, c2: Component2) {
    this.component1 = c1;
    this.component1.setMediator(this);
    this.component2 = c2;
    this.component2.setMediator(this);
  }

  notify(sender: BaseComponent, event: string): void {
    if (event === "A") {
      console.log("Mediator reacts on A and triggers:");
      this.component2.doD();
    }

    if (event === "D") {
      console.log("Mediator reacts on D and triggers:");
      this.component1.doB();
    }
  }
}

// Client Code
const c1 = new Component1();
const c2 = new Component2();
const mediator = new ConcreteMediator(c1, c2);

console.log("Client triggers operation A.");
c1.doA();

console.log("\nClient triggers operation C.");
c2.doC();
