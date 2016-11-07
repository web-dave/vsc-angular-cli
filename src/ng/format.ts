'use strict';

import * as vscode from 'vscode';
import { runNgCommand } from './run'

export var ngformat = vscode.commands.registerCommand('extension.ngFormat', () => {
    runNgCommand(['format'], true);
});