import * as T from '@radix-ui/react-toast'
import useToastStore from '@hooks/stores/useToastStore'
import copy from 'copy-to-clipboard'
import { Cross2Icon, CopyIcon } from '@radix-ui/react-icons'
import { AnimatePresence, motion } from 'framer-motion'

export const Toast = () => {
  const open = useToastStore((state) => state.open)
  const emailOpen = useToastStore((state) => state.emailOpen)
  const setOpen = useToastStore((state) => state.setOpen)
  const setEmailOpen = useToastStore((state) => state.setEmailOpen)
  const templateOpen = useToastStore((state) => state.templateOpen)
  const setTemplateOpen = useToastStore((state) => state.setTemplateOpen)

  return (
    <>
      <AnimatePresence>
        {open ? (
          <T.Root
            asChild
            duration={8000}
            open={open}
            onOpenChange={setOpen}
            key={1}
            forceMount
          >
            <motion.div
              initial={{ x: 400 }}
              animate={{ x: 0 }}
              exit={{ x: 400 }}
              className='absolute bottom-0 right-0 rounded-md shadow-black shadow-2xl p-4 bg-anthracite-5 shadow-2xl '
            >
              <div className='flex justify-between items-center mb-3'>
                <T.Title className='font-body text-anthracite-11'>
                  If your mail app didn’t open...
                </T.Title>
                <T.Close>
                  <Cross2Icon className='h-7 w-7 text-anthracite-1' />
                </T.Close>
              </div>
              <div className='flex gap-3 text-base'>
                <T.Action
                  className='bg-blue-300/60 border-blue-600 hover:border-blue-600 text-blue-900 hover:text-blue-600 font-heading font-extrabold border py-2 px-4 rounded-md shadow-2xl '
                  altText='Copy Email'
                  onClick={() => {
                    copy('daniel@keone.io')
                    setEmailOpen(true)
                  }}
                >
                  Copy Email
                </T.Action>
                <T.Action
                  className='bg-green-300/60 border-green-600 hover:border-green-600 text-green-900 hover:text-green-600 font-heading font-extrabold border py-2 px-4 rounded-md shadow-2xl '
                  altText='Copy Template'
                  onClick={() => {
                    copy('daniel@keone.io')
                    setTemplateOpen(true)
                  }}
                >
                  Copy Template
                </T.Action>
              </div>
            </motion.div>
          </T.Root>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {emailOpen ? (
          <T.Root
            duration={800}
            open={emailOpen}
            onOpenChange={setEmailOpen}
            forceMount
            asChild
            key={2}
          >
            <motion.div
              initial={{ x: 400 }}
              animate={{ x: 0 }}
              exit={{ x: 400 }}
              className='absolute right-0 bottom-0 -z-10 flex justify-end'
            >
              <div className='w-fit font-heading font-extrabold border border-green-9 py-2 px-4 bg-green-8 text-green-12 rounded-md shadow-2xl gap-2 flex items-center '>
                <span className='text-olive-12'>Email Copied</span>
                <CopyIcon className='h-5 w-5' />
              </div>
            </motion.div>
          </T.Root>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {templateOpen ? (
          <T.Root
            duration={800}
            open={templateOpen}
            onOpenChange={setTemplateOpen}
            forceMount
            asChild
            key={3}
          >
            <motion.div
              initial={{ x: 400 }}
              animate={{ x: 0 }}
              exit={{ x: 400 }}
              className='absolute right-0 bottom-0 -z-10 flex justify-end'
            >
              <div className='w-fit font-heading font-extrabold border border-blue-9 py-2 px-4 bg-blue-8 text-blue-12 rounded-md shadow-2xl gap-2 flex items-center '>
                <span className='text-olive-12'>Template Copied</span>
                <CopyIcon className='h-5 w-5' />
              </div>
            </motion.div>
          </T.Root>
        ) : null}
      </AnimatePresence>

      <T.Viewport className='fixed bottom-0 right-0 z-50 w-[314px] mr-10 mb-10 outline-none' />
    </>
  )
}
export default Toast
