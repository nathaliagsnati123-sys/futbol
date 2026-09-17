import { FichaTecnica, TrainingSession } from '../types';

const FAVORITES_KEY = 'futbol_plus_favorites';
const COMPLETED_KEY = 'futbol_plus_completed';
const TRAININGS_KEY = 'futbol_plus_trainings';
const FICHAS_KEY = 'futbol_plus_fichas';

function safeDispatchEvent(eventName: string): void {
  if (typeof window !== 'undefined') {
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent(eventName));
    }, 0);
  }
}

export function getStoredFavorites(): string[] {
  try {
    const data = localStorage.getItem(FAVORITES_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function saveFavorite(id: string): void {
  try {
    const favs = getStoredFavorites();
    if (!favs.includes(id)) {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify([...favs, id]));
      safeDispatchEvent('futbol_favorites_updated');
    }
  } catch (err) {
    console.error('Error saving favorite', err);
  }
}

export function removeFavorite(id: string): void {
  try {
    const favs = getStoredFavorites().filter((f) => f !== id);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favs));
    safeDispatchEvent('futbol_favorites_updated');
  } catch (err) {
    console.error('Error removing favorite', err);
  }
}

export function getStoredCompleted(): string[] {
  try {
    const data = localStorage.getItem(COMPLETED_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function saveCompleted(id: string): void {
  try {
    const comp = getStoredCompleted();
    if (!comp.includes(id)) {
      localStorage.setItem(COMPLETED_KEY, JSON.stringify([...comp, id]));
      safeDispatchEvent('futbol_completed_updated');
    }
  } catch (err) {
    console.error('Error saving completed', err);
  }
}

export function removeCompleted(id: string): void {
  try {
    const comp = getStoredCompleted().filter((c) => c !== id);
    localStorage.setItem(COMPLETED_KEY, JSON.stringify(comp));
    safeDispatchEvent('futbol_completed_updated');
  } catch (err) {
    console.error('Error removing completed', err);
  }
}

export function getStoredTrainings(): TrainingSession[] {
  try {
    const data = localStorage.getItem(TRAININGS_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function saveTraining(session: TrainingSession): void {
  try {
    const all = getStoredTrainings();
    const idx = all.findIndex((t) => t.id === session.id);
    if (idx >= 0) {
      all[idx] = session;
    } else {
      all.unshift(session);
    }
    localStorage.setItem(TRAININGS_KEY, JSON.stringify(all));
    safeDispatchEvent('futbol_trainings_updated');
  } catch (err) {
    console.error('Error saving training session', err);
  }
}

export function deleteTraining(id: string): void {
  try {
    const all = getStoredTrainings().filter((t) => t.id !== id);
    localStorage.setItem(TRAININGS_KEY, JSON.stringify(all));
    safeDispatchEvent('futbol_trainings_updated');
  } catch (err) {
    console.error('Error deleting training', err);
  }
}

export function getStoredFichas(): FichaTecnica[] {
  try {
    const data = localStorage.getItem(FICHAS_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function saveFicha(ficha: FichaTecnica): void {
  try {
    const all = getStoredFichas();
    const idx = all.findIndex((f) => f.id === ficha.id);
    if (idx >= 0) {
      all[idx] = ficha;
    } else {
      all.unshift(ficha);
    }
    localStorage.setItem(FICHAS_KEY, JSON.stringify(all));
    safeDispatchEvent('futbol_fichas_updated');
  } catch (err) {
    console.error('Error saving ficha', err);
  }
}

export function deleteFicha(id: string): void {
  try {
    const all = getStoredFichas().filter((f) => f.id !== id);
    localStorage.setItem(FICHAS_KEY, JSON.stringify(all));
    safeDispatchEvent('futbol_fichas_updated');
  } catch (err) {
    console.error('Error deleting ficha', err);
  }
}

export const storage = {
  getFavorites: getStoredFavorites,
  toggleFavorite(id: string): boolean {
    const favs = getStoredFavorites();
    const exists = favs.includes(id);
    if (exists) removeFavorite(id);
    else saveFavorite(id);
    return !exists;
  },
  isFavorite(id: string): boolean {
    return getStoredFavorites().includes(id);
  },
  getCompleted: getStoredCompleted,
  toggleCompleted(id: string): boolean {
    const comp = getStoredCompleted();
    const exists = comp.includes(id);
    if (exists) removeCompleted(id);
    else saveCompleted(id);
    return !exists;
  },
  isCompleted(id: string): boolean {
    return getStoredCompleted().includes(id);
  },
  getTrainings: getStoredTrainings,
  saveTraining,
  deleteTraining,
  getFichas: getStoredFichas,
  saveFicha,
  deleteFicha,
};
