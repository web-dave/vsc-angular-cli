'use strict';

import * as vscode from 'vscode';
import * as cp from 'child_process';

export var ngdeploy = vscode.commands.registerCommand('extension.ngDeploy', () => {
    let child = cp.exec('ng github-pages:deploy');
    child.stdout.on('data', (data) => {
        vscode.window.showInformationMessage(data);
    });
});