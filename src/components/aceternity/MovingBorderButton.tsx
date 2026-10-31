import { useRef } from 'react'
import { motion, useAnimationFrame, useMotionValue, useTransform } from 'motion/react'
import { cn } from '../../lib/utils'

interface MovingBorderButtonProps {
  children: React.ReactNode
  className?: string
  containerClassName?: string
  duration?: number
  borderColor?: string
}

/**
 * Aceternity "moving border" signature: a conic-gradient rotates behind the
 * button, masked to a thin ring. Rotation progress drives an angle via a
 * motion value rather than a CSS animation so it survives tab-blur jank.
 */
export function MovingBorderButton({
  children,
  className,
  containerClassName,
  duration = 3000,
  borderColor = '#c4772a',
}: MovingBorderButtonProps) {
  const progress = useMotionValue(0)

  useAnimationFrame((time) => {
    progress.set((time % duration) / duration)
  })

  const angle = useTransform(progress, (v) => `${v * 360}deg`)
  const background = useTransform(
    angle,
    (a) => `conic-gradient(from ${a}, transparent 0deg, ${borderColor} 60deg, transparent 120deg)`
  )

  return (
    <div className={cn('relative rounded-xl p-[1.5px] overflow-hidden', containerClassName)}>
      <motion.div
        aria-hidden="true"
        className="absolute inset-[-40%]"
        style={{ background }}
      />
      <div className={cn('relative z-10 rounded-[10px] bg-midnight', className)}>{children}</div>
    </div>
  )
}
