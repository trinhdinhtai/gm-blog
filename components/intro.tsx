"use client"

import { motion } from "framer-motion"

const Intro = () => {
  return (
    <section className="-mt-10 flex min-h-[calc(100vh-80px)] scroll-mt-[100rem] flex-col justify-center space-y-4 text-center sm:mb-0">
      <motion.div
        className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <h1 className="w-9/12 font-heading text-3xl leading-loose sm:text-5xl md:text-6xl lg:text-7xl">
          An blog app <br />
          to share knowledge <br />
          for GM members
        </h1>
      </motion.div>
    </section>
  )
}

export default Intro
