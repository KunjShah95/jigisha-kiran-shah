import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { cn } from '../../lib/utils'

interface TracingBeamProps {
  children: React.ReactNode
  className?: string
}

/**
 * Aceternity "tracing beam" signature: a gradient line beside content whose
 * fill-progress tracks scroll position through the section.
 */
export function TracingBeam({ children, className }: TracingBeamProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.3'],
  })
  const pathHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <div ref={ref} className={cn('relative', className)}>
      <div className="absolute left-0 top-0 bottom-0 w-px bg-border hidden lg:block" aria-hidden="true">
        <motion.div
          className="absolute left-0 top-0 w-px bg-linear-to-b from-gold via-gold-dark to-transparent"
          style={{ height: pathHeight }}
        />
      </div>
      <div className="lg:pl-6">{children}</div>
    </div>
  )
}
