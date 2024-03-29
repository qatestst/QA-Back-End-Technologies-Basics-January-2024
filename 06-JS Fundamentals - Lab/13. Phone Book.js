// Define a function that takes an array of strings as input
function storeInfo(arr) {
    // Create an empty object to store the name and number pairs
    let info = {};
    // Loop through the array of strings
    for (let str of arr) {
      // Split the string by space and assign the first and second parts to name and number variables
      let [name, number] = str.split(" ");
      // Store the name and number pair in the info object, replacing any duplicate name
      info[name] = number;
    }
    // Loop through the keys of the info object
    for (let name in info) {
      // Print the name and number pair in the desired format
      console.log(name + " -> " + info[name]);
    }
  }
  
  // Test the function with some examples
  storeInfo(['Tim 0834212554', 'Peter 0877547887', 'Bill 0896543112', 'Tim 0876566344']);
  storeInfo(['George 0552554', 'Peter 087587', 'George 0453112', 'Bill 0845344']);
  
//   Първият ред дефинира функция с име storeInfo, която приема един аргумент, наречен arr. Този аргумент трябва да бъде масив от низове, които съдържат име и номер, разделени с интервал. Например: [‘Tim 0834212554’, ‘Peter 0877547887’].
// Вторият ред създава празен обект, наречен info, който ще се използва за съхранение на двойките име и номер. Обектът е структура от данни, която може да съдържа различни свойства и стойности. Например: {name: ‘Tim’, number: ‘0834212554’}.
// Третият ред започва цикъл for…of, който обхожда всеки елемент от масива arr. Всеки елемент се присвоява на променливата str, която ще се използва в тялото на цикъла.
// Четвъртият ред разделя низа str по интервал и присвоява първата и втората част на две променливи, наречени name и number. Това се нарича деструктуриране на масив и използва оператора []. Например: ако str е ‘Tim 0834212554’, то name ще бъде ‘Tim’, а number ще бъде ‘0834212554’.
// Петият ред съхранява двойката име и номер в обекта info, като използва името като ключ и номера като стойност. Това се прави с оператора [], който позволява да се задават или достъпват свойства на обекта по динамичен начин. Ако в обекта info вече има свойство със същото име, то стойността му ще бъде заменена с новия номер. Например: ако info е {Tim: ‘0834212554’}, а name е ‘Tim’, а number е ‘0876566344’, то info ще стане {Tim: ‘0876566344’}.
// Шестият ред завършва тялото на цикъла for…of и преминава към следващия елемент от масива arr, докато не се изчерпят всички елементи.
// Седмият ред започва друг цикъл for…in, който обхожда всички ключове на обекта info. Всеки ключ се присвоява на променливата name, която ще се използва в тялото на цикъла.
// Осмият ред извежда на конзолата двойката име и номер в желания формат, като използва оператора + за конкатенация на низове. За да се достъпи стойността на даден ключ от обекта info, се използва оператора []. Например: ако name е ‘Tim’, а info е {Tim: ‘0876566344’}, то console.log ще изведе ‘Tim -> 0876566344’.
// Деветият ред завършва тялото на цикъла for…in и преминава към следващия ключ на обекта info, докато не се изчерпят всички ключове.