interface Filter {
  fields?: string[];           // Массив полей для фильтрации
  skip?: number;               // Пропущенные записи
  limit?: number;              // Лимит записей
  orderBy?: string;            // Поле сортировки
  order?: string[];            // Порядок сортировки (ASC/DESC)
  operators: Operators[];      // Операторы фильтрации
}

interface Operators {
  operator: string;            // Тип оператора (например, '=', '>', '<')
  value: any;                  // Значение для оператора
  field: string;               // Поле, к которому применяется оператор
}
