import Link from 'next/link'
import CanvasPanel from '../../components/CanvasPanel'
import PalettePanel from '../../components/PalettePanel'

export const Drawing = (): JSX.Element => (
    <div>
    <CanvasPanel x="0" y="0"></CanvasPanel>
    <PalettePanel></PalettePanel>
    <p>drawing</p>
    <Link href='/'>root</Link>
    </div>
)

export default Drawing
