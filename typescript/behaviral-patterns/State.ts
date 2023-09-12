// State (ステート): オブジェクトの内部状態に応じて動作を変更。
// ... オブジェクトの内部状態が変わったときにオブジェクトの振る舞いを変更するパターン
// ... オブジェクトは自分のクラスを変更する様に見える
// ... 具体的には、
// 使用例
// ... 状態遷移のロジックをきれいに保つことができる
// ...
// ...
// ...
// 問題点
// ...
// ...
// ...

// State Interface
interface State {
  handle(context: Context): void;
}

// Concrete State Class
class ConcreteStateA implements State {
  handle(context: Context): void {
    console.log("Handling State A.");
    context.setState(new ConcreteStateB());
  }
}

// Concrete State Class
class ConcreteStateB implements State {
  handle(context: Context): void {
    console.log("Handling State B.");
    context.setState(new ConcreteStateA());
  }
}

// Contest Class
class Context {
  private state: State;

  constructor(state: State) {
    this.setState(state);
  }

  setState(state: State) {
    this.state = state;
  }

  request(): void {
    this.state.handle(this);
  }
}

// Client Code
const context = new Context(new ConcreteStateA());

context.request(); // Handling state A.
context.request(); // Handling state B.
context.request(); // Handling state A.
