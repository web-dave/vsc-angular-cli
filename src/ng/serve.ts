'use strict';

import * as vscode from 'vscode';
import { runNgCommand } from './run'

export var ngserve = vscode.commands.registerCommand('extension.ngServe', () => {
    runNgCommand(['serve'], true);
});