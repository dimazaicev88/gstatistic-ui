export interface Session {
  uuid: string;                 // Uuid сессии
  guestUuid: string;            // ID посетителя
  newGuest: boolean;            // Флаг "новый посетитель" (True - новый; False - вернувшийся)
  userId: number;               // ID пользователя под которым последний раз был авторизован посетитель
  userAuth: boolean;            // Флаг "авторизован ли посетитель в данной сессии" (Y - да; N - нет)
  events: number;               // Количество событий произведенных в данной сессии
  hits: number;                 // Количество хитов произведенных в данной сессии
  favorites: boolean;           // Флаг "добавлял ли посетитель сайт в "Избранное" в данной сессии
  stopListId: string;           // ID записи стоп-листа, под которую попал посетитель (если это имело место быть)
  countryId: string;            // ID страны посетителя
  userAgent: string;            // UserAgent посетителя
  urlFrom: string;              // Ссылающаяся страница для первого хита сессии
  dateStat: string;             // Дата первого хита сессии (ISO 8601 формат)
  dateFirst: string;            // Время первого хита сессии (ISO 8601 формат)
  urlTo: string;                // Страница первого хита сессии
  urlTo404: boolean;            // Флаг 404 ошибки на первой странице сессии (Y - да; N - нет)
  firstHitId: string;           // ID первого хита
  firstSiteId: string;          // ID сайта для первого хита сессии
  ipFirst: string;              // IP адрес посетителя на первом хите сессии (в виде: XXX.XXX.XXX.XXX)
  dateLast: string;             // Время последнего хита сессии (ISO 8601 формат)
  urlLast: string;              // Страница последнего хита сессии
  urlLast404: boolean;          // Флаг 404 ошибки на последней странице сессии (Y - да; N - нет)
  lastHitId: string;            // ID последнего хита
  lastSiteId: string;           // ID сайта для последнего хита сессии
  ipLast: string;               // IP адрес посетителя на последнем хите сессии (в виде: XXX.XXX.XXX.XXX)
  advUuid: string;                // ID рекламной кампании
  advBack: boolean;             // Флаг прямого захода (N) или возврата (Y) по рекламной кампании
  referer1: string;             // Идентификатор referer1 рекламной кампании
  referer2: string;             // Идентификатор referer2 рекламной кампании
  referer3: string;             // Дополнительный параметр referer3 рекламной кампании
  sessionTime: number;          // Разница во времени между первым и последним хитом сессии (сек.)
  phpsessid: string;            // Идентификатор сессии выданный PHP
}
