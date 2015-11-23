import { StartOfSourceMap, SourceMapConsumer } from './source-map-consumer'

export interface Mapping {
  generated: Position;
  original: Position;
  source: string;
  name?: string;
}

export class SourceMapGenerator {
  constructor(startOfSourceMap?: StartOfSourceMap);
  public static fromSourceMap(sourceMapConsumer: SourceMapConsumer): SourceMapGenerator;
  public addMapping(mapping: Mapping): void;
  public setSourceContent(sourceFile: string, sourceContent: string): void;
  public applySourceMap(sourceMapConsumer: SourceMapConsumer, sourceFile?: string, sourceMapPath?: string): void;
  public toString(): string;
}
