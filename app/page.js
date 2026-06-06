'use client';
import { useState, useEffect } from 'react';
import { races, users, workoutTypes, trainingPlan, tipsContent } from './data/trainingData';

// ─── HELPERS ──────────────────────────────────────────────────────────────────

function getCountdown(dateStr) {
  const now = new Date();
  const target = new Date(dateStr);
  const diff = target - now;
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, passed: true };
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  return { days, hours, minutes, passed: false };
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('sv-SE', { day: 'numeric', month: 'long', year: 'numeric' });
}

function getWeekNumber(date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() + 3 - (d.getDay() + 6) % 7);
  const week1 = new Date(d.getFullYear(), 0, 4);
  return 1 + Math.round(((d - week1) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
}

function getWeekDates(weekOffset = 0) {
  const now = new Date();
  const day = now.getDay() || 7;
  const monday = new Date(now);
  monday.setDate(now.getDate() - day + 1 + weekOffset * 7);
  const days = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    days.push(d);
  }
  return days;
}

function isSameDay(d1, d2) {
  return d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate();
}

const DAY_KEYS = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
const DAY_LABELS = ['Sön', 'Mån', 'Tis', 'Ons', 'Tor', 'Fre', 'Lör'];

// ─── STORAGE ─────────────────────────────────────────────────────────────────

function loadState(key, def) {
  if (typeof window === 'undefined') return def;
  try { return JSON.parse(localStorage.getItem(key)) ?? def; } catch { return def; }
}

