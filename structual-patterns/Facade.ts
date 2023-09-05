// Facade...シンプルなインターフェースで複雑なサブシステムをラップする
// ...　クライアントと複雑なサブシステム間の相互作用を簡素化し、依存関係を減らす役割を果たす。
// ... 具体的には、
// 使用例
// ...　内部の複雑性を隠蔽し、簡単なインターフェースを提供したいとき。
// ...
// ...
// ...
// ...
// 問題点
// ...
// ...
// ...

// 複雑なサブシステムのクラス群
class CPU {
  execute() {
    console.log("CPU executing...");
  }
}

class Memory {
  load() {
    console.log("Memory loading...");
  }
}

class HardDrive {
  read() {
    console.log("Hard drive reading...");
  }
}

// Facade Class
class ComputerFacade {
  private cpu: CPU;
  private memory: Memory;
  private hardDrive: HardDrive;

  constructor() {
    this.cpu = new CPU();
    this.memory = new Memory();
    this.hardDrive = new HardDrive();
  }
  // 単一の簡単なメソッドを定義。この中でさまざまなサブシステムのメソッドを呼び出す。
  start() {
    this.cpu.execute();
    this.memory.load();
    this.hardDrive.read();
    console.log("Computer Started...");
  }
}

// Client Code
const computer = new ComputerFacade();
computer.start();
