import TabelaFipePage from '@/views/tabela-fipe'
import { ReactElement } from 'react'
import { DefaultLayout } from '@/layouts/default'
import { NextPageWithLayout } from '../_app'

const TabelaFipeScreen: NextPageWithLayout = () => {
  return <TabelaFipePage />
}

TabelaFipeScreen.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default TabelaFipeScreen
