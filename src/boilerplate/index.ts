import { Rule, url, mergeWith, chain, MergeStrategy } from '@angular-devkit/schematics';

export function index(): Rule {
  return chain([
    simpleMerge()
  ]);
}

function simpleMerge(): Rule {
  const source = url('./files');
  return mergeWith(source, MergeStrategy.Overwrite);
}
