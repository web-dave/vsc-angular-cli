'use strict';

import * as vscode from 'vscode';
import { runNgCommand } from './run'

export var nghelp = vscode.commands.registerCommand('extension.ngHelp', () => {
        let param: string[] = ['help']
        runNgCommand(param, true);
    });