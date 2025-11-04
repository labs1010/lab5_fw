import type { User } from '../types';

function ageClass(age: number): string {
  if (age < 18) return 'card--underage';
  if (age <= 30) return 'card--young';
  if (age <= 50) return 'card--adult';
  return 'card--senior';
}

export default function UserCard({ user }: { user: User }) {
  const fullName = `${user.firstName} ${user.lastName}`;

  return (
    <article className={`card ${ageClass(user.age)}`}>
      <img className="card__photo" src={user.photo} alt={fullName} />
      <div className="card__body">
        <header className="card__header">
          <h3 className="card__title">{fullName}</h3>
          <span className={`badge badge--${user.gender}`}>
            {user.gender === 'male' ? '♂' : '♀'}
          </span>
        </header>

        <p className="muted">{user.position}</p>

        {/* Аналог Vue v-if: показываем возраст только если > 18 */}
        {user.age > 18 && <p>Вік: {user.age}</p>}

        {/* Аналог Vue v-for: список хобі */}
        <div className="hobbies">
          <span className="muted">Хобі:</span>
          <ul>
            {user.hobbies.map((hobby, i) => (
              <li key={`${user.id}-h-${i}`}>{hobby}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}