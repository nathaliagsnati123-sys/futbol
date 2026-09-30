import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { Header, ActiveTab } from './components/common/Header';
import { BottomNav } from './components/common/BottomNav';
import { OfflineIndicator } from './components/common/OfflineIndicator';
import { ExerciseCard } from './components/exercises/ExerciseCard';
import { ExerciseDetailModal } from './components/exercises/ExerciseDetailModal';
import { ExerciseFilters } from './components/exercises/ExerciseFilters';
import { DashboardView } from './components/dashboard/DashboardView';
import { TrainingView } from './components/training/TrainingView';
import { PreparacionFisicaView } from './components/physical/PreparacionFisicaView';
import { FutIaView } from './components/ai/FutIaView';
import { AddToTrainingModal } from './components/training/AddToTrainingModal';
import { allExercises } from './data/exercises';
import { Exercise, FilterState } from './types';
import {
  getStoredFavorites,
  saveFavorite,
  removeFavorite,
  getStoredCompleted,
  saveCompleted,
  removeCompleted,
  getStoredTrainings,
} from './utils/storage';
import {
  Heart,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Filter,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

const ITEMS_PER_PAGE = 24;

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('inicio');
  const [favorites, setFavorites] = useState<string[]>(() => getStoredFavorites());
  const [completed, setCompleted] = useState<string[]>(() => getStoredCompleted());
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
  const [exerciseForTrainingModal, setExerciseForTrainingModal] = useState<Exercise | null>(null);
  const [exerciseForFutIa, setExerciseForFutIa] = useState<Exercise | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleOpenFutIa = useCallback((exercise?: Exercise | null) => {
    if (exercise) {
      setExerciseForFutIa(exercise);
    }
    setActiveTab('fut-ia');
  }, []);
  const [trainingsCount, setTrainingsCount] = useState<number>(() => {
    const count = getStoredTrainings().length;
    return count > 0 ? count : 2;
  });

  useEffect(() => {
    const handleTrainingsUpdate = () => {
      setTrainingsCount(getStoredTrainings().length);
    };
    window.addEventListener('futbol_trainings_updated', handleTrainingsUpdate);
    return () => window.removeEventListener('futbol_trainings_updated', handleTrainingsUpdate);
  }, []);

  // Filters state
  const [filters, setFilters] = useState<FilterState>({
    searchQuery: '',
    category: '',
    objective: '',
    age: '',
    level: '',
    players: '',
    duration: '',
    intensity: '',
    space: '',
  });

  // Show brief feedback toast
  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  }, []);

  // Toggle favorite
  const handleToggleFavorite = useCallback(
    (id: string) => {
      const isFav = favorites.includes(id);
      if (isFav) {
        removeFavorite(id);
        setFavorites((prev) => prev.filter((item) => item !== id));
        showToast('Eliminado de favoritos');
      } else {
        saveFavorite(id);
        setFavorites((prev) => [...prev, id]);
        showToast('Añadido a favoritos ❤️');
      }
    },
    [favorites, showToast]
  );

  // Toggle completed
  const handleToggleCompleted = useCallback(
    (id: string) => {
      const isComp = completed.includes(id);
      if (isComp) {
        removeCompleted(id);
        setCompleted((prev) => prev.filter((item) => item !== id));
        showToast('Desmarcado de completados');
      } else {
        saveCompleted(id);
        setCompleted((prev) => [...prev, id]);
        showToast('¡Marcado como completado! ✓');
      }
    },
    [completed, showToast]
  );

  // Reset page to 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  // Filtered exercises computation
  const filteredExercises = useMemo(() => {
    const q = filters.searchQuery.trim().toLowerCase();

    return allExercises.filter((ex) => {
      // Search query filter
      if (q) {
        const matchesName = ex.name.toLowerCase().includes(q);
        const matchesObj = ex.objetivoPrincipal.toLowerCase().includes(q);
        const matchesSub = ex.subcategory.toLowerCase().includes(q);
        const matchesId = ex.id.toLowerCase().includes(q);
        const matchesTags = ex.tags.some((t) => t.toLowerCase().includes(q));

        if (!matchesName && !matchesObj && !matchesSub && !matchesId && !matchesTags) {
          return false;
        }
      }

      // Category filter
      if (filters.category) {
        const targetCat = filters.category.toLowerCase().trim();
        const exCat = ex.category.toLowerCase().trim();
        const matchesCategory =
          exCat === targetCat ||
          exCat.startsWith(targetCat) ||
          exCat.includes(targetCat) ||
          targetCat.includes(exCat);
        if (!matchesCategory) {
          return false;
        }
      }

      // Objective filter
      if (filters.objective) {
        const objLower = filters.objective.toLowerCase();
        const inMain = ex.objetivoPrincipal.toLowerCase().includes(objLower);
        const inTech = ex.objetivoTecnico.toLowerCase().includes(objLower);
        const inTact = ex.objetivoTatico.toLowerCase().includes(objLower);
        const inTags = ex.tags.some((t) => t.toLowerCase().includes(objLower));
        if (!inMain && !inTech && !inTact && !inTags) {
          return false;
        }
      }

      // Age filter
      if (filters.age && filters.age !== 'Todas las edades') {
        if (!ex.edad.includes(filters.age) && !ex.edad.includes('Todas')) {
          return false;
        }
      }

      // Level filter
      if (filters.level && ex.nivel !== filters.level) {
        return false;
      }

      // Players filter
      if (filters.players && ex.jugadoresLabel !== filters.players) {
        return false;
      }

      // Duration filter
      if (filters.duration && !ex.duracion.includes(filters.duration)) {
        return false;
      }

      // Intensity filter
      if (filters.intensity && ex.intensidad !== filters.intensity) {
        return false;
      }

      // Space filter
      if (filters.space && ex.espacio !== filters.space) {
        return false;
      }

      return true;
    });
  }, [filters]);

  // Favorite exercises list
  const favoriteExercises = useMemo(() => {
    const favSet = new Set(favorites);
    return allExercises.filter((ex) => favSet.has(ex.id));
  }, [favorites]);

  // Paginated exercises
  const totalPages = Math.ceil(filteredExercises.length / ITEMS_PER_PAGE) || 1;
  const currentExercises = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredExercises.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredExercises, currentPage]);

  const featuredExercise = allExercises[0];

  return (
    <div className="min-h-screen bg-[#050e08] text-gray-100 flex flex-col selection:bg-emerald-500 selection:text-black font-sans print:bg-white print:text-black print:min-h-0 print:h-auto">
      <OfflineIndicator />

      {/* Main App Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        favoritesCount={favorites.length}
        completedCount={completed.length}
      />

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 bg-emerald-500 text-black px-4 py-2.5 rounded-xl font-bold text-xs shadow-2xl shadow-emerald-950/60 flex items-center gap-2 border border-emerald-300 animate-bounce print:hidden">
          <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main View Switcher */}
      <main className={`flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-24 md:pb-12 ${selectedExercise ? 'print:hidden' : ''}`}>
        {/* TAB 1: INICIO (Dashboard) */}
        {activeTab === 'inicio' && (
          <DashboardView
            totalExercises={allExercises.length}
            completedCount={completed.length}
            favoritesCount={favorites.length}
            trainingsCount={trainingsCount}
            featuredExercise={featuredExercise}
            setActiveTab={setActiveTab}
            onSelectExercise={setSelectedExercise}
            onSelectCategory={(catId) => {
              setFilters({
                searchQuery: '',
                category: catId,
                objective: '',
                age: '',
                level: '',
                players: '',
                duration: '',
                intensity: '',
                space: '',
              });
              setCurrentPage(1);
              setActiveTab('ejercicios');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSearchQuery={(query) => {
              setFilters({
                searchQuery: query,
                category: '',
                objective: '',
                age: '',
                level: '',
                players: '',
                duration: '',
                intensity: '',
                space: '',
              });
              setCurrentPage(1);
              setActiveTab('ejercicios');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {/* TAB 2: EJERCICIOS (1.000 Biblioteca) */}
        {activeTab === 'ejercicios' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h1 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-emerald-400" />
                  <span>Biblioteca de 1.000 Ejercicios</span>
                </h1>
                <p className="text-xs text-gray-400">
                  Explora, filtra y encuentra la tarea perfecta para tu sesión en segundos.
                </p>
              </div>
            </div>

            {/* Filter Panel */}
            <ExerciseFilters
              filters={filters}
              setFilters={setFilters}
              totalMatches={filteredExercises.length}
              totalExercises={allExercises.length}
            />

            {/* Exercise Cards Grid */}
            {filteredExercises.length === 0 ? (
              <div className="p-12 text-center bg-[#09150e] rounded-2xl border border-emerald-900/50 space-y-3">
                <BookOpen className="w-10 h-10 text-emerald-600/40 mx-auto" />
                <h3 className="text-base font-bold text-white">No se encontraron ejercicios</h3>
                <p className="text-xs text-gray-400 max-w-sm mx-auto">
                  Prueba a ajustar tus filtros de búsqueda o restablecer los parámetros para ver más resultados.
                </p>
                <button
                  type="button"
                  onClick={() =>
                    setFilters({
                      searchQuery: '',
                      category: '',
                      objective: '',
                      age: '',
                      level: '',
                      players: '',
                      duration: '',
                      intensity: '',
                      space: '',
                    })
                  }
                  className="px-4 py-2 rounded-xl bg-emerald-500 text-black text-xs font-bold hover:bg-emerald-400 transition"
                >
                  Restablecer todos los filtros
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {currentExercises.map((exercise) => (
                    <ExerciseCard
                      key={exercise.id}
                      exercise={exercise}
                      isFavorite={favorites.includes(exercise.id)}
                      isCompleted={completed.includes(exercise.id)}
                      onToggleFavorite={(e) => {
                        e.stopPropagation();
                        handleToggleFavorite(exercise.id);
                      }}
                      onToggleCompleted={(e) => {
                        e.stopPropagation();
                        handleToggleCompleted(exercise.id);
                      }}
                      onSelect={setSelectedExercise}
                      onAddToTraining={(e, ex) => {
                        e.stopPropagation();
                        setExerciseForTrainingModal(ex);
                      }}
                      onAskFutIa={(e, ex) => {
                        e.stopPropagation();
                        handleOpenFutIa(ex);
                      }}
                    />
                  ))}
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-between border-t border-emerald-900/40 pt-4 text-xs">
                    <span className="text-gray-400">
                      Página <strong className="text-white">{currentPage}</strong> de {totalPages} ({filteredExercises.length} ejercicios)
                    </span>

                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                        disabled={currentPage === 1}
                        className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#0a1710] border border-emerald-900 text-gray-300 hover:text-white disabled:opacity-40 disabled:pointer-events-none transition"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        <span>Anterior</span>
                      </button>

                      {/* Numbered quick selector */}
                      <div className="hidden sm:flex items-center gap-1">
                        {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => {
                          const pageNum = i + 1;
                          return (
                            <button
                              key={pageNum}
                              type="button"
                              onClick={() => setCurrentPage(pageNum)}
                              className={`w-7 h-7 rounded-lg text-xs font-semibold transition ${
                                currentPage === pageNum
                                  ? 'bg-emerald-500 text-black font-bold'
                                  : 'bg-[#0a1710] text-gray-300 hover:text-white border border-emerald-950'
                              }`}
                            >
                              {pageNum}
                            </button>
                          );
                        })}
                        {totalPages > 7 && <span className="text-gray-500 px-1">...</span>}
                      </div>

                      <button
                        type="button"
                        onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#0a1710] border border-emerald-900 text-gray-300 hover:text-white disabled:opacity-40 disabled:pointer-events-none transition"
                      >
                        <span>Siguiente</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        )}

        {/* TAB 3: FAVORITOS */}
        {activeTab === 'favoritos' && (
          <div className="space-y-6">
            <div>
              <h1 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                <Heart className="w-6 h-6 text-red-500 fill-red-500" />
                <span>Mis Ejercicios Favoritos ({favoriteExercises.length})</span>
              </h1>
              <p className="text-xs text-gray-400">
                Tu selección personalizada de ejercicios guardados localmente para planificar rápido.
              </p>
            </div>

            {favoriteExercises.length === 0 ? (
              <div className="p-12 text-center bg-[#09150e] rounded-2xl border border-emerald-900/50 space-y-3">
                <Heart className="w-10 h-10 text-red-500/40 mx-auto" />
                <h3 className="text-base font-bold text-white">Aún no tienes ejercicios favoritos</h3>
                <p className="text-xs text-gray-400 max-w-sm mx-auto">
                  Haz clic en el icono de corazón en cualquier ejercicio para guardarlo en tu lista rápida.
                </p>
                <button
                  type="button"
                  onClick={() => setActiveTab('ejercicios')}
                  className="px-4 py-2 rounded-xl bg-emerald-500 text-black text-xs font-bold hover:bg-emerald-400 transition"
                >
                  Ir a los 1.000 ejercicios
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {favoriteExercises.map((exercise) => (
                  <ExerciseCard
                    key={exercise.id}
                    exercise={exercise}
                    isFavorite={true}
                    isCompleted={completed.includes(exercise.id)}
                    onToggleFavorite={(e) => {
                      e.stopPropagation();
                      handleToggleFavorite(exercise.id);
                    }}
                    onToggleCompleted={(e) => {
                      e.stopPropagation();
                      handleToggleCompleted(exercise.id);
                    }}
                    onSelect={setSelectedExercise}
                    onAddToTraining={(e, ex) => {
                      e.stopPropagation();
                      setExerciseForTrainingModal(ex);
                    }}
                    onAskFutIa={(e, ex) => {
                      e.stopPropagation();
                      handleOpenFutIa(ex);
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB: FUT IA - INTELIGÊNCIA ARTIFICIAL PARA EXERCÍCIOS DE FUTEBOL */}
        {activeTab === 'fut-ia' && (
          <FutIaView
            initialExercise={exerciseForFutIa}
            onSelectExercise={setSelectedExercise}
          />
        )}

        {/* TAB: PREPARACIÓN FÍSICA INTEGRAL (AL LADO DE 1.000 EJERCICIOS) */}
        {activeTab === 'preparacion-fisica' && (
          <PreparacionFisicaView
            onSelectExercise={setSelectedExercise}
            onToggleFavorite={handleToggleFavorite}
            onToggleCompleted={handleToggleCompleted}
            favorites={favorites}
            completed={completed}
            onAddToTraining={(ex) => setExerciseForTrainingModal(ex)}
          />
        )}

        {/* TAB 4: ENTRENAMIENTOS (Sesiones) */}
        {activeTab === 'entrenamientos' && (
          <TrainingView onSelectExercise={setSelectedExercise} />
        )}
      </main>

      {/* Bottom Mobile Navigation */}
      <BottomNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        favoritesCount={favorites.length}
      />

      {/* Exercise Detail Modal */}
      <ExerciseDetailModal
        exercise={selectedExercise}
        onClose={() => setSelectedExercise(null)}
        isFavorite={selectedExercise ? favorites.includes(selectedExercise.id) : false}
        isCompleted={selectedExercise ? completed.includes(selectedExercise.id) : false}
        onToggleFavorite={handleToggleFavorite}
        onToggleCompleted={handleToggleCompleted}
        onAddToTraining={(ex) => {
          setExerciseForTrainingModal(ex);
        }}
        onAskFutIa={handleOpenFutIa}
      />

      {/* Add To Training Session Modal */}
      <AddToTrainingModal
        exercise={exerciseForTrainingModal}
        isOpen={!!exerciseForTrainingModal}
        onClose={() => setExerciseForTrainingModal(null)}
        onSuccess={(msg) => showToast(msg)}
      />
    </div>
  );
}
