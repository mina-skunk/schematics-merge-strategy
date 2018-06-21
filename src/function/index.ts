import { strings } from '@angular-devkit/core';
import { Rule, Source, apply, url, template, mergeWith, MergeStrategy } from '@angular-devkit/schematics';
import { Schema as FunctionOptions } from './schema';

export default function (options: FunctionOptions): Rule {

  const templateSource: Source = apply(
    url('./files'),
    [
      template({
        ...strings,
        ...options,
      })
    ]
  );

  return mergeWith(templateSource, MergeStrategy.Overwrite);

}
