import { Post } from './components/post'
import { pages } from '../../statics'

export default function Home(): JSX.Element {
  return (
    <>
      <section className='sm:py-16'>
        <Post statics={pages.about} />
      </section>
    </>
  )
}
