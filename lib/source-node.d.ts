import { SourceMapConsumer, MappedPosition, StartOfSourceMap } from './source-map-consumer'
import { SourceMapGenerator } from './source-map-generator'

export interface CodeWithSourceMap {
  code: string;
  map: SourceMapGenerator;
}

export class SourceNode {
  constructor();
  constructor(line: number, column: number, source: string);
  constructor(line: number, column: number, source: string, chunk?: string, name?: string);
  public static fromStringWithSourceMap(code: string, sourceMapConsumer: SourceMapConsumer, relativePath?: string): SourceNode;
  public add(chunk: string): void;
  public prepend(chunk: string): void;
  public setSourceContent(sourceFile: string, sourceContent: string): void;
  public walk(fn: (chunk: string, mapping: MappedPosition) => void): void;
  public walkSourceContents(fn: (file: string, content: string) => void): void;
  public join(sep: string): SourceNode;
  public replaceRight(pattern: string, replacement: string): SourceNode;
  public toString(): string;
  public toStringWithSourceMap(startOfSourceMap?: StartOfSourceMap): CodeWithSourceMap;
}
