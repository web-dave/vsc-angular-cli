'use strict';

import * as vscode from 'vscode';
import { runNgCommand } from './run'

export var nglint = vscode.commands.registerCommand('extension.ngLint', () => {
    runNgCommand(['lint'], true);
});
