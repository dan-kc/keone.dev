import * as T from "@radix-ui/react-toast";
import useToastStore from "@hooks/stores/useToastStore";
import copy from "copy-to-clipboard";
import { Cross2Icon, CopyIcon } from "@radix-ui/react-icons";
import { AnimatePresence, motion } from "framer-motion";

const emailTemplate = `
——— READ ———

My email is open to queries of all kinds, but I'm sure that most of you would just like a quote ASAP.

So I've created this email template to show you everything that I need to know in order to give you an instant quote on timescale and pricing!


——— TEMPLATE ———

Hello Daniel,


1) Overview

Tell me about your business. I'd love to find out what makes it tick, as well as its history, size, values, and, most importantly, target audience.


2) Why

Why do you need a new website, and what are your objectives with it?


3) Deadline

Are there any urgent deadlines? I’ll be able to tell you right away if the project is unrealistic.


4) Content

Do you already have any photos, videos, or written material?
What kind of content do you want to be able to update on your website in the future? It's best to start thinking about your website's content as soon as possible.


5) Inspiration

Do you already have examples of websites that you’d like me to draw heavy inspiration from?


6) Technicalities

Do you require any particular features?
Does your website need to integrate with any existing systems, such as a database or an email marketing service like Mailchimp?
Do you already have a preferred Content Management System?
`;

export const Toast = () => {
  const open = useToastStore((state) => state.open);
  const emailOpen = useToastStore((state) => state.emailOpen);
  const setOpen = useToastStore((state) => state.setOpen);
  const setEmailOpen = useToastStore((state) => state.setEmailOpen);
  const templateOpen = useToastStore((state) => state.templateOpen);
  const setTemplateOpen = useToastStore((state) => state.setTemplateOpen);

  return (
    <T.Provider swipeDirection="right">
      <AnimatePresence>
        {open ? (
          <T.Root
            asChild
            duration={20000}
            open={open}
            onOpenChange={setOpen}
            key={1}
            forceMount
          >
            <motion.div
              initial={{ x: 400 }}
              animate={{ x: 0 }}
              exit={{ x: 400 }}
              className="absolute bottom-0 right-0 rounded-md border border-slateDark-6 bg-slateDark-2 p-4 shadow-lg outline-none"
            >
              <div className="mb-3 mr-2 flex items-start justify-between min-[356px]:mr-0">
                <T.Title>If your mail app didn’t open...</T.Title>
                <T.Close>
                  <Cross2Icon className="h-7 w-7" />
                </T.Close>
              </div>
              <div className="flex flex-col justify-between gap-3 text-base min-[356px]:flex-row">
                <T.Action
                  className="rounded-md border border-skyDark-6 bg-skyDark-3/20 py-2 px-4 font-heading font-extrabold text-skyDark-9 shadow-2xl hover:border-skyDark-8 hover:bg-skyDark-4/20"
                  altText="Copy Email"
                  onClick={() => {
                    copy("daniel@keone.dev");
                    setEmailOpen(true);
                  }}
                >
                  Copy Email
                </T.Action>
                <T.Action
                  className="rounded-md border border-greenDark-6 bg-greenDark-3/20 py-2 px-4 font-heading font-extrabold text-greenDark-9 shadow-2xl hover:border-greenDark-8 hover:bg-greenDark-4/20 "
                  altText="Copy Template"
                  onClick={() => {
                    copy(emailTemplate);
                    setTemplateOpen(true);
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
              className="absolute right-0 bottom-0 -z-10 flex justify-end"
            >
              <div className="flex w-fit items-center gap-2 rounded-md border border-skyDark-6 bg-skyDark-3/40 py-2 px-4 font-heading font-extrabold text-skyDark-9 shadow-2xl">
                <span>Email Copied</span>
                <CopyIcon className="h-5 w-5" />
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
              className="absolute right-0 bottom-0 -z-10 flex justify-end"
            >
              <div className="flex w-fit items-center gap-2 rounded-md border border-greenDark-6 bg-greenDark-3/40 py-2 px-4 font-heading font-extrabold text-greenDark-9 shadow-2xl hover:border-greenDark-8 hover:bg-greenDark-4/20 ">
                <span>Template Copied</span>
                <CopyIcon className="h-5 w-5" />
              </div>
            </motion.div>
          </T.Root>
        ) : null}
      </AnimatePresence>

      <T.Viewport className="fixed bottom-0 right-0 z-50 mr-10 mb-10 w-[260px] outline-none min-[356px]:w-[314px]" />
    </T.Provider>
  );
};
export default Toast;
