// Template Method (テンプレートメソッド): アルゴリズムの骨格を定義し、ステップの実装をサブクラスに委譲。
// ... 一連のステップの骨格を定義する方法を提供するが、そのステップの実装はサブクラスにまかせるパターン。
// ... アルゴリズムの構造は同じままで、特定のステップの詳細を変更できる。
// ... コードの重複を避け、拡張性を向上させる場合に有用
// ... 具体的には、
// 使用例
// ...
// ...
// ...
// ...
// 問題点
// ...
// ...
// ...

// Abstract Class
abstract class RecipeTemplate {
  // Template Method
  prepareRecipe(): void {
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.addCondiments();
  }

  boilWater(): void {
    console.log("Boiling Water");
  }

  abstract brew(): void;
  abstract addCondiments(): void;

  pourInCup(): void {
    console.log("Pouring into Cup");
  }
}

// Concrete Class
class TeaRecipe extends RecipeTemplate {
  brew(): void {
    console.log("Steeping the tea");
  }

  addCondiments(): void {
    console.log("Adding Lemon");
  }
}

class CoffeeRecipe extends RecipeTemplate {
  brew(): void {
    console.log("Dripping Coffee Through filter");
  }

  addCondiments(): void {
    console.log("Adding Sugar And Milk");
  }
}

// Client Code
const tea = new TeaRecipe();
tea.prepareRecipe();

const coffee = new CoffeeRecipe();
coffee.prepareRecipe();
