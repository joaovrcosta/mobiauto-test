import { ReactElement } from 'react'
import { NextPageWithLayout } from './_app'
import IndexPage from '../views/index'
import { DefaultLayout } from '../layouts/default'

const IndexPageScreen: NextPageWithLayout = () => {
  return <IndexPage />
}

IndexPageScreen.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default IndexPageScreen
