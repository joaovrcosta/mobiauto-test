import { DefaultLayout } from '../../layouts/default'
import TabelaFipePage from '../../views/tabela-fipe'
import { NextPageWithLayout } from '../_app'
import { ReactElement } from 'react'

const TabelaFipeScreen: NextPageWithLayout = () => {
  return <TabelaFipePage />
}

TabelaFipeScreen.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default TabelaFipeScreen
