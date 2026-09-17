import { CategoryId, AgeGroup, SkillLevel, IntensityLevel, SpaceSize, PlayerGroup } from '../src/types';

export interface DrillTheme {
  name: string;
  focus: string;
  drillType: string;
  primaryAction: string;
  technicalKey: string;
  tacticalKey: string;
  spaceDesc: string;
  spaceType: SpaceSize;
  materialsDesc: string;
  playersMin: number;
  playersMax: number;
  playersLabel: PlayerGroup;
  duration: string;
  durationMins: number;
  intensity: IntensityLevel;
  level: SkillLevel;
  age: AgeGroup;
  steps: string[];
  coachingPoints: string[];
  commonErrors: string[];
  corrections: string[];
  variationEasy: string;
  variationHard: string;
  progression: string;
  regression: string;
  positions: string;
  tags: string[];
}
