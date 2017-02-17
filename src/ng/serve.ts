'use strict';

import * as vscode from 'vscode';
import { runNgCommand } from './run'

export var ngserve = vscode.commands.registerCommand('extension.ngServe', () => {
    vscode.window.showInputBox({ placeHolder: 'Enter optional paramaters if any, example --port 4201 --host 0.0.0.0' })
                 .then((optionalParams = '') => {
                    runNgCommand([`serve ${optionalParams}`], true);
                 });
                
});