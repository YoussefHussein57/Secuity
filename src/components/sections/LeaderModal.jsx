import { useEffect } from 'react';

export default function LeaderModal({ leader, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!leader) return null;

  return (
    <div className="leader-modal-overlay" onClick={onClose}>
      <div className="leader-modal" onClick={(e) => e.stopPropagation()}>
        <button className="leader-modal__close" onClick={onClose} aria-label="Close">
          <i className="bi bi-x-lg"></i>
        </button>
        <h2 className="leader-modal__name">{leader.name}</h2>
        <p className="leader-modal__role">{leader.role}</p>
        <div className="leader-modal__content">
          {leader.image && (
            <img
              src={leader.image}
              alt={leader.name}
              className="leader-modal__image"
            />
          )}
          {leader.bio.split('\n\n').map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
