'use strict';

import * as vscode from 'vscode';
import { runNgCommand } from './run'

export var ngnew = vscode.commands.registerCommand('extension.ngNew', () => {
    let project = vscode.window.showInputBox({ placeHolder: 'name of your project' }).then(
        (data) => {
            runNgCommand(['new', data], true);
        }
    )
});
