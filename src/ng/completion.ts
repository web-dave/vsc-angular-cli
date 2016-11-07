'use strict';

import * as vscode from 'vscode';
import { runNgCommand } from './run'

export var ngcompletion = vscode.commands.registerCommand('extension.ngCompletion', () => {
    runNgCommand(['completion'], false);
});
