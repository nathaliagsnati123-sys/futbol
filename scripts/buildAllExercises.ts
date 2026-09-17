import * as fs from 'fs';
import * as path from 'path';
import { Exercise } from '../src/types';
import { generateCategory1to4 } from './categoryGen1';
import { generateCategory5to8 } from './categoryGen2';
import { generateCategory9to12 } from './categoryGen3';
import { generateCategory13to16 } from './categoryGen4';

console.log('--- Starting Generation of 1,000 Authentic Football Exercises ---');

const part1 = generateCategory1to4();
const part2 = generateCategory5to8();
const part3 = generateCategory9to12();
const part4 = generateCategory13to16();

const all: Exercise[] = [...part1, ...part2, ...part3, ...part4];

console.log(`Total exercises compiled: ${all.length}`);

if (all.length !== 1000) {
  console.error(`Error: Expected exactly 1000 exercises, but got ${all.length}`);
  process.exit(1);
}

// Check IDs
for (let i = 0; i < 1000; i++) {
  const expectedId = `EX${String(i + 1).padStart(3, '0')}`;
  if (all[i].id !== expectedId) {
    console.error(`Mismatch at index ${i}: expected ${expectedId}, got ${all[i].id}`);
    process.exit(1);
  }
}

console.log('All 1,000 exercise IDs verified cleanly from EX001 to EX1000.');

// Output directory
const outDir = path.join(process.cwd(), 'src/data/exercises');

const batches = [
  { start: 0, end: 100, varName: 'exercises_1', fileName: 'exercises-001-100.ts' },
  { start: 100, end: 200, varName: 'exercises_2', fileName: 'exercises-101-200.ts' },
  { start: 200, end: 300, varName: 'exercises_3', fileName: 'exercises-201-300.ts' },
  { start: 300, end: 400, varName: 'exercises_4', fileName: 'exercises-301-400.ts' },
  { start: 400, end: 500, varName: 'exercises_5', fileName: 'exercises-401-500.ts' },
  { start: 500, end: 600, varName: 'exercises_6', fileName: 'exercises-501-600.ts' },
  { start: 600, end: 700, varName: 'exercises_7', fileName: 'exercises-601-700.ts' },
  { start: 700, end: 800, varName: 'exercises_8', fileName: 'exercises-701-800.ts' },
  { start: 800, end: 900, varName: 'exercises_9', fileName: 'exercises-801-900.ts' },
  { start: 900, end: 1000, varName: 'exercises_10', fileName: 'exercises-901-1000.ts' },
];

for (const batch of batches) {
  const batchExercises = all.slice(batch.start, batch.end);
  const filePath = path.join(outDir, batch.fileName);
  
  const fileContent = `import { Exercise } from '../../types';

export const ${batch.varName}: Exercise[] = ${JSON.stringify(batchExercises, null, 2)};
`;

  fs.writeFileSync(filePath, fileContent, 'utf-8');
  console.log(`Saved ${batch.fileName} with ${batchExercises.length} exercises (${batchExercises[0].id} to ${batchExercises[batchExercises.length - 1].id})`);
}

console.log('All 10 exercise files successfully written!');
