'use strict';

import * as vscode from 'vscode';

import { runNgCommand } from './ng/run';
import { ngnew } from './ng/new';
import { ngversion } from './ng/version';
import { ngserve } from './ng/serve';
import { ngbuild } from './ng/build';
import { ngdoc } from './ng/doc';
import { nglint } from './ng/lint';
import { ngcompletion } from './ng/completion';
import { nge2e } from './ng/e2e';
import { ngformat } from './ng/format';
import { ngtest } from './ng/test';
import { nggenerate } from './ng/generate';
import { nghelp } from './ng/help';

// import { ngset } from './ng/set';
// import { ngdeploy } from './ng/deploy';
// import { ngget } from './ng/get';

let outputChannel: vscode.OutputChannel;

export function activate(context: vscode.ExtensionContext) {

    registerCommands(context);
    outputChannel = vscode.window.createOutputChannel('ng');
    context.subscriptions.push(outputChannel);
}

function registerCommands(context: vscode.ExtensionContext) {

    context.subscriptions.push(ngnew);
    context.subscriptions.push(ngversion);
    context.subscriptions.push(ngserve);
    context.subscriptions.push(ngbuild);
    context.subscriptions.push(ngdoc);
    context.subscriptions.push(nglint);
    context.subscriptions.push(ngformat);
    context.subscriptions.push(nge2e);
    context.subscriptions.push(ngcompletion);
    context.subscriptions.push(nggenerate);
    context.subscriptions.push(ngtest);
    context.subscriptions.push(nghelp);

    // context.subscriptions.push(ngset);
    // context.subscriptions.push(ngget);
    // context.subscriptions.push(ngdeploy);

}
