import { cn } from '@/utils/cn'

export const Lights: React.FC<{ className?: React.ReactNode }> = ({ className }) => (
  <div className={cn('w-full h-full', className)}>
    <div
      className={'w-full h-full relative bottom-[-200px] '}
      style={{
        background:
          'conic-gradient(from 180deg at 50% 50%,var(--purple-500) 0deg,var(--blue-700) 180deg,var(--blue-900) 1turn)',
        filter: 'blur(75px)',
        opacity: '20%'
      }}
    />
  </div>
)
