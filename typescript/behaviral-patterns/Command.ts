// Command ... 要求をオブジェクトとしてカプセル化する。
// ...　パラメータを持つ手続きをオブジェクトとして表現でき、それを変更することなくコードを再利用したり、操作・ロールバック・ロギングなどを容易に追加できる。
// ... 具体的には、
// 使用例
// ... GUIのショートカット、マクロ、UNDOの操作、スケジューリング
// ...
// ...
// ...
// ...
// 問題点
// ...
// ...
// ...

// Command Interface
interface Command {
  execute(): void;
  undo(): void;
}

// Receive Class (具体的な操作を知っているクラス)
class Light {
  turnOn() {
    console.log(`The light is on`);
  }

  turnOff() {
    console.log(`The light is off`);
  }
}

// ConcreteCommand Class （実際の操作をカプセル化している）
class TurnOnLightCommand implements Command {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.turnOn();
  }

  undo(): void {
    this.light.turnOff();
  }
}

// ConcreteCommand Class　（実際の操作をカプセル化している）
class TurnOffLightCommand implements Command {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.turnOff();
  }

  undo(): void {
    this.light.turnOn();
  }
}

// Invoke Class　（なんらかの方法でCommandオブジェクトを受け取り、メソッドを通じてそれを実行したり取り消ししたりする）
class RemoteControl {
  private command: Command | null = null;

  setCommand(command: Command) {
    this.command = command;
  }

  pressButton() {
    if (this.command) {
      this.command.execute();
    }
  }

  undoButton() {
    if (this.command) {
      this.command.undo();
    }
  }
}

// Client Code
const light = new Light();
const turnOnCommand = new TurnOnLightCommand(light);
const turnOffCommand = new TurnOffLightCommand(light);

const remote = new RemoteControl();
remote.setCommand(turnOnCommand);
remote.pressButton(); // Output: The light is on

remote.setCommand(turnOffCommand);
remote.pressButton(); // Output: The light is off

remote.undoButton(); // Output: The light is on
