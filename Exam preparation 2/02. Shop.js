// Функция, която приема input като аргумент
function solve(input) {
    // Променлива, която пази масива от продукти
    let products = input.slice(1, 1 + Number(input[0]));
    // Променлива, която пази масива от команди
    let args = input.slice(1 + Number(input[0]));
    // Променлива, която пази броя на продуктите
    let n = products.length;
    // Цикъл, който обхожда всички команди
    for (let i = 0; i < args.length; i++) {
      // Променлива, която пази текущата команда
      let command = args[i];
      // Проверка за край на командите
      if (command === "End") {
        break;
      }
      // Разделяне на командата на части
      let parts = command.split(" ");
      // Проверка за типа на командата
      switch (parts[0]) {
        // Команда за продаване на продукт
        case "Sell":
          // Проверка за наличие на продукти
          if (n > 0) {
            // Изваждане на първия продукт от масива
            let product = products.shift();
            // Намаляване на броя на продуктите
            n--;
            // Отпечатване на съобщение
            console.log(product + " product sold!");
          }
          break;
        // Команда за добавяне на продукт
        case "Add":
          // Проверка за наличие на име на продукт
          if (parts.length > 1) {
            // Вземане на името на продукта
            let product = parts[1];
            // Добавяне на продукта в края на масива
            products.push(product);
            // Увеличаване на броя на продуктите
            n++;
          }
          break;
        // Команда за размяна на продукти
        case "Swap":
          // Проверка за наличие на индекси
          if (parts.length > 2) {
            // Вземане на индексите
            let start = Number(parts[1]);
            let end = Number(parts[2]);
            // Проверка за валидност на индексите
            if (start >= 0 && start < n && end >= 0 && end < n) {
              // Размяна на продуктите в дадените позиции
              let temp = products[start];
              products[start] = products[end];
              products[end] = temp;
              // Отпечатване на съобщение
              console.log("Swapped!");
            }
          }
          break;
      }
    }
    // Проверка за наличие на продукти след края на командите
    if (n > 0) {
      // Отпечатване на останалите продукти
      console.log("Products left: " + products.join(", "));
    } else {
      // Отпечатване на съобщение, че магазинът е празен
      console.log("The shop is empty");
    }
  }
  
  // Примерни входни данни
  let input1 = ["3", "Apple", "Banana", "Orange", "Sell", "End", "Swap 0 1"];
  let input2 = ["5", "Milk", "Eggs", "Bread", "Cheese", "Butter", "Add Yogurt", "Swap 1 4", "End"];
  let input3 = ["3", "Shampoo", "Soap", "Toothpaste", "Sell", "Sell", "Sell", "End"];
  
  // Извикване на функцията solve с примерните входни данни
  solve(input1);
  solve(input2);
  solve(input3);
  