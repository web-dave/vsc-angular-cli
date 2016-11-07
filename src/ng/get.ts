'use strict';

import * as vscode from 'vscode';
import * as cp from 'child_process';

export var ngget = vscode.commands.registerCommand('extension.ngGet', () => {
    vscode.window.showInputBox({ placeHolder: 'name of the Parameter' }).then(
        (name) => {
            let child = cp.exec('ng get ' + name);
            child.stdout.on('data', (data) => {
                console.log('data', data);
                vscode.window.showInformationMessage(data);
            });
        }
    );
});