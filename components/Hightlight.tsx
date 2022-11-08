interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode
}

const Highlight: React.FC<Props> = ({ children }) => {
  return (
    <>
      <span className='relative inline-block text-white font-heading text-rose-700'>
        {children}

        <div className='-z-10 h-[1px] w-[calc(200vw+200vh)] bg-rose-700 absolute bottom-[12.2%] -left-[100vw]' />
        <div className='-z-10 h-[1px] w-[calc(200vw+200vh)] bg-rose-700 absolute top-[37.8%] -left-[100vw]' />
        <div className='-z-10 h-[calc(200vw+200vh)] w-[1px] bg-rose-700 absolute top-[-100vh] left-0' />
        <div className='-z-10 h-[calc(200vw+200vh)] w-[1px] bg-rose-700 absolute top-[-100vh] right-0' />

        {/* left */}
        <div
          className='-z-20 h-[1px] w-[calc(200vw+200vh)] bg-anthracite-6 absolute top-0 left-0 origin-top-left bg-anthracite-5'
          style={{
            transform: 'translate(0.39em) rotate(-45deg) translate(-50%,-50%)',
          }}
        />
        <div
          className='-z-20 h-[1px] w-[calc(200vw+200vh)] bg-anthracite-6 absolute top-0 left-0 origin-top-left bg-anthracite-5'
          style={{
            transform: 'translate(-1.11em) rotate(45deg) translate(-50%,-50%)',
          }}
        />

        {/* right */}
        <div
          className='-z-20 h-[1px] w-[calc(200vw+200vh)] bg-anthracite-6 absolute top-0 left-0 origin-top-left bg-anthracite-5'
          style={{
            transform: 'translate(1.74em) rotate(45deg) translate(-50%,-50%)',
          }}
        />
        <div
          className='-z-20 h-[1px] w-[calc(200vw+200vh)] bg-anthracite-6 absolute top-0 left-0 origin-top-left bg-anthracite-5'
          style={{
            transform: 'translate(3.49em) rotate(-45deg) translate(-50%,-50%)',
          }}
        />
      </span>
    </>
  )
}
export default Highlight
