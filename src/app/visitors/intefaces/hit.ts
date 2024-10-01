export interface Hit {
  uuid: string;                  // UUID хита
  sessionUuid: string;           // UUID сессии
  dateHit: string;               // Время хита (в формате ISO 8601)
  guestUuid: string;             // UUID посетителя
  isNewGuest: boolean;           // Флаг нового посетителя
  userId: number;                // ID пользователя
  userAuth: boolean;             // Флаг авторизации пользователя
  url: string;                   // URL хита
  url404: boolean;               // Флаг ошибки 404 на странице
  urlFrom: string;               // URL откуда пришел посетитель
  ip: string;                    // IP адрес посетителя
  method: string;                // HTTP метод запроса
  cookies: string;               // Cookie посетителя
  userAgent: string;             // User Agent
  stopListUuid: number;          // ID записи стоп-листа
  countryId: string;             // ID страны (двухсимвольный код)
  countryName: string;           // Название страны
  siteId: string;                // ID сайта
}
