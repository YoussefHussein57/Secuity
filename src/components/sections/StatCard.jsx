import CountUp from 'react-countup';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function StatCard({ number, label }) {
  const [ref, isVisible] = useScrollAnimation(0.3);

  const numericValue = parseFloat(number.replace(/[^0-9.]/g, '')) || 0;
  const hasDecimal = number.replace(/[^0-9.]/g, '').includes('.');
  const prefix = '';
  const suffix = number.replace(/[0-9.,]/g, '');

  return (
    <div className="card-stat" ref={ref}>
      <div className="card-stat__number">
        {isVisible ? (
          <CountUp
            end={numericValue}
            duration={2.5}
            separator=","
            decimals={hasDecimal ? 1 : 0}
            suffix={suffix}
            prefix={prefix}
          />
        ) : (
          '0'
        )}
      </div>
      <div className="card-stat__label">{label}</div>
    </div>
  );
}
