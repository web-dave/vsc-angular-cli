'use strict';

import * as vscode from 'vscode';
import { runNgCommand } from './run'

export var nginit = vscode.commands.registerCommand('extension.ngInit', () => {
    let project = vscode.window.showInputBox({ placeHolder: 'any options?' }).then(
        (data) => {
            runNgCommand(['init', data], true);
        }
    )
});