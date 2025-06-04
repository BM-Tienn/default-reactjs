/**
 * Component Generator
 */

import { Actions, PlopGeneratorConfig } from 'node-plop';
import inquirer from 'inquirer';

import { pathExists } from '../utils';
import { baseGeneratorPath } from '../paths';

inquirer.registerPrompt('directory', require('inquirer-directory'));

export const enum ComponentProptNames {
  componentName = 'componentName',
  path = 'path',
  wantMemo = 'wantMemo',
  wantStyledComponents = 'wantStyledComponents',
  wantTranslations = 'wantTranslations',
  wantLoadable = 'wantLoadable',
  wantSaga = 'wantSaga',
}

type Answers = { [P in ComponentProptNames]: string };

export const componentGenerator: PlopGeneratorConfig = {
  description: 'Add a component',
  prompts: [
    {
      type: 'input',
      name: ComponentProptNames.componentName,
      message: 'What should it be called?',
    },
    {
      type: 'directory',
      name: ComponentProptNames.path,
      message: 'Where do you want it to be created?',
      basePath: `${baseGeneratorPath}`,
    } as any,
    {
      type: 'confirm',
      name: ComponentProptNames.wantMemo,
      default: false,
      message: 'Do you want to wrap your component in React.memo?',
    },
    {
      type: 'confirm',
      name: ComponentProptNames.wantStyledComponents,
      default: true,
      message: 'Do you want to use styled-components?',
    },
    {
      type: 'confirm',
      name: ComponentProptNames.wantLoadable,
      default: false,
      message: 'Do you want to load the component asynchronously?',
    },
    {
      type: 'confirm',
      name: ComponentProptNames.wantSaga,
      default: false,
      message: 'Do you want to add saga import signal?',
    },
  ],
  actions: data => {
    const answers = data as Answers;

    const componentPath = `${baseGeneratorPath}/${answers.path}/{{properCase ${ComponentProptNames.componentName}}}`;
    const actualComponentPath = `${baseGeneratorPath}/${answers.path}/${answers.componentName}`;

    if (pathExists(actualComponentPath)) {
      throw new Error(`Component '${answers.componentName}' already exists`);
    }
    const actions: Actions = [
      {
        type: 'add',
        path: `${componentPath}/index.tsx`,
        templateFile: './component/index.tsx.hbs',
        abortOnFail: true,
      },
    ];

    if (answers.wantStyledComponents) {
      actions.push({
        type: 'add',
        path: `${componentPath}/styled.ts`,
        templateFile: './component/styled.ts.hbs',
        abortOnFail: true,
      });
    }

    if (answers.wantLoadable) {
      actions.push({
        type: 'add',
        path: `${componentPath}/Loadable.ts`,
        templateFile: './component/loadable.ts.hbs',
        abortOnFail: true,
      });
    }

    // actions.push({
    //   type: 'prettify',
    //   data: { path: `${actualComponentPath}/**` },
    // });

    return actions;
  },
};
