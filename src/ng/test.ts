'use strict';

import * as vscode from 'vscode';
import { runNgCommand } from './run'

export var ngtest = vscode.commands.registerCommand('extension.ngTest', () => {
    runNgCommand(['test'], false);
});