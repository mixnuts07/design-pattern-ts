// Observer (オブザーバー): 状態の変化を監視し、変化時に通知を受け取る。
// ... オブジェクトの状態が変わったときに他の依存するオブジェクトに自動的に通知・更新を行う。
// ... 状態変化をもつオブジェクトとそれを監視するオブジェクトの間の依存関係を定義するために使用する。
// ... 具体的には、状態変化があるとすぐに複数のオブジェクトにそれを伝える必要がある場合や、特定のオブジェクトの状態の変更に応じて何らかの処理を行いたい場合に特に有用
// 使用例
// ...
// ...
// ...
// ...
// 問題点
// ...
// ...
// ...

// Observer Class
interface Observer {
  update(state: any): void;
}

// Subject Class
class Subject {
  private observers: Observer[] = [];
  private state: number;

  getState(): number {
    return this.state;
  }

  setState(state: number): void {
    this.state = state;
    this.notifyAllObservers();
  }

  attach(observer: Observer): void {
    this.observers.push(observer);
  }

  notifyAllObservers(): void {
    for (let observer of this.observers) {
      observer.update(this.state);
    }
  }
}

// Concrete Observer Class
class ConcreteObserver implements Observer {
  private subject: Subject;
  private id: number;
  private static staticNumber = 1;

  constructor(subject: Subject) {
    this.subject = subject;
    this.id = ConcreteObserver.staticNumber++;
    subject.attach(this);
  }

  update(state: number): void {
    console.log(`Observer ${this.id} updated with state: ${state}`);
  }
}

// クライアントコード
const subject = new Subject();

const observer1 = new ConcreteObserver(subject);
const observer2 = new ConcreteObserver(subject);
const observer3 = new ConcreteObserver(subject);

console.log("Setting state to 15.");
subject.setState(15);
// Observer 1 updated with state: 15
// Observer 2 updated with state: 15
// Observer 3 updated with state: 15

console.log("Setting state to 10.");
subject.setState(10);
// Observer 1 updated with state: 10
// Observer 2 updated with state: 10
// Observer 3 updated with state: 10
