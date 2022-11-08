import Highlight from './Hightlight'

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode
}

const Background: React.FC<Props> = ({ children }) => {
  return (
    <>
      {children}
    </>
  )
}
export default Background
