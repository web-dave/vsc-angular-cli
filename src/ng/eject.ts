'use strict';

import * as vscode from 'vscode';
import { runNgCommand } from './run'

export var ngeject = vscode.commands.registerCommand('extension.ngEject', () => {
    runNgCommand(['eject'], true);
});

