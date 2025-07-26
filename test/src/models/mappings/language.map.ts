import { LanguagesEnum } from "../enums/languages.enum.ts";


export function languageMapping(rawLanguage: string | undefined): LanguagesEnum {
  console.log('@@@languageMapping() function was called!');

  if (!rawLanguage) {
    throw new Error('"LANGUAGE" not found in environment config file');
  }
  switch (rawLanguage.toLocaleLowerCase()) {
    case 'en':
    case 'english':
      return LanguagesEnum.ENGLISH;
    case 'kr':
    case 'korean':
      return LanguagesEnum.KOREAN;
    case 'jp':
    case 'japanese':
      return LanguagesEnum.JAPANESE;
    case 'th':
    case 'thai':
      return LanguagesEnum.THAI;
    case 'ru':
    case 'russian':
      return LanguagesEnum.RUSSIAN;
    case 'tr':
    case 'turkish':
      return LanguagesEnum.TURKISH;
    case 'sp':
    case 'spanish':
      return LanguagesEnum.SPANISH;
    case 'da':
    case 'danish':
      return LanguagesEnum.DANISH;
    case 'de':
    case 'german':
      return LanguagesEnum.GERMAN;
    case 'gr':
    case 'greek':
      return LanguagesEnum.GREEK;
    case 'fr':
    case 'french':
      return LanguagesEnum.FRENCH;
    case 'hu':
    case 'hungarian':
      return LanguagesEnum.HUNGARIAN;
    case 'it':
    case 'italian':
      return LanguagesEnum.ITALIAN;
    case 'du':
    case 'dutch':
      return LanguagesEnum.DUTCH;
    case 'po':
    case 'portuguese':
      return LanguagesEnum.PORTUGUESE;
    case 'id':
    case 'indonesian':
      return LanguagesEnum.INDONESIAN;
    case 'ml':
    case 'malay':
      return LanguagesEnum.MALAY;
    case 'ps':
    case 'persian':
      return LanguagesEnum.PERSIAN;
    default:
      return LanguagesEnum.ENGLISH;
  }
}
