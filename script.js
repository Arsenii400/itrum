// Задача №1

const fruits = ["apple", "banana", "orange", "kiwi", "grape"];
const letters1 = ["a", "bc", "def", "ghij", "klmno"];
const letters2 = ["xyz", "pq", "rs", "tuvw"];

function sortByLength(array) {
  array.sort(function (a, b) {
    a = a.length;
    b = b.length;

    if (a < b) return -1;
    if (b < a) return 1;

    return 0;
  })
  console.log(array);
}

sortByLength(fruits);
sortByLength(letters1);
sortByLength(letters2);


// Задача №2

const a = [1, -2, 3, -4, 5];
const b = [-1, -2, -3, -4, -5];
const c = [0, 0, 0, 0, 0];
const d = [];

function countPositiveNumbers(array) {
  const filtered = array.filter(function (item) {
    return item > 0;
  });

  console.log(`Output: ${filtered.length}`);
}

countPositiveNumbers(a);
countPositiveNumbers(b);
countPositiveNumbers(c);
countPositiveNumbers(d);


// Задача №3

const e = [1, 2, 3, 4, 5];
const f = [-1, 2, -3, 4, -5];
const g = [0, 0, 0, 0, 0];
const h = [];

function sumArray(array) {
  const sum = array.reduce(function (prevVal, item) {
    return prevVal + item;
  }, 0);

  console.log(`sum: ${sum}`);
}

sumArray(e);
sumArray(f);
sumArray(g);
sumArray(h);


// Задача №4

const i = [7, 1, 5, 3, 6, 4];
const j = [7, 6, 4, 3, 1];
const k = [3, 8, 1, 5, 9];
const l = [2, 4, 2, 6, 1];
const m = [5, 2, 9, 1, 5];

function maxProfit(prices) {
  let minValue = Infinity;
  let bestProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minValue) {
      minValue = prices[i]
    }

    const todayProfit = prices[i] - minValue;

    if (bestProfit < todayProfit) {
      bestProfit = todayProfit
    }
  }

  console.log(`bestProfit: ${bestProfit}`);
}

maxProfit(i);
maxProfit(j);
maxProfit(k);
maxProfit(l);
maxProfit(m);


// Задача №4

const s1 = "Anagram";
const t1 = "nagaram";
const s2 = "крыса";
const t2 = "автомобиль";

const alf = "([0-9A-Za-z])";

function anagram(a, b) {
  if (1 <= a.length && b.length <= 5 * 10 ** 4 && a.match(/[a-z]/i) && b.match(/[a-z]/i)) {

    const sortedS = a.toLowerCase().split('').sort().join('');
    const sortedT = b.toLowerCase().split('').sort().join('');

    if (sortedS === sortedT) {
      console.log('(anagram) Вывод: правда');
    } else {
      console.log('(anagram) Вывод: ложь');
    }
  }
}

anagram(s1, t1);
anagram(s2, t2);

// В JS каждый символ зашифрован в системе Unicode.
// Любой букве, числу и знаку соответствует какой-то код.
// Если бы мне встретился символ Unicode я бы использовал метод sort() без аргументов.
// Тогда бы он выстроил элементы массива по возрастанию кодов. 
// Дальше бы я сравнил эти последовательности.


// Задача №6

const nums1 = [2, 7, 11, 15];
const target1 = 9;
const nums2 = [3, 2, 4];
const target2 = 6;
const nums3 = [3, 3];
const target3 = 6;

function twoSum(nums, target) {
  if (2 <= nums.length <= 10 ** 4 && (-10) ** 9 <= nums[i] <= 10 ** 9 && (-10) ** 9 <= target <= 10 ** 9 ) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (map.has(complement)) {
        console.log([map.get(complement), i]);
        return [map.get(complement), i];
      }
      map.set(nums[i], i);
    }
    throw new Error('No two sum solution');
  }
};

twoSum(nums1, target1);
twoSum(nums2, target2);
twoSum(nums3, target3);