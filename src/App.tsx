import { useMemo, useState } from 'react';
import Toolbar from './components/Toolbar';
import UserList from './components/UserList';
import { users as seed } from './data/users';
import type { Gender } from './types';

export default function App() {
  const userData = useMemo(() => seed[0], []);
  const [filter, setFilter] = useState<'all' | Gender>('all');

  return (
    <div className="container">
      <h1>Lab 5 — Components • Templates • Directives (React)</h1>

      <section className="section">
        <h2>1) Проста картка користувача</h2>
        {/* Переюзовуємо UserCard, стилі всередині */}
        {/* вік відображається лише якщо > 18, список хобі — через .map */}
        {/* кольори картки — залежно від віку */}
        {/* Для демонстрації використовуємо userData */}
        {userData && <UserList users={[userData]} filter="all" />}
      </section>

      <section className="section">
        <h2>2) Список користувачів (до 10) + фільтр</h2>
        <Toolbar active={filter} onChange={setFilter} />
        <UserList users={seed.slice(0, 10)} filter={filter} />
      </section>
    </div>
  );
}