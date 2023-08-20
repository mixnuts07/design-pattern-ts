// Builder
// ... オブジェクトの生成プロセスとその表現を分離することで、同じ構築プロセスを持つオブジェクトを異なる形で生成する。
// ... 生成プロセスとその表現を綺麗に分離することにより、さまざまな種類や形の製品を効率的に作成することができる。
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

// ピザの製品クラス
class Pizza {
  private toppings: string[] = [];
  private crust: string = "Thin";

  setCrust(crust: string) {
    this.crust = crust;
  }

  addTopping(topping: string) {
    this.toppings.push(topping);
  }

  describe(): string {
    return `${this.crust} crust pizza with ${this.toppings.join(", ")}`;
  }
}

// ピザを作成するためのBuilderクラス
// ピザの構築プロセス（どんなクラストを選択するか、どのトッピングを追加するかなど）
interface PizzaBuilder {
  setCrust(crust: string): void;
  addTopping(topping: string): void;
  getPizza(): Pizza;
}

// 具体的なBuilderクラス
// 具体的にどんなピザを作るか決めている(表現)
class MargheritaPizzaBuilder implements PizzaBuilder {
  private pizza = new Pizza();

  setCrust(crust: string): void {
    this.pizza.setCrust(crust);
  }

  addTopping(topping: string): void {
    if (topping == "Cheese" || topping == "Tomato") {
      this.pizza.addTopping(topping);
    }
  }

  getPizza(): Pizza {
    return this.pizza;
  }
}

// Directorクラス
class PizzaChef {
  private builder: PizzaBuilder;

  constructor(builder: PizzaBuilder) {
    this.builder = builder;
  }
  makePizza(): void {
    this.builder.setCrust("Thin");
    this.builder.addTopping("Cheese");
    this.builder.addTopping("Tomato");
  }
}
// 使用例
const builder = new MargheritaPizzaBuilder();
const chef = new PizzaChef(builder);

chef.makePizza();
const pizza = builder.getPizza();
console.log(pizza.describe()); // `Thin crust pizza with Cheese, Tomato`
