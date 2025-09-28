import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
en: {
    translation: {
      email: 'E-mail',
      password: 'Password',
      signIn: 'Sign In',
      logout: 'Logout',
      schedule: 'Schedule',
      profile: 'Profile',
      yourName: 'Your Name',
      yourEmail: 'Your E-mail',
      profilePicture: 'Profile picture',
      today: 'Today',
      loginErrorTitle: 'Could not sign in',
      loginErrorDesc: 'Please check your credentials and try again.',
      scheduleEvents: {
        opening: 'Opening of the position',
        projectEmail: 'Project email sent',
        projectDeadline: 'Last day to submit the project',
        evaluation: 'Evaluation of submitted projects',
        results: 'Project results announcement',
        technicalInterviews: 'Technical interviews',
        cultureInterviews: 'Culture interviews',
        winnersCalls: 'Winners calls',
      },
    }
  },
  pt: {
    translation: {
email: 'E-mail',
password: 'Senha',
signIn: 'Entrar',
      logout: 'Sair',
      schedule: 'Cronograma',
      profile: 'Perfil',
      yourName: 'Seu Nome',
      yourEmail: 'Seu E-mail',
      profilePicture: 'Foto de perfil',
      today: 'Hoje',
      loginErrorTitle: 'Não foi possível entrar',
      loginErrorDesc: 'Verifique suas credenciais e tente novamente.',
      scheduleEvents: {
        opening: 'Abertura da vaga',
        projectEmail: 'Email com o projeto',
        projectDeadline: 'Último dia para a entrega do projeto',
        evaluation: 'Avaliação dos projetos entregues',
        results: 'Divulgação dos resultados dos projetos',
        technicalInterviews: 'Entrevistas técnicas',
        cultureInterviews: 'Entrevistas de cultura',
        winnersCalls: 'Chamadas dos vencedores',
      },
    }
  }
}

i18n.use(initReactI18next).init({
resources,
lng: 'pt',
fallbackLng: 'en',
interpolation: { escapeValue: false }
})

export default i18n