function saveState(key, val) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(key, JSON.stringify(val));
}

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function CountdownBanner({ userRaces }) {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setTick(n => n + 1), 60000);
    return () => clearInterval(t);
  }, []);

  const upcoming = races.filter(r => userRaces.includes(r.id) && !getCountdown(r.date).passed);
  if (!upcoming.length) return null;
  const next = upcoming[0];
  const cd = getCountdown(next.date);

  return (
    <div className="countdown-banner">
      <div className="countdown-label">Nästa lopp</div>
      <div className="countdown-race">
        <div className="countdown-icon">{next.icon}</div>
        <div className="countdown-info">
          <div className="countdown-race-name">{next.name}</div>
          <div className="countdown-date">{formatDate(next.date)} · {next.distance}</div>
        </div>
        <div className="countdown-numbers">
          <div className="countdown-unit">
            <span className="countdown-num">{cd.days}</span>
            <span className="countdown-unit-label">dagar</span>
          </div>
          <div className="countdown-unit">
            <span className="countdown-num">{cd.hours}</span>
            <span className="countdown-unit-label">tim</span>
          </div>
          <div className="countdown-unit">
            <span className="countdown-num">{cd.minutes}</span>
            <span className="countdown-unit-label">min</span>
          </div>
        </div>
      </div>
      {upcoming.length > 1 && (
        <div className="upcoming-races">
          {upcoming.map((r, i) => (
            <div key={r.id} className={`race-chip ${i === 0 ? 'active' : ''}`}>
              <span>{r.icon}</span>
              <span>{r.name.split(' ')[0]}</span>
              <span>{new Date(r.date).getFullYear()}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function WorkoutModal({ workout, onClose }) {
  if (!workout) return null;
  const d = workout.detail;
  const wt = workoutTypes[workout.type];

  return (
    <div className={`modal-overlay open`} onClick={onClose}>
      <div className="modal-sheet" onClick={e => e.stopPropagation()}>
        <div className="modal-handle" />
        <div style={{ position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
            <span style={{ fontSize: 22 }}>{wt?.icon}</span>
            <div>
              <div className="modal-title">{workout.title}</div>
              <span className="type-pill" style={{ backgroundColor: `${wt?.color}22`, color: wt?.color, border: `1px solid ${wt?.color}44` }}>
                {d.passType}
              </span>
            </div>
          </div>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        <div className="divider" />

        {d.description && (
          <p style={{ fontSize: 14, color: 'var(--text2)', marginBottom: 14, lineHeight: 1.6 }}>{d.description}</p>
        )}

        {/* Löpning */}
        {d.distance && (
          <>
            <div className="detail-row"><span className="detail-label">Sträcka</span><span className="detail-value">{d.distance} km</span></div>
            <div className="detail-row"><span className="detail-label">Tempo/Känsla</span><span className="detail-value">{d.pace}</span></div>
            <div className="detail-row"><span className="detail-label">Pulszon</span><span className="detail-value">{d.zone}</span></div>
            {d.intervals && <div className="detail-row"><span className="detail-label">Intervaller</span><span className="detail-value">{d.intervals}</span></div>}
            {d.warmup && <div className="detail-row"><span className="detail-label">Uppvärmning</span><span className="detail-value">{d.warmup}</span></div>}
            {d.cooldown && <div className="detail-row"><span className="detail-label">Nedvarvning</span><span className="detail-value">{d.cooldown}</span></div>}
          </>
        )}

        {/* Gympass */}
        {d.exercises && (
          <>
            <div style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text2)', marginTop: 8, marginBottom: 6 }}>Övningar</div>
            <table className="exercise-table">
              <thead>
                <tr>
                  <th>Övning</th>
                  <th>Set</th>
                  <th>Reps</th>
                  <th>Not</th>
                </tr>
              </thead>
              <tbody>
                {d.exercises.map((ex, i) => (
                  <tr key={i}>
                    <td style={{ fontWeight: 500 }}>{ex.name}</td>
                    <td>{ex.sets}</td>
                    <td>{ex.reps}</td>
                    <td style={{ color: 'var(--text2)', fontSize: 11 }}>{ex.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
}

function WeekView({ completedWorkouts, onToggle, onWorkoutClick }) {
  const [weekOffset, setWeekOffset] = useState(0);
  const days = getWeekDates(weekOffset);
  const today = new Date();

  const weekKey = (() => {
    const d = days[0];
    const year = d.getFullYear();
    const wn = getWeekNumber(d);
    return `${year}-W${String(wn).padStart(2, '0')}`;
  })();

  const weekPlan = trainingPlan[weekKey] || {};
  const hasMissed = weekOffset < 0 && Object.values(completedWorkouts).some(v => !v);

  return (
    <div>
      <div className="week-nav">
        <button className="week-nav-btn" onClick={() => setWeekOffset(o => o - 1)}>← Föregående</button>
        <div className="week-title">
          {weekOffset === 0 ? 'Denna vecka' : weekOffset === 1 ? 'Nästa vecka' : weekOffset === -1 ? 'Förra veckan' : `Vecka ${getWeekNumber(days[0])}`}
        </div>
        <button className="week-nav-btn" onClick={() => setWeekOffset(o => o + 1)}>Nästa →</button>
      </div>

      {hasMissed && (
        <div className="adapted-banner">
          <span className="adapted-icon">⚡</span>
          <div className="adapted-text">Du missade pass förra veckan. Schemat har anpassats för att hjälpa dig nå målet ändå – kolla nästa veckas plan!</div>
        </div>
      )}

      <div className="card">
        {days.map((day, i) => {
          const dayKey = DAY_KEYS[day.getDay()];
          const workout = weekPlan[dayKey];
          const wt = workout ? workoutTypes[workout.type] : null;
          const compKey = `${weekKey}-${dayKey}`;
          const isCompleted = !!completedWorkouts[compKey];
          const isToday = isSameDay(day, today);

          if (!workout) {
            return (
              <div key={i} className="rest-day">
                <span className={`day-label${isToday ? ' today' : ''}`}>{DAY_LABELS[day.getDay()]}</span>
                <span style={{ fontSize: 13, color: 'var(--text2)' }}>😴 Vilodag</span>
              </div>
            );
          }

          return (
            <div key={i} className="day-row" onClick={() => onWorkoutClick(workout)}>
              <span className={`day-label${isToday ? ' today' : ''}`}>{DAY_LABELS[day.getDay()]}</span>
              <div className="workout-info">
                <div className="workout-title">{workout.title}</div>
                <div className="workout-detail" style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                  <span className="type-pill" style={{ backgroundColor: `${wt?.color}22`, color: wt?.color }}>
                    {wt?.icon} {wt?.label}
                  </span>
                  <span>{workout.duration} min</span>
                </div>
              </div>
              <button
                className={`done-check ${isCompleted ? 'completed' : ''}`}
                onClick={e => { e.stopPropagation(); onToggle(compKey); }}
              >
                {isCompleted ? '✓' : ''}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function MonthlySchedule({ completedWorkouts, onToggle, onWorkoutClick }) {
  const [monthOffset, setMonthOffset] = useState(0);
  const now = new Date();
  const targetMonth = new Date(now.getFullYear(), now.getMonth() + monthOffset, 1);
  const monthName = targetMonth.toLocaleDateString('sv-SE', { month: 'long', year: 'numeric' });

  const weeks = [];
  const firstDay = new Date(targetMonth.getFullYear(), targetMonth.getMonth(), 1);
  const lastDay = new Date(targetMonth.getFullYear(), targetMonth.getMonth() + 1, 0);

  let cur = new Date(firstDay);
  const startDow = cur.getDay() || 7;
  cur.setDate(cur.getDate() - startDow + 1);

  while (cur <= lastDay) {
    const weekDays = [];
    for (let i = 0; i < 7; i++) {
      weekDays.push(new Date(cur));
      cur.setDate(cur.getDate() + 1);
    }
    weeks.push(weekDays);
  }

  return (
    <div>
      <div className="month-nav">
        <button className="week-nav-btn" onClick={() => setMonthOffset(o => o - 1)}>←</button>
        <div className="week-title" style={{ textTransform: 'capitalize' }}>{monthName}</div>
        <button className="week-nav-btn" onClick={() => setMonthOffset(o => o + 1)}>→</button>
      </div>

      {weeks.map((weekDays, wi) => {
        const wn = getWeekNumber(weekDays[0]);
        const yr = weekDays[0].getFullYear();
        const weekKey = `${yr}-W${String(wn).padStart(2, '0')}`;
        const weekPlan = trainingPlan[weekKey] || {};
        const hasWorkouts = Object.keys(weekPlan).length > 0;

        if (!hasWorkouts) return null;

        return (
          <div key={wi} className="week-block">
            <div className="week-block-header">Vecka {wn}</div>
            {weekDays.map((day, di) => {
              const dayKey = DAY_KEYS[day.getDay()];
              const workout = weekPlan[dayKey];
              if (!workout) return null;
              const wt = workoutTypes[workout.type];
              const compKey = `${weekKey}-${dayKey}`;
              const isCompleted = !!completedWorkouts[compKey];
              const isPast = day < new Date();

              return (
                <div key={di} className="schedule-row" onClick={() => onWorkoutClick(workout)}>
                  <span className="schedule-day-badge">{DAY_LABELS[day.getDay()]} {day.getDate()}</span>
                  <div className="schedule-info">
                    <div className="schedule-title">{workout.title}</div>
                    <div className="schedule-meta">
                      <span className="type-pill" style={{ backgroundColor: `${wt?.color}22`, color: wt?.color, marginRight: 6 }}>
                        {wt?.icon} {wt?.label}
                      </span>
                      {workout.duration} min
                    </div>
                  </div>
                  <button
                    className={`done-check ${isCompleted ? 'completed' : ''}`}
                    onClick={e => { e.stopPropagation(); onToggle(compKey); }}
                  >
                    {isCompleted ? '✓' : ''}
                  </button>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

function TrackingView({ completedWorkouts, userData }) {
  const [activeUser, setActiveUser] = useState('user1');

  const months = ['2026-06', '2026-07', '2026-08'];
  const currentMonth = new Date().toISOString().slice(0, 7);

  const calculateStats = (userId) => {
    const stats = { running: 0, gym: 0, swimming: 0, cycling: 0, rollerskis: 0, mobility: 0, total: 0 };
    Object.entries(completedWorkouts).forEach(([key, done]) => {
      if (!done) return;
      const parts = key.split('-');
      const weekKey = `${parts[0]}-${parts[1]}`;
      const dayKey = parts[2];
      const workout = trainingPlan[weekKey]?.[dayKey];
      if (workout) {
        stats[workout.type] = (stats[workout.type] || 0) + 1;
        stats.total++;
      }
    });
    return stats;
  };

  const stats = calculateStats(activeUser);
  const totalPlanned = Object.values(trainingPlan).reduce((s, w) => s + Object.keys(w).length, 0);
  const pct = totalPlanned ? Math.round((stats.total / totalPlanned) * 100) : 0;

  return (
    <div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        {[{ id: 'user1', label: '🏃 Dig' }, { id: 'user2', label: '💪 Kompisen' }, { id: 'both', label: '👥 Gemensam' }].map(u => (
          <button
            key={u.id}
            onClick={() => setActiveUser(u.id)}
            style={{
              flex: 1, padding: '8px', borderRadius: 8,
              border: `1px solid ${activeUser === u.id ? 'var(--accent)' : 'var(--border)'}`,
              background: activeUser === u.id ? 'rgba(255,107,53,0.1)' : 'var(--bg3)',
              color: activeUser === u.id ? 'var(--accent)' : 'var(--text2)',
              cursor: 'pointer', fontSize: 13, fontFamily: 'Barlow, sans-serif'
            }}
          >
            {u.label}
          </button>
        ))}
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-num">{stats.total}</div>
          <div className="stat-label">Pass genomförda</div>
        </div>
        <div className="stat-card">
          <div className="stat-num" style={{ color: pct >= 80 ? '#4ade80' : pct >= 50 ? 'var(--yellow)' : 'var(--red)' }}>{pct}%</div>
          <div className="stat-label">Genomförandegrad</div>
        </div>
        <div className="stat-card">
          <div className="stat-num" style={{ color: 'var(--accent2)' }}>{stats.running}</div>
          <div className="stat-label">Löppass</div>
        </div>
        <div className="stat-card">
          <div className="stat-num" style={{ color: 'var(--red)' }}>{stats.gym}</div>
          <div className="stat-label">Gympass</div>
        </div>
      </div>

      <div className="card">
        <div style={{ fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text2)', marginBottom: 14 }}>Aktivitetsfördelning</div>
        {Object.entries(workoutTypes).filter(([k]) => k !== 'rest').map(([key, wt]) => {
          const count = stats[key] || 0;
          const max = Math.max(...Object.keys(workoutTypes).filter(k => k !== 'rest').map(k => stats[k] || 0), 1);
          return (
            <div key={key} className="progress-row">
              <span className="progress-icon">{wt.icon}</span>
              <span className="progress-label">{wt.label}</span>
              <div className="progress-bar-wrap">
                <div className="progress-bar-fill" style={{ width: `${(count / max) * 100}%`, backgroundColor: wt.color }} />
              </div>
              <span className="progress-value" style={{ color: wt.color }}>{count}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function TipsView() {
  return (
    <div>
      {tipsContent.map((cat, i) => (
        <div key={i} className="tips-category">
          <div className="tips-cat-header">
            <span style={{ fontSize: 22 }}>{cat.icon}</span>
            <div className="tips-cat-title" style={{ color: cat.color }}>{cat.category}</div>
          </div>
          {cat.tips.map((tip, j) => (
            <div key={j} className="tip-card">
              <div className="tip-title">{tip.title}</div>
              <div className="tip-body">{tip.body}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function SetupScreen({ onComplete, isUser2 }) {
  const [name, setName] = useState('');
  const [selectedRaces, setSelectedRaces] = useState(
    isUser2 ? ['vansbro', 'lidingo', 'vasaloppet', 'vatternrundan'] : ['midnattsloppet', 'vansbro', 'lidingo', 'vasaloppet', 'vatternrundan']
  );

  const toggleRace = (id) => {
    setSelectedRaces(prev => prev.includes(id) ? prev.filter(r => r !== id) : [...prev, id]);
  };

  return (
    <div className="setup-screen">
      <div style={{ fontSize: 40, marginBottom: 8 }}>🏆</div>
      <div className="setup-title">Välkommen!</div>
      <div className="setup-sub">Ställ in din profil för att komma igång med träningsplanen</div>

      <label style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text2)', display: 'block', marginBottom: 6 }}>Ditt namn</label>
      <input className="setup-input" placeholder="Skriv ditt namn..." value={name} onChange={e => setName(e.target.value)} />

      <div className="divider" />

      <label style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text2)', display: 'block', marginBottom: 10 }}>Dina lopp</label>
      <div className="setup-race-grid">
        {races.map(r => (
          <button key={r.id} className={`setup-race-btn ${selectedRaces.includes(r.id) ? 'selected' : ''}`} onClick={() => toggleRace(r.id)}>
            <div className="setup-race-icon">{r.icon}</div>
            <div className="setup-race-name">{r.name}</div>
            <div style={{ fontSize: 11, marginTop: 2, color: 'var(--text2)' }}>{r.distance} · {new Date(r.date).getFullYear()}</div>
          </button>
        ))}
      </div>

      <button className="btn-primary" disabled={!name.trim()} onClick={() => onComplete({ name, races: selectedRaces })}>
        Starta träningsplan →
      </button>
    </div>
  );
}

// ─── MAIN APP ────────────────────────────────────────────────────────────────

export default function App() {
  const [currentUser, setCurrentUser] = useState('user1');
  const [navOpen, setNavOpen] = useState(false);
  const [activeView, setActiveView] = useState('week');
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [completedWorkouts, setCompletedWorkouts] = useState({});
  const [userProfiles, setUserProfiles] = useState({
    user1: { name: 'Anton', races: ['midnattsloppet', 'vansbro', 'lidingo', 'vasaloppet', 'vatternrundan'], setup: true },
    user2: { name: 'Peter', races: ['vansbro', 'lidingo', 'vasaloppet', 'vatternrundan'], setup: false }
  });

  useEffect(() => {
    setCompletedWorkouts(loadState('klassiker_completed', {}));
    const profiles = loadState('klassiker_profiles', null);
    if (profiles) setUserProfiles(profiles);
  }, []);

  const toggleWorkout = (key) => {
    const updated = { ...completedWorkouts, [key]: !completedWorkouts[key] };
    setCompletedWorkouts(updated);
    saveState('klassiker_completed', updated);
  };

  const completeSetup = (userId, data) => {
    const updated = { ...userProfiles, [userId]: { ...data, setup: true } };
    setUserProfiles(updated);
    saveState('klassiker_profiles', updated);
  };

  const navItems = [
    { id: 'week', label: 'Veckovy', icon: '📅' },
    { id: 'month', label: 'Månadsschema', icon: '🗓️' },
    { id: 'tracking', label: 'Statistik & Tracking', icon: '📊' },
    { id: 'tips', label: 'Tips & Trix', icon: '💡' },
  ];

  const profile = userProfiles[currentUser];

  if (!profile?.setup) {
    return (
      <div className="app-wrapper">
        <SetupScreen isUser2={currentUser === 'user2'} onComplete={(data) => completeSetup(currentUser, data)} />
      </div>
    );
  }

  const pageTitles = { week: 'Veckovy', month: 'Månadsschema', tracking: 'Statistik', tips: 'Tips & Trix' };

  return (
    <div className="app-wrapper">
      {/* HEADER */}
      <header className="app-header">
        <div className="header-top">
          <div>
            <div className="app-logo">Klassiker 🏆</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ display: 'flex', gap: 6 }}>
              {['user1', 'user2'].map(uid => (
                <button
                  key={uid}
                  onClick={() => setCurrentUser(uid)}
                  style={{
                    padding: '4px 10px',
                    borderRadius: 20,
                    border: `1px solid ${currentUser === uid ? 'var(--accent)' : 'var(--border)'}`,
                    background: currentUser === uid ? 'rgba(255,107,53,0.15)' : 'transparent',
                    color: currentUser === uid ? 'var(--accent)' : 'var(--text2)',
                    cursor: 'pointer',
                    fontSize: 12,
                    fontFamily: 'Barlow, sans-serif'
                  }}
                >
                  {userProfiles[uid]?.name || (uid === 'user1' ? 'Anton' : 'Peter')}
                </button>
              ))}
            </div>
            <button className="hamburger-btn" onClick={() => setNavOpen(true)}>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <rect y="4" width="22" height="2" rx="1" fill="currentColor" />
                <rect y="10" width="22" height="2" rx="1" fill="currentColor" />
                <rect y="16" width="22" height="2" rx="1" fill="currentColor" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* COUNTDOWN */}
      <CountdownBanner userRaces={profile.races} />

      {/* NAV DRAWER */}
      <div className={`nav-overlay ${navOpen ? 'open' : ''}`} onClick={() => setNavOpen(false)} />
      <nav className={`nav-drawer ${navOpen ? 'open' : ''}`}>
        <div className="nav-drawer-header">
          <div className="nav-drawer-logo">Klassiker 🏆</div>
          <button className="nav-close-btn" onClick={() => setNavOpen(false)}>✕</button>
        </div>
        <div className="nav-user-section">
          <div className="nav-user-label">Användare</div>
          <div className="nav-user-tabs">
            {['user1', 'user2'].map(uid => (
              <button key={uid} className={`nav-user-tab ${currentUser === uid ? 'active' : ''}`}
                onClick={() => { setCurrentUser(uid); setNavOpen(false); }}>
                {userProfiles[uid]?.name || (uid === 'user1' ? 'Anton' : 'Peter')}
              </button>
            ))}
          </div>
        </div>
        <div className="nav-items">
          {navItems.map(item => (
            <div key={item.id} className={`nav-item ${activeView === item.id ? 'active' : ''}`}
              onClick={() => { setActiveView(item.id); setNavOpen(false); }}>
              <span className="nav-item-icon">{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </nav>

      {/* MAIN */}
      <main className="main-content">
        <div className="section-title">{pageTitles[activeView]}</div>
        <div className="section-subtitle">
          {activeView === 'week' && 'Klicka på ett pass för detaljer · Kryssa av när du är klar'}
          {activeView === 'month' && 'Hela månadens träningsplan'}
          {activeView === 'tracking' && 'Följ din progress mot målen'}
          {activeView === 'tips' && 'Träningstips för varje disciplin'}
        </div>

        {activeView === 'week' && (
          <WeekView
            completedWorkouts={completedWorkouts}
            onToggle={toggleWorkout}
            onWorkoutClick={setSelectedWorkout}
          />
        )}
        {activeView === 'month' && (
          <MonthlySchedule
            completedWorkouts={completedWorkouts}
            onToggle={toggleWorkout}
            onWorkoutClick={setSelectedWorkout}
          />
        )}
        {activeView === 'tracking' && (
          <TrackingView completedWorkouts={completedWorkouts} userData={userProfiles} />
        )}
        {activeView === 'tips' && <TipsView />}
      </main>

      {/* WORKOUT MODAL */}
      {selectedWorkout && (
        <WorkoutModal workout={selectedWorkout} onClose={() => setSelectedWorkout(null)} />
      )}
    </div>
  );
}
