import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
  splitBy?: 'words' | 'letters';
  direction?: 'bottom' | 'top';
}

export default function BlurText({
  text,
  className = '',
  delay = 100,
  splitBy = 'words',
  direction = 'bottom',
}: BlurTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const tokens = splitBy === 'words' ? text.split(' ') : text.split('');
  const yFrom = direction === 'bottom' ? 50 : -50;

  return (
    <span ref={ref} className={`inline ${className}`}>
      {tokens.map((token, i) => (
        <motion.span
          key={i}
          initial={{ filter: 'blur(10px)', opacity: 0, y: yFrom }}
          animate={
            inView
              ? { filter: 'blur(0px)', opacity: 1, y: 0 }
              : { filter: 'blur(10px)', opacity: 0, y: yFrom }
          }
          transition={{
            delay: (i * delay) / 1000,
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="inline-block"
          style={{ marginRight: splitBy === 'words' ? '0.25em' : undefined }}
        >
          {token}
        </motion.span>
      ))}
    </span>
  );
}
