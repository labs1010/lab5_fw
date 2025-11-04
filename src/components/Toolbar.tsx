import type { Gender } from '../types';

interface Props {
  active: 'all' | Gender;
  onChange: (value: 'all' | Gender) => void;
}

export default function Toolbar({ active, onChange }: Props) {
  return (
    <div className="toolbar">
      <button
        className={`btn ${active === 'all' ? 'btn--active' : ''}`}
        onClick={() => onChange('all')}
      >
        Усі
      </button>
      <button
        className={`btn ${active === 'male' ? 'btn--active' : ''}`}
        onClick={() => onChange('male')}
      >
        Male
      </button>
      <button
        className={`btn ${active === 'female' ? 'btn--active' : ''}`}
        onClick={() => onChange('female')}
      >
        Female
      </button>
    </div>
  );
}