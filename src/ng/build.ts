'use strict';

import * as vscode from 'vscode';
import { runNgCommand } from './run'

export var ngbuild = vscode.commands.registerCommand('extension.ngBuild', () => {
    vscode.window.showInputBox({ placeHolder: 'Enter optional paramaters if any, example --target=production --environment=prod' })
                 .then((optionalParams = '') => {
                    runNgCommand([`build ${optionalParams}`], true);
                 });
                
});