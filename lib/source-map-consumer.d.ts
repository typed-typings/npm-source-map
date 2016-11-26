export interface StartOfSourceMap {
  file?: string;
  sourceRoot?: string;
}

export interface RawSourceMap extends StartOfSourceMap {
  version: number;
  sources: string[];
  names: string[];
  sourcesContent?: string[];
  mappings: string;
}

export interface Position {
  line: number;
  column: number;
}

export interface MappedPosition extends Position {
  source: string;
  name?: string;
}

export interface MappingItem {
  source: string;
  generatedLine: number;
  generatedColumn: number;
  originalLine: number;
  originalColumn: number;
  name: string;
}

export class SourceMapConsumer {
  static GENERATED_ORDER: number;
  static ORIGINAL_ORDER: number;

  sourceRoot: string;
  sourcesContent: string[];
  file: string;
  readonly sources: string[];

  constructor(rawSourceMap: RawSourceMap);
  originalPositionFor(generatedPosition: Position): MappedPosition;
  generatedPositionFor(originalPosition: MappedPosition): Position;
  sourceContentFor(source: string): string;
  eachMapping(callback: (mapping: MappingItem) => void, context?: any, order?: number): void;
}
