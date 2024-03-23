import LocalizedStrings from 'react-localization'
import * as LangHelper from '../common/LangHelper'

const strings = new LocalizedStrings({
  fr: {
    SIGN_UP_HEADING: 'Inscription',
    SIGN_UP: "S'inscrire",
    SIGN_UP_ERROR: "Une erreur s'est produite lors de l'inscription.",
  },
  en: {
    SIGN_UP_HEADING: 'Sign up',
    SIGN_UP: 'Sign up',
    SIGN_UP_ERROR: 'An error occurred during sign up.',
  },
  ar: {
    SIGN_UP_HEADING: 'تسجيل',
    SIGN_UP: 'يسجل',
    SIGN_UP_ERROR: 'حدث خطأ أثناء التسجيل.',
  },
})

LangHelper.setLanguage(strings)
export { strings }
