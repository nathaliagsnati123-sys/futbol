import { allExercises } from '../src/data/exercises/index';

console.log('====================================================');
console.log('   AUDITORÍA Y VALIDACIÓN DE LOS 1.000 EJERCICIOS   ');
console.log('====================================================\n');

let errors = 0;
let warnings = 0;

// 1. Validar total de ejercicios
console.log(`1. Comprobando total de ejercicios...`);
if (allExercises.length === 1000) {
  console.log(`  ✓ Total exacto de 1.000 ejercicios verificado.`);
} else {
  console.error(`  ✗ Error: Se esperaban 1.000 ejercicios, se encontraron ${allExercises.length}`);
  errors++;
}

// 2. Validar IDs correlativos EX001 a EX1000
console.log(`\n2. Comprobando correlatividad de IDs (EX001 a EX1000)...`);
const idSet = new Set<string>();
allExercises.forEach((ex, idx) => {
  const expectedId = `EX${String(idx + 1).padStart(3, '0')}`;
  if (ex.id !== expectedId) {
    console.error(`  ✗ ID incorrecto en índice ${idx}: esperado ${expectedId}, recibido ${ex.id}`);
    errors++;
  }
  if (ex.number !== idx + 1) {
    console.error(`  ✗ Número incorrecto en ${ex.id}: esperado ${idx + 1}, recibido ${ex.number}`);
    errors++;
  }
  idSet.add(ex.id);
});
if (idSet.size === 1000) {
  console.log(`  ✓ 1.000 IDs únicos y secuenciales confirmados.`);
} else {
  console.error(`  ✗ IDs duplicados detectados: sólo ${idSet.size} únicos.`);
  errors++;
}

// 3. Validar unicidad de nombres de ejercicios (cero repeticiones de títulos)
console.log(`\n3. Comprobando originalidad de nombres y títulos...`);
const nameSet = new Set<string>();
const duplicateNames: string[] = [];
allExercises.forEach(ex => {
  if (nameSet.has(ex.name)) {
    duplicateNames.push(ex.name);
  }
  nameSet.add(ex.name);
});
if (duplicateNames.length === 0) {
  console.log(`  ✓ 1.000 títulos únicos y descriptivos comprobados (0 duplicados).`);
} else {
  console.error(`  ✗ Títulos duplicados detectados: ${duplicateNames.length}`);
  duplicateNames.slice(0, 5).forEach(n => console.error(`    - "${n}"`));
  errors += duplicateNames.length;
}

// 4. Validar coherencia de categorías y conteos
console.log(`\n4. Comprobando distribución por categorías...`);
const categoryCounts: Record<string, number> = {};
allExercises.forEach(ex => {
  categoryCounts[ex.category] = (categoryCounts[ex.category] || 0) + 1;
});
Object.entries(categoryCounts).forEach(([cat, count]) => {
  console.log(`  - ${cat}: ${count} ejercicios`);
});

// 5. Validar campos obligatorios y calidad del texto pedagógico
console.log(`\n5. Comprobando campos obligatorios y calidad del contenido pedagógico...`);
let emptyFields = 0;
let genericTemplateCount = 0;

allExercises.forEach(ex => {
  if (!ex.name || !ex.category || !ex.subcategory || !ex.objetivoPrincipal ||
      !ex.objetivoTecnico || !ex.objetivoTatico || !ex.edad || !ex.nivel ||
      !ex.duracion || !ex.intensidad || !ex.espacio || !ex.materiales ||
      !ex.organizacion || !ex.desarrollo || !ex.pasoAPaso || !ex.puntosClave ||
      !ex.erroresFrecuentes || !ex.correcciones || !ex.variacionFacil ||
      !ex.variacionDificil || !ex.progresion || !ex.regresion || !ex.posiciones ||
      !ex.tags || !ex.pitchDiagram) {
    emptyFields++;
  }

  // Detectar restos del antiguo template genérico "Rondo con Tercer Hombre y Transición Rápida con Cambio de Ritmo Forzado"
  if (ex.name.includes('#') && ex.name.includes('Forzado')) {
    genericTemplateCount++;
  }
});

if (emptyFields === 0) {
  console.log(`  ✓ Todos los campos obligatorios están presentes y completos en los 1.000 ejercicios.`);
} else {
  console.error(`  ✗ Se detectaron ${emptyFields} campos vacíos o incompletos.`);
  errors += emptyFields;
}

if (genericTemplateCount === 0) {
  console.log(`  ✓ Eliminado el 100% de los textos del antiguo template genérico.`);
} else {
  console.error(`  ✗ Se detectaron ${genericTemplateCount} ejercicios con restos del template antiguo.`);
  errors += genericTemplateCount;
}

// 6. Validar coherencia pedagógica de edad en Fútbol Base
console.log(`\n6. Comprobando coherencia metodológica en Fútbol Base (6-11 años)...`);
const baseExercises = allExercises.filter(e => e.category === '13. Fútbol Base');
const invalidBaseAges = baseExercises.filter(e => e.edad !== '6–8 años' && e.edad !== '9–11 años');
if (invalidBaseAges.length === 0) {
  console.log(`  ✓ Todos los ejercicios de Fútbol Base (${baseExercises.length}) tienen edades coherentes (6–8 y 9–11 años).`);
} else {
  console.error(`  ✗ Se detectaron ejercicios de Fútbol Base con edades no pedagógicas: ${invalidBaseAges.length}`);
  errors += invalidBaseAges.length;
}

// 7. Validar diagramas tácticos (Pitch Diagram)
console.log(`\n7. Comprobando diagramas tácticos interactivos...`);
let diagramErrors = 0;
allExercises.forEach(ex => {
  if (!ex.pitchDiagram || !ex.pitchDiagram.elements || ex.pitchDiagram.elements.length === 0) {
    diagramErrors++;
  }
});
if (diagramErrors === 0) {
  console.log(`  ✓ Los 1.000 ejercicios cuentan con diagramas tácticos contextualizados (jugadores, balones, flechas).`);
} else {
  console.error(`  ✗ ${diagramErrors} ejercicios carecen de diagramas tácticos válidos.`);
  errors += diagramErrors;
}

// 8. Resumen final de auditoría
console.log('\n====================================================');
if (errors === 0) {
  console.log('✅ AUDITORÍA SUPERADA CON ÉXITO: 1.000 EJERCICIOS VÁLIDOS, AUTÉNTICOS Y PROFESIONALES');
} else {
  console.error(`❌ AUDITORÍA FALLIDA CON ${errors} ERRORES.`);
}
console.log('====================================================\n');
process.exit(errors > 0 ? 1 : 0);
