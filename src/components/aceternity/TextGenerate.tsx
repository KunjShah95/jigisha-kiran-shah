import { motion } from 'motion/react'
import { cn } from '../../lib/utils'

interface TextGenerateProps {
  words: string
  className?: string
  gradientWord?: string
}

/**
 * Aceternity "text-generate" signature: words blur/fade in sequentially.
 * Splits on whitespace so the gradient-accented phrase can be rendered
 * inline without breaking the stagger.
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
          <motion.span
            key={`${word}-${i}`}
            variants={{
              hidden: { opacity: 0, filter: 'blur(6px)', y: 8 },
              visible: { opacity: 1, filter: 'blur(0px)', y: 0 },
            }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className={cn('inline-block mr-[0.25em]', isAccent && 'text-gradient-gold italic')}
          >
            {word}
          </motion.span>
        )
      })}
    </motion.span>
  )
}
