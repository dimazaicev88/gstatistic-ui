export interface Hit {
  uuid: string;          // UUID хита
  sessionUuid: string;   // UUID сессии
  dateHit: string;       // Время хита
  guestId: string;       // UUID посетителя
  newGuest: boolean;     // Флаг "был ли это новый посетитель на сайте"
  userId: number;        // ID пользователя под которым посетитель был авторизован (в момент хита или до этого)
  userAuth: boolean;     // Флаг "был ли посетитель авторизован в момент хита"
  url: string;           // Страница хита
  url404: boolean;       // Была ли 404 ошибка на странице хита
  urlFrom: string;       // Страница откуда пришел посетитель
  ip: string;            // IP адрес посетителя в момент хита
  method: string;        // HTTP метод отсылки данных
  cookies: string;       // Содержимое Cookie посетителя в момент хита
  userAgent: string;     // UserAgent посетителя в момент хита
  stopListId: number;    // ID записи стоп-листа под которую попал посетитель (если это имело место)
  countryId: string;     // ID страны (двух символьный идентификатор) посетителя сайта в момент хита (определяется по IP адресу)
  countryName: string;   // Название страны посетителя сайта в момент хита (определяется по IP адресу)
  siteId: string;        // ID сайта (двух символьный идентификатор)
}
