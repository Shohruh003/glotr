import { IProduct } from "../../types/types";

const products: IProduct[] = [
  {
    id: 1,
    price: 100,
    name: "Knife Sharpener Tool Professional",
    image: "https://www.foodstoreint.co.uk/images/brands2.png",
    stock: "yes",
    store: "Media Park",
    location: "Tashkent",
    code: 4325,
    characteristics: [
      { label: "Код товара", value: "MGN93RU/A" },
      { label: "Производитель", value: "Apple" },
      { label: "Разрешение экрана", value: "2560x1600" },
      { label: "Количество ядер процессора", value: "8" },
      { label: "Оптический привод", value: "Отсутствует" },
      { label: "Объем памяти", value: "16 ГБ" },
      { label: "Тип экрана", value: "IPS" },
      { label: "Операционная система", value: "macOS" },
    ],
    description: "Оптический привод С новой силой. С появлением чипа Apple M1 наш самый тонкий и лёгкий ноутбук полностью преобразился. Центральный процессор теперь работает до 3,5 раза быстрее. Графический — до 5 раз. А благодаря нашей передовой системе Neural Engine скорость машинного обучения возросла до 9 раз. Новый Mac. Book Air работает без подзарядки дольше, чем предыдущие модели."
  },
  {
    id: 2,
    price: 200,
    name: "Knife Sharpener Tool Professional",
    image: "https://www.foodstoreint.co.uk/images/brands2.png",
    stock: "no",
    store: "Media Park",
    location: "Tashkent",
    code: 2345,
    characteristics: [
        { label: "Код товара", value: "MGN93RU/A" },
        { label: "Производитель", value: "Apple" },
        { label: "Разрешение экрана", value: "2560x1600" },
        { label: "Количество ядер процессора", value: "8" },
        { label: "Оптический привод", value: "Отсутствует" },
        { label: "Объем памяти", value: "16 ГБ" },
        { label: "Тип экрана", value: "IPS" },
        { label: "Операционная система", value: "macOS" },
      ],
      description: "Оптический привод С новой силой. С появлением чипа Apple M1 наш самый тонкий и лёгкий ноутбук полностью преобразился. Центральный процессор теперь работает до 3,5 раза быстрее. Графический — до 5 раз. А благодаря нашей передовой системе Neural Engine скорость машинного обучения возросла до 9 раз. Новый Mac. Book Air работает без подзарядки дольше, чем предыдущие модели."
  },
  {
    id: 3,
    price: 300,
    name: "Knife Sharpener Tool Professional",
    image: "https://www.foodstoreint.co.uk/images/brands2.png",
    stock: "yes",
    store: "Media Park",
    location: "Tashkent",
    code: 123,
    characteristics: [
        { label: "Код товара", value: "MGN93RU/A" },
        { label: "Производитель", value: "Apple" },
        { label: "Разрешение экрана", value: "2560x1600" },
        { label: "Количество ядер процессора", value: "8" },
        { label: "Оптический привод", value: "Отсутствует" },
        { label: "Объем памяти", value: "16 ГБ" },
        { label: "Тип экрана", value: "IPS" },
        { label: "Операционная система", value: "macOS" },
      ],
      description: "Оптический привод С новой силой. С появлением чипа Apple M1 наш самый тонкий и лёгкий ноутбук полностью преобразился. Центральный процессор теперь работает до 3,5 раза быстрее. Графический — до 5 раз. А благодаря нашей передовой системе Neural Engine скорость машинного обучения возросла до 9 раз. Новый Mac. Book Air работает без подзарядки дольше, чем предыдущие модели."
  },
];

export default products;
