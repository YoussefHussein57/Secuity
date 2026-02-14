import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function AnimatedSection({
  children,
  className = '',
  animation = 'animate-on-scroll', // 'animate-on-scroll' | 'stagger-children' | 'fade-in-left' | 'fade-in-right' | 'scale-in'
}) {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`${animation} ${isVisible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
