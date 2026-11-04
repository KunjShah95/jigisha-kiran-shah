import { Fragment } from 'react'
import { motion } from 'motion/react'
import { cn } from '../../lib/utils'

interface TextGenerateProps {
  words: string
  className?: string
  gradientWord?: string
}

/**
 * Aceternity "text-generate" signature: words blur/fade in sequentially.
 *
 * Each word is an `inline-block` so its own transform can animate, which means
 * the slots collapse their surrounding whitespace. A real space text node is
 * emitted between slots instead — without it the heading renders, and is
 * crawled and read out, as one unbroken word
 * ("Insuranceadvicebuiltaroundyourfamily'sprotection").
 */
export function TextGenerate({ words, className, gradientWord }: TextGenerateProps) {
  const tokens = words.split(' ')

  return (
    <motion.span
      className={cn('inline', className)}
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
    >
      {tokens.map((word, i) => {
        const isAccent = gradientWord && word.includes(gradientWord)
        return (
          <Fragment key={`${word}-${i}`}>
            <motion.span
              variants={
                isAccent
                  ? // No blur on the accent word: it paints with
                    // `background-clip: text` + transparent fill, and a
                    // blur filter on that combination rasterises badly in
                    // Chrome (the glyphs fringe and flicker mid-reveal).
                    { hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }
                  : {
                      hidden: { opacity: 0, filter: 'blur(6px)', y: 8 },
                      visible: { opacity: 1, filter: 'blur(0px)', y: 0 },
                    }
              }
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className={cn('inline-block', isAccent && 'text-gradient-gold italic')}
            >
              {word}
            </motion.span>
            {i < tokens.length - 1 ? ' ' : null}
          </Fragment>
        )
      })}
    </motion.span>
  )
}
