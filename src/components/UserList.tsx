import type { Gender, User } from '../types';
import UserCard from './UserCard';

interface Props {
  users: User[];
  filter: 'all' | Gender;
}

export default function UserList({ users, filter }: Props) {
  const filtered =
    filter === 'all' ? users : users.filter(u => u.gender === filter);

  if (filtered.length === 0) {
    return <p className="empty">Список юзерів пустий</p>;
  }

  return (
    <section className="grid">
      {filtered.map(u => (
        <UserCard key={u.id} user={u} />
      ))}
    </section>
  );
}