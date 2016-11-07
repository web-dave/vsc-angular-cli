'use strict';

import * as vscode from 'vscode';
import { runNgCommand } from './run'

export var ngdoc = vscode.commands.registerCommand('extension.ngDoc', () => {
    vscode.window.showInputBox({ placeHolder: 'search for' }).then(
        (data) => {
            runNgCommand(['doc', data], false);
        }
    )
});
