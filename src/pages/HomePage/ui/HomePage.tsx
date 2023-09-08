import { FC } from 'react'
import { SearchCountMessage } from '../../../widgets/SearchCountMessage'
import { BookList } from '../../../entities/book'
import { LoadMore } from '../../../features/LoadMore'

interface HomePageProps {}

const HomePage: FC = (props) => {
  return (
    <>
      <div className={''}>
        <SearchCountMessage />
        <BookList />
        <LoadMore />
      </div>
    </>
  )
}

export default HomePage
