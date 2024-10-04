export interface LimitActivity {
  defenceDelay: number //на время
  defenceStackTime: number //если в течение
  defenceMaxStackHits: number //сделано более
  defenceLog: boolean //Сделать запись в журнал событий:
  defenceOn: boolean //Блокировать?
}

export interface AdvCompany {
  advNa: boolean  //- Использовать рекламную кампанию c referer1=NA, referer2=NA по умолчанию?
  advAutoCreate: boolean //- Автоматически создавать рекламные кампании при наличии параметров referer1, referer2 в URL'е:
  refererCheck: boolean //- Для автоматически создаваемых рекламных кампаний проверять, что referer1 и referer2 содержат только символы латинского алфавита, цифры и символы "_:;.,-":
  searcherEvents: boolean//- Учитывать события рекламных кампаний для поисковиков:
  referer1Syn: string //- Синонимы referer1:
  referer2Syn: string //- Синонимы referer2:
  referer3Syn: string //- Синонимы referer3:
}

export interface SettingsData {
  saveVisits: boolean;           // Сохранять статистику посещений разделов и файлов?
  savePathData: boolean;         // Собирать данные для отчета "Пути по сайту"?
  maxPathSteps: number;          // Максимальная длина путей по сайту для хранения:
  importantPageParams: string;   // Важные параметры страницы:
  directoryIndex: string;        // Индексные страницы разделов:
  browsers: string;              // Маски для UserAgent браузеров: (используется для автодетекта поисковиков в качестве исключений)
  saveReferrers: boolean;        // Сохранять статистику ссылающихся сайтов и поисковых фраз?
  refererTop: boolean;            // Не очищать из ссылающихся доменов первые (TOP):
  saveHits: boolean;             // Сохранять хиты?
}

export interface Options {

  limitActivity?: LimitActivity
  advCompany?: AdvCompany
  settingsData?: SettingsData

}
