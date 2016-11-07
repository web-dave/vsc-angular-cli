'use strict';

import * as vscode from 'vscode';
import * as cp from 'child_process';
import { runInTerminal } from 'run-in-terminal';


let outputChannel: vscode.OutputChannel;

export function runNgCommand(args: string[], useTerminal?: boolean): void {

    let cwd = vscode.workspace.rootPath;

    if (useTerminal) {
        runCommandInTerminal(args, cwd);
    } else {
        runCommandInOutputWindow(args, cwd);
    }
}

function showOutput(): void {
    outputChannel.show(vscode.ViewColumn.Three);
}

function runCommandInTerminal(args: string[], cwd: string): void {
    runInTerminal('ng', args, { cwd: cwd, env: process.env });
}


function runCommandInOutputWindow(args: string[], cwd: string) {
    let cmd = 'ng ' + args.join(' ');
    let p = cp.exec(cmd, { cwd: cwd, env: process.env });
    p.stderr.on('data', (data: string) => {
        outputChannel.append(data);
    });
    p.stdout.on('data', (data: string) => {
        outputChannel.append(data);
    });
    showOutput();
}
