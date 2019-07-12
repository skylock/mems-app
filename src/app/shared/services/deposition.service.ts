import { Injectable } from '@angular/core';

export class Deposition {
  id: number;
  label: string;
  material: string;
  current: number;
  argonFlow: number;
  nitrogenFlow: number;
  pressure: number;
  distanceTargetSample: number;
  time: number;
  temperature: number;
  roughness: number;
  adhesion: number;
  intermediateLayer: boolean;
}

const results: Deposition[] = [
  {
    id: 1,
    label: 'CrN1',
    material: 'CrN',
    current: 500,
    argonFlow: 40,
    nitrogenFlow: 1,
    pressure: 2,
    distanceTargetSample: 60,
    time: 10,
    temperature: 200,
    roughness: 3.158,
    adhesion: 61,
    intermediateLayer: false
  },
  {
    id: 2,
    label: 'CrN2',
    material: 'CrN',
    current: 500,
    argonFlow: 40,
    nitrogenFlow: 2,
    pressure: 2.1,
    distanceTargetSample: 60,
    time: 10,
    temperature: 200,
    roughness: 1.776,
    adhesion: 66.2,
    intermediateLayer: false
  },
  {
    id: 3,
    label: 'CrN3',
    material: 'CrN',
    current: 500,
    argonFlow: 40,
    nitrogenFlow: 4,
    pressure: 2.2,
    distanceTargetSample: 60,
    time: 10,
    temperature: 200,
    roughness: 1.077,
    adhesion: 72.01,
    intermediateLayer: false
  },
  {
    id: 4,
    label: 'CrN4',
    material: 'CrN',
    current: 500,
    argonFlow: 40,
    nitrogenFlow: 4,
    pressure: 2.2,
    distanceTargetSample: 60,
    time: 10,
    temperature: 36,
    roughness: 1.652,
    adhesion: 100.42,
    intermediateLayer: false
  },
  {
    id: 5,
    label: 'CrN5',
    material: 'CrN',
    current: 500,
    argonFlow: 40,
    nitrogenFlow: 6,
    pressure: 2.3,
    distanceTargetSample: 60,
    time: 10,
    temperature: 200,
    roughness: 1.589,
    adhesion: 108.91,
    intermediateLayer: false
  },
  {
    id: 6,
    label: 'CrN6',
    material: 'CrN',
    current: 500,
    argonFlow: 40,
    nitrogenFlow: 2,
    pressure: 2.2,
    distanceTargetSample: 60,
    time: 10,
    temperature: 33,
    roughness: 1.155,
    adhesion: 136.89,
    intermediateLayer: false
  },
  {
    id: 7,
    label: 'CrN7',
    material: 'CrN',
    current: 500,
    argonFlow: 40,
    nitrogenFlow: 6,
    pressure: 2.2,
    distanceTargetSample: 60,
    time: 10,
    temperature: 26,
    roughness: 1.994,
    adhesion: 80.7,
    intermediateLayer: false
  },
  {
    id: 8,
    label: 'TiN1',
    material: 'TiN',
    current: 350,
    argonFlow: 40,
    nitrogenFlow: 1.2,
    pressure: 1,
    distanceTargetSample: 60,
    time: 20,
    temperature: 22,
    roughness: 1.206,
    adhesion: 11.15,
    intermediateLayer: false
  },
  {
    id: 9,
    label: 'TiN2',
    material: 'TiN',
    current: 350,
    argonFlow: 40,
    nitrogenFlow: 1.2,
    pressure: 1,
    distanceTargetSample: 60,
    time: 20,
    temperature: 22,
    roughness: 0.968,
    adhesion: 9.1,
    intermediateLayer: true
  },
  {
    id: 10,
    label: 'TiN3',
    material: 'TiN',
    current: 350,
    argonFlow: 40,
    nitrogenFlow: 1.2,
    pressure: 1,
    distanceTargetSample: 60,
    time: 10,
    temperature: 22,
    roughness: 0.695,
    adhesion: 27.63,
    intermediateLayer: false
  },
  {
    id: 11,
    label: 'TiN4',
    material: 'TiN',
    current: 350,
    argonFlow: 40,
    nitrogenFlow: 1.2,
    pressure: 1,
    distanceTargetSample: 60,
    time: 40,
    temperature: 22,
    roughness: 1.375,
    adhesion: 13.73,
    intermediateLayer: false
  },
  {
    id: 12,
    label: 'TiN5',
    material: 'TiN',
    current: 350,
    argonFlow: 40,
    nitrogenFlow: 1.2,
    pressure: 1,
    distanceTargetSample: 60,
    time: 20,
    temperature: 300,
    roughness: 0.701,
    adhesion: 12.09,
    intermediateLayer: false
  },
  {
    id: 13,
    label: 'TiN6',
    material: 'TiN',
    current: 350,
    argonFlow: 40,
    nitrogenFlow: 1.2,
    pressure: 1,
    distanceTargetSample: 60,
    time: 20,
    temperature: 300,
    roughness: 0.964,
    adhesion: 24.4,
    intermediateLayer: true
  },
  {
    id: 14,
    label: 'TiN7',
    material: 'TiN',
    current: 350,
    argonFlow: 40,
    nitrogenFlow: 1.2,
    pressure: 1,
    distanceTargetSample: 60,
    time: 20,
    temperature: 500,
    roughness: 0.558,
    adhesion: 17.24,
    intermediateLayer: false
  },
  {
    id: 15,
    label: 'NbN1',
    material: 'NbN',
    current: 300,
    argonFlow: 40,
    nitrogenFlow: 0.25,
    pressure: 2.2,
    distanceTargetSample: 60,
    time: 20,
    temperature: 23,
    roughness: 0.531,
    adhesion: 79.84,
    intermediateLayer: false
  },
  {
    id: 16,
    label: 'NbN2',
    material: 'NbN',
    current: 300,
    argonFlow: 40,
    nitrogenFlow: 0.75,
    pressure: 2.2,
    distanceTargetSample: 60,
    time: 20,
    temperature: 23,
    roughness: 0.679,
    adhesion: 67.04,
    intermediateLayer: false
  },
  {
    id: 17,
    label: 'NbN3',
    material: 'NbN',
    current: 300,
    argonFlow: 40,
    nitrogenFlow: 1.25,
    pressure: 2.2,
    distanceTargetSample: 60,
    time: 20,
    temperature: 23,
    roughness: 0.456,
    adhesion: 45.67,
    intermediateLayer: false
  },
  {
    id: 18,
    label: 'NbN4',
    material: 'NbN',
    current: 300,
    argonFlow: 40,
    nitrogenFlow: 1.75,
    pressure: 2.2,
    distanceTargetSample: 60,
    time: 20,
    temperature: 23,
    roughness: 1.252,
    adhesion: 35.29,
    intermediateLayer: false
  }
];

@Injectable()
export class DepositionService {
  getResults(): Deposition[] {
    return results;
  }
}
