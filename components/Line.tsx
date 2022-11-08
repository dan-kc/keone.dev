import classNames from 'classnames'

interface Props {
  className: string
}

const Line: React.FC<Props> = ({ className }) => {
  return (
    <>
      <div
        className={classNames(
          '-z-10 h-[1px] w-[200vw] bg-pink-3 absolute',
          className
        )}
      />
    </>
  )
}
export default Line
