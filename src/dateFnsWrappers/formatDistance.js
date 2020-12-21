import { formatDistance } from 'date-fns'
import { enGB, it, es, fr, de, enUS } from 'date-fns/locale'

const locales = {enGB, it, es, fr, de, enUS}

export default function (date, baseDate) {
  return formatDistance(date, baseDate, {
    locale: locales[convertLanguageToLocale()],
    addSuffix: true
  })
}


function convertLanguageToLocale(){
  switch (navigator.language) {
    case 'fr-FR': {
      return 'fr';
    }
    case 'fr': {
      return 'fr';
    }
    case 'en-GB': {
      return 'enGB';
    }
    case 'en-US': {
      return 'enUS';
    }
    case 'de': {
      return 'de';
    }
    case 'it': {
      return 'it';
    }
    case 'it-IT': {
      return 'it';
    }
    case 'es': {
      return 'es';
    }
    case 'es-ES': {
      return 'es';
    }
  }
}
