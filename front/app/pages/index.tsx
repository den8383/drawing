import Link from 'next/link'
export const Home = (): JSX.Element => (
    <div>
    <p>root page</p>
    <Link href='/posts/drawing'>drawing</Link>
    </div>
)

export default Home
