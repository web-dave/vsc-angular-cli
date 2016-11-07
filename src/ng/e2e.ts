'use strict';

import * as vscode from 'vscode';
import { runNgCommand } from './run'

export var nge2e = vscode.commands.registerCommand('extension.ngE2e', () => {
    runNgCommand(['e2e'], true);
});