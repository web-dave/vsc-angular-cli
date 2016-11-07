'use strict';

import * as vscode from 'vscode';
import { runNgCommand } from './run'

export var ngversion = vscode.commands.registerCommand('extension.ngVersion', () => {
    runNgCommand(['version'], true);
});