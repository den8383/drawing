import Link from 'next/link'
import CanvasPanel from '../../components/CanvasPanel'
import PalettePanel from '../../components/PalettePanel'
import ToolsPanel from '../../components/ToolsPanel'

export const Drawing = (): JSX.Element => (
    <div>
    <CanvasPanel x='0' y='0'></CanvasPanel>
    <PalettePanel></PalettePanel>
    <ToolsPanel></ToolsPanel>
    <p>drawing</p>
    <Link href='/'>root</Link>
    </div>
)

export default Drawing
