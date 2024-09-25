export interface AdvAdd {
  uuid: string;
  name: string;
  referer1: string;
  referer2: string;
  out: string;//Откуда пришли [%_]: (ссылающиеся страницы, разделенные новой строкой)
  searchers: string[]  //Поисковые системы
  to: string;//Куда пришли [%_]: (полные адреса страниц вашего сайта разделенные новой строкой)
}
