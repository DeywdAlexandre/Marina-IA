import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Terminal, X, Minimize2, Maximize2, RotateCcw } from 'lucide-react';

/**
 * Simulador de Terminal PowerShell.
 * 
 * Comandos conhecidos retornam saída simulada instantaneamente.
 * Comandos desconhecidos podem ser avaliados pela IA (opcional).
 */

// Saídas simuladas para comandos comuns
const SIMULATED_OUTPUTS: Record<string, string | (() => string)> = {
  'get-date': () => {
    const now = new Date();
    const dias = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
    return `\n${dias[now.getDay()]}, ${now.toLocaleDateString('pt-BR')} ${now.toLocaleTimeString('pt-BR')}\n`;
  },
  'get-host': () => `\nName             : ConsoleHost\nVersion          : 7.4.6\nInstanceId       : ${crypto.randomUUID().slice(0, 8)}\nUI               : System.Management.Automation.Internal.Host.InternalHostUserInterface\n`,
  '$psversiontable': `\nName                           Value\n----                           -----\nPSVersion                      7.4.6\nPSEdition                      Core\nGitCommitId                    7.4.6\nOS                             Microsoft Windows 10.0.22631\nPlatform                       Win32NT\nPSCompatibleVersions           {1.0, 2.0, 3.0, 4.0, 5.0, 5.1, 6.0, 7.0}\nPSRemotingProtocolVersion      2.3\nSerializationVersion           1.1.0.1\nWSManStackVersion              3.0\n`,
  '$psversiontable.psversion': `\nMajor  Minor  Patch  PreReleaseLabel BuildLabel\n-----  -----  -----  --------------- ----------\n7      4      6\n`,
  '$pshome': `\nC:\\Program Files\\PowerShell\\7\n`,
  'cls': '__CLEAR__',
  'clear': '__CLEAR__',
  'clear-host': '__CLEAR__',
  'get-process | select-object -first 5 name, cpu': `\nName                CPU(s)\n----                ------\nchrome              234.54\nexplorer             12.09\nCode                 98.72\nSpotify              45.23\nDiscord              23.81\n`,
  'get-process': () => {
    const procs = [
      { name: 'chrome', cpu: (Math.random() * 300).toFixed(1), mem: (Math.random() * 500 + 100).toFixed(0) },
      { name: 'explorer', cpu: (Math.random() * 50).toFixed(1), mem: (Math.random() * 100 + 30).toFixed(0) },
      { name: 'Code', cpu: (Math.random() * 200).toFixed(1), mem: (Math.random() * 400 + 100).toFixed(0) },
      { name: 'Spotify', cpu: (Math.random() * 100).toFixed(1), mem: (Math.random() * 200 + 50).toFixed(0) },
      { name: 'svchost', cpu: (Math.random() * 20).toFixed(1), mem: (Math.random() * 80 + 10).toFixed(0) },
      { name: 'PowerShell', cpu: (Math.random() * 10).toFixed(1), mem: (Math.random() * 60 + 20).toFixed(0) },
    ];
    let out = '\n Handles  NPM(K)    PM(K)     WS(K)  CPU(s)   Id  SI ProcessName\n -------  ------    -----     -----  ------   --  -- -----------\n';
    procs.forEach(p => {
      out += `    ${Math.floor(Math.random() * 900 + 100)}      ${Math.floor(Math.random() * 40 + 5)}    ${p.mem}     ${(Number(p.mem) * 1.2).toFixed(0)}  ${p.cpu}   ${Math.floor(Math.random() * 9000 + 1000)}   1 ${p.name}\n`;
    });
    return out;
  },
  'get-service | select-object -first 5': `\nStatus   Name               DisplayName\n------   ----               -----------\nRunning  AudioSrv           Windows Audio\nStopped  BITS               Background Intelligent Transfer Ser...\nRunning  BrokerInfrastru... Background Tasks Infrastructure Ser...\nRunning  CryptSvc           Cryptographic Services\nRunning  Dhcp               DHCP Client\n`,
  'get-childitem': () => `\n    Directory: C:\\Users\\Aluno\n\nMode                 LastWriteTime         Length Name\n----                 -------------         ------ ----\nd-----        ${new Date().toLocaleDateString('pt-BR')}  10:30          Desktop\nd-----        ${new Date().toLocaleDateString('pt-BR')}  10:30          Documents\nd-----        ${new Date().toLocaleDateString('pt-BR')}  10:30          Downloads\nd-----        ${new Date().toLocaleDateString('pt-BR')}  10:30          Music\nd-----        ${new Date().toLocaleDateString('pt-BR')}  10:30          Pictures\n-a----        ${new Date().toLocaleDateString('pt-BR')}  09:15    1234  notas.txt\n`,
  'ls': () => SIMULATED_OUTPUTS['get-childitem'] as string,
  'dir': () => SIMULATED_OUTPUTS['get-childitem'] as string,
  'get-location': `\nPath\n----\nC:\\Users\\Aluno\n`,
  'pwd': `\nPath\n----\nC:\\Users\\Aluno\n`,
  'write-output "olá, eu estou aprendendo powershell!"': `\nOlá, eu estou aprendendo PowerShell!\n`,
  'test-connection google.com -count 1': `\n   Destination: google.com\n\nPing Source           Address           Latency  Status\n                                          (ms)\n---- ------           -------           -------  ------\n   1 ALUNO-PC         142.250.79.110         12  Success\n`,
  'test-connection google.com -count 2': `\n   Destination: google.com\n\nPing Source           Address           Latency  Status\n                                          (ms)\n---- ------           -------           -------  ------\n   1 ALUNO-PC         142.250.79.110         12  Success\n   2 ALUNO-PC         142.250.79.110          9  Success\n`,
  'get-help get-date': `\nNAME\n    Get-Date\n\nSYNOPSIS\n    Gets the current date and time.\n\nSYNTAX\n    Get-Date [[-Date] <DateTime>] [-Format <String>] [<CommonParameters>]\n\nDESCRIPTION\n    The Get-Date cmdlet gets a DateTime object that represents the current\n    date or a date that you specify.\n\nEXAMPLES\n    Example 1: Get the current date and time\n    PS> Get-Date\n    domingo, 4 de maio de 2025 19:30:00\n\n    Example 2: Get the date in a specific format\n    PS> Get-Date -Format "dd/MM/yyyy"\n    04/05/2025\n`,

  // === Módulo 2: Get-Help, Get-Command, Aliases, Get-Member ===
  'get-help *process*': `\nName                              Category  Module                    Synopsis\n----                              --------  ------                    --------\nDebug-Process                     Cmdlet    Microsoft.PowerShell.M... Debugs one or more processes running on the local computer.
Get-Process                       Cmdlet    Microsoft.PowerShell.M... Gets the processes that are running on the local computer.\nStart-Process                     Cmdlet    Microsoft.PowerShell.M... Starts one or more processes on the local computer.\nStop-Process                      Cmdlet    Microsoft.PowerShell.M... Stops one or more running processes.\nWait-Process                      Cmdlet    Microsoft.PowerShell.M... Waits for the processes to be stopped before accepting more input.\n`,
  'get-help *service*': `\nName                              Category  Module                    Synopsis\n----                              --------  ------                    --------\nGet-Service                       Cmdlet    Microsoft.PowerShell.M... Gets the services on the computer.\nNew-Service                       Cmdlet    Microsoft.PowerShell.M... Creates a new Windows service.\nRestart-Service                   Cmdlet    Microsoft.PowerShell.M... Stops and then starts one or more services.\nSet-Service                       Cmdlet    Microsoft.PowerShell.M... Starts, stops, and suspends a service.\nStart-Service                     Cmdlet    Microsoft.PowerShell.M... Starts one or more stopped services.\nStop-Service                      Cmdlet    Microsoft.PowerShell.M... Stops one or more running services.\n`,
  'get-help *file*': `\nName                              Category  Module                    Synopsis\n----                              --------  ------                    --------\nOut-File                          Cmdlet    Microsoft.PowerShell.U... Sends output to a file.\nUnblock-File                      Cmdlet    Microsoft.PowerShell.U... Unblocks files that were downloaded from the internet.\nGet-FileHash                      Function  Microsoft.PowerShell.U... Computes the hash value for a file.\n`,
  'get-help *network*': `\nName                              Category  Module                    Synopsis\n----                              --------  ------                    --------\nGet-NetAdapter                    Function  NetAdapter                Gets the basic network adapter properties.\nGet-NetIPAddress                  Function  NetTCPIP                  Gets the IP address configuration.\nTest-Connection                   Cmdlet    Microsoft.PowerShell.M... Sends ICMP echo request packets to one or more computers.\n`,
  'get-help get-date -examples': `\nNAME\n    Get-Date\n\n    ----------  EXAMPLE 1  ----------\n    PS> Get-Date\n    domingo, 4 de maio de 2025 19:30:00\n\n    ----------  EXAMPLE 2  ----------\n    PS> Get-Date -Format "dd/MM/yyyy"\n    04/05/2025\n\n    ----------  EXAMPLE 3  ----------\n    PS> Get-Date -Format "HH:mm:ss"\n    19:30:00\n\n    ----------  EXAMPLE 4  ----------\n    PS> (Get-Date).AddDays(7)\n    domingo, 11 de maio de 2025 19:30:00\n`,
  'get-help *item*': `\nName                              Category  Module                    Synopsis\n----                              --------  ------                    --------\nClear-Item                        Cmdlet    Microsoft.PowerShell.M... Clears the contents of an item.\nCopy-Item                         Cmdlet    Microsoft.PowerShell.M... Copies an item from one location to another.\nGet-ChildItem                     Cmdlet    Microsoft.PowerShell.M... Gets the items and child items in one or more specified locations.\nGet-Item                          Cmdlet    Microsoft.PowerShell.M... Gets the item at the specified location.\nMove-Item                         Cmdlet    Microsoft.PowerShell.M... Moves an item from one location to another.\nNew-Item                          Cmdlet    Microsoft.PowerShell.M... Creates a new item.\nRemove-Item                       Cmdlet    Microsoft.PowerShell.M... Deletes the specified items.\nRename-Item                       Cmdlet    Microsoft.PowerShell.M... Renames an item in a PowerShell provider namespace.\nSet-Item                          Cmdlet    Microsoft.PowerShell.M... Changes the value of an item.\n`,
  'get-command -verb get': () => `\nCommandType  Name                            Version    Source\n-----------  ----                            -------    ------\nCmdlet       Get-Alias                       7.0.0.0    Microsoft.PowerShell.Utility\nCmdlet       Get-ChildItem                   7.0.0.0    Microsoft.PowerShell.Management\nCmdlet       Get-Command                     7.0.0.0    Microsoft.PowerShell.Core\nCmdlet       Get-Content                     7.0.0.0    Microsoft.PowerShell.Management\nCmdlet       Get-Date                        7.0.0.0    Microsoft.PowerShell.Utility\nCmdlet       Get-Help                        7.0.0.0    Microsoft.PowerShell.Core\nCmdlet       Get-Location                    7.0.0.0    Microsoft.PowerShell.Management\nCmdlet       Get-Member                      7.0.0.0    Microsoft.PowerShell.Utility\nCmdlet       Get-Process                     7.0.0.0    Microsoft.PowerShell.Management\nCmdlet       Get-Service                     7.0.0.0    Microsoft.PowerShell.Management\n...  (mostrando 10 de 247 resultados)\n`,
  'get-command -verb stop': `\nCommandType  Name                            Version    Source\n-----------  ----                            -------    ------\nCmdlet       Stop-Computer                   7.0.0.0    Microsoft.PowerShell.Management\nCmdlet       Stop-Job                        7.0.0.0    Microsoft.PowerShell.Core\nCmdlet       Stop-Process                    7.0.0.0    Microsoft.PowerShell.Management\nCmdlet       Stop-Service                    7.0.0.0    Microsoft.PowerShell.Management\n`,
  'get-command -noun process': `\nCommandType  Name                            Version    Source\n-----------  ----                            -------    ------\nCmdlet       Debug-Process                   7.0.0.0    Microsoft.PowerShell.Management\nCmdlet       Get-Process                     7.0.0.0    Microsoft.PowerShell.Management\nCmdlet       Start-Process                   7.0.0.0    Microsoft.PowerShell.Management\nCmdlet       Stop-Process                    7.0.0.0    Microsoft.PowerShell.Management\nCmdlet       Wait-Process                    7.0.0.0    Microsoft.PowerShell.Management\n`,
  'get-command -noun service': `\nCommandType  Name                            Version    Source\n-----------  ----                            -------    ------\nCmdlet       Get-Service                     7.0.0.0    Microsoft.PowerShell.Management\nCmdlet       New-Service                     7.0.0.0    Microsoft.PowerShell.Management\nCmdlet       Restart-Service                 7.0.0.0    Microsoft.PowerShell.Management\nCmdlet       Set-Service                     7.0.0.0    Microsoft.PowerShell.Management\nCmdlet       Start-Service                   7.0.0.0    Microsoft.PowerShell.Management\nCmdlet       Stop-Service                    7.0.0.0    Microsoft.PowerShell.Management\n`,
  '(get-command).count': `\n1547\n`,
  '(get-command -commandtype cmdlet).count': `\n823\n`,
  '(get-command -commandtype function).count': `\n412\n`,
  '(get-command -verb get).count': `\n247\n`,
  'get-alias': `\nCommandType  Name                  ReferencedCommand\n-----------  ----                  -----------------\nAlias        %                     ForEach-Object\nAlias        ?                     Where-Object\nAlias        cat                   Get-Content\nAlias        cd                    Set-Location\nAlias        cls                   Clear-Host\nAlias        cp                    Copy-Item\nAlias        dir                   Get-ChildItem\nAlias        echo                  Write-Output\nAlias        ft                    Format-Table\nAlias        gc                    Get-Content\nAlias        kill                  Stop-Process\nAlias        ls                    Get-ChildItem\nAlias        man                   Get-Help\nAlias        mv                    Move-Item\nAlias        pwd                   Get-Location\nAlias        rm                    Remove-Item\nAlias        select                Select-Object\nAlias        sort                  Sort-Object\nAlias        where                 Where-Object\n`,
  'get-alias ls': `\nCommandType  Name  ReferencedCommand\n-----------  ----  -----------------\nAlias        ls    Get-ChildItem\n`,
  'get-alias cd': `\nCommandType  Name  ReferencedCommand\n-----------  ----  -----------------\nAlias        cd    Set-Location\n`,
  'get-alias gc': `\nCommandType  Name  ReferencedCommand\n-----------  ----  -----------------\nAlias        gc    Get-Content\n`,
  'get-alias -definition get-childitem': `\nCommandType  Name   ReferencedCommand\n-----------  ----   -----------------\nAlias        dir    Get-ChildItem\nAlias        gci    Get-ChildItem\nAlias        ls     Get-ChildItem\n`,
  'get-date | get-member': () => `\n   TypeName: System.DateTime\n\nName        MemberType Definition\n----        ---------- ----------\nAdd         Method     datetime Add(timespan value)\nAddDays     Method     datetime AddDays(double value)\nAddHours    Method     datetime AddHours(double value)\nAddMonths   Method     datetime AddMonths(int months)\nCompareTo   Method     int CompareTo(System.Object value)\nToString    Method     string ToString()\nDate        Property   datetime Date {get;}\nDay         Property   int Day {get;}\nDayOfWeek   Property   System.DayOfWeek DayOfWeek {get;}\nDayOfYear   Property   int DayOfYear {get;}\nHour        Property   int Hour {get;}\nMinute      Property   int Minute {get;}\nMonth       Property   int Month {get;}\nSecond      Property   int Second {get;}\nYear        Property   int Year {get;}\n`,
  'get-date | get-member -membertype property': () => `\n   TypeName: System.DateTime\n\nName        MemberType Definition\n----        ---------- ----------\nDate        Property   datetime Date {get;}\nDay         Property   int Day {get;}\nDayOfWeek   Property   System.DayOfWeek DayOfWeek {get;}\nDayOfYear   Property   int DayOfYear {get;}\nHour        Property   int Hour {get;}\nMinute      Property   int Minute {get;}\nMonth       Property   int Month {get;}\nSecond      Property   int Second {get;}\nYear        Property   int Year {get;}\n`,
  '(get-date).year': () => `\n${new Date().getFullYear()}\n`,
  '(get-date).month': () => `\n${new Date().getMonth() + 1}\n`,
  '(get-date).day': () => `\n${new Date().getDate()}\n`,
  '(get-date).hour': () => `\n${new Date().getHours()}\n`,
  '(get-date).dayofweek': () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return `\n${days[new Date().getDay()]}\n`;
  },
  'get-verb | select-object -first 10': `\nVerb      AliasPrefix Group          Description\n----      ----------- -----          -----------\nAdd       a           Common         Adds a resource to a container\nClear     cl          Common         Clears a resource\nClose     cs          Common         Closes a resource\nCopy      cp          Common         Copies a resource\nEnter     et          Common         Enters a resource\nExit      ex          Common         Exits a resource\nFind      fd          Common         Finds a resource\nFormat    f           Common         Formats a resource\nGet       g           Common         Gets a resource\nHide      h           Common         Hides a resource\n`,

  // === Módulo 3: Pipeline, Where-Object, Sort-Object, Select-Object, Measure-Object ===
  'get-service': () => {
    const services = [
      { name: 'AudioSrv', display: 'Windows Audio', status: 'Running' },
      { name: 'BITS', display: 'Background Intelligent Transfer Ser...', status: 'Stopped' },
      { name: 'BrokerInfrastru...', display: 'Background Tasks Infrastructure Ser...', status: 'Running' },
      { name: 'CryptSvc', display: 'Cryptographic Services', status: 'Running' },
      { name: 'Dhcp', display: 'DHCP Client', status: 'Running' },
      { name: 'Dnscache', display: 'DNS Client', status: 'Running' },
      { name: 'EventLog', display: 'Windows Event Log', status: 'Running' },
      { name: 'LanmanServer', display: 'Server', status: 'Running' },
      { name: 'Spooler', display: 'Print Spooler', status: 'Stopped' },
      { name: 'WinDefend', display: 'Windows Defender Service', status: 'Running' },
      { name: 'WinRM', display: 'Windows Remote Management', status: 'Stopped' },
      { name: 'wuauserv', display: 'Windows Update', status: 'Stopped' },
    ];
    let out = '\nStatus   Name               DisplayName\n------   ----               -----------\n';
    services.forEach(s => { out += `${s.status.padEnd(9)}${s.name.padEnd(19)}${s.display}\n`; });
    return out;
  },
  "get-service | where-object status -eq 'running'": () => {
    const services = [
      { name: 'AudioSrv', display: 'Windows Audio' },
      { name: 'BrokerInfrastru...', display: 'Background Tasks Infrastructure...' },
      { name: 'CryptSvc', display: 'Cryptographic Services' },
      { name: 'Dhcp', display: 'DHCP Client' },
      { name: 'Dnscache', display: 'DNS Client' },
      { name: 'EventLog', display: 'Windows Event Log' },
      { name: 'LanmanServer', display: 'Server' },
      { name: 'WinDefend', display: 'Windows Defender Service' },
    ];
    let out = '\nStatus   Name               DisplayName\n------   ----               -----------\n';
    services.forEach(s => { out += `Running  ${s.name.padEnd(19)}${s.display}\n`; });
    return out;
  },
  "get-service | where-object status -eq 'stopped'": `\nStatus   Name               DisplayName\n------   ----               -----------\nStopped  BITS               Background Intelligent Transfer Ser...\nStopped  Spooler            Print Spooler\nStopped  WinRM              Windows Remote Management\nStopped  wuauserv           Windows Update\n`,
  "get-service | where-object status -eq 'stopped' | sort-object name": `\nStatus   Name               DisplayName\n------   ----               -----------\nStopped  BITS               Background Intelligent Transfer Ser...\nStopped  Spooler            Print Spooler\nStopped  WinRM              Windows Remote Management\nStopped  wuauserv           Windows Update\n`,
  "get-service | where-object status -eq 'running' | sort-object name": `\nStatus   Name               DisplayName\n------   ----               -----------\nRunning  AudioSrv           Windows Audio\nRunning  BrokerInfrastru... Background Tasks Infrastructure...\nRunning  CryptSvc           Cryptographic Services\nRunning  Dhcp               DHCP Client\nRunning  Dnscache           DNS Client\nRunning  EventLog           Windows Event Log\nRunning  LanmanServer       Server\nRunning  WinDefend          Windows Defender Service\n`,
  "get-service | where-object status -eq 'running' | sort-object name | select-object -first 5": `\nStatus   Name               DisplayName\n------   ----               -----------\nRunning  AudioSrv           Windows Audio\nRunning  BrokerInfrastru... Background Tasks Infrastructure...\nRunning  CryptSvc           Cryptographic Services\nRunning  Dhcp               DHCP Client\nRunning  Dnscache           DNS Client\n`,
  "get-service | where-object status -eq 'running' | sort-object name | select-object -first 5 name, status": `\nName               Status\n----               ------\nAudioSrv           Running\nBrokerInfrastru... Running\nCryptSvc           Running\nDhcp               Running\nDnscache           Running\n`,
  'get-process | sort-object cpu -descending | select-object -first 5 name, cpu': () => {
    const procs = [
      { name: 'chrome', cpu: (Math.random() * 200 + 100).toFixed(1) },
      { name: 'Code', cpu: (Math.random() * 100 + 60).toFixed(1) },
      { name: 'Teams', cpu: (Math.random() * 80 + 30).toFixed(1) },
      { name: 'explorer', cpu: (Math.random() * 40 + 10).toFixed(1) },
      { name: 'Spotify', cpu: (Math.random() * 30 + 5).toFixed(1) },
    ];
    let out = '\nName         CPU(s)\n----         ------\n';
    procs.forEach(p => { out += `${p.name.padEnd(13)}${p.cpu}\n`; });
    return out;
  },
  'get-process | sort-object name | select-object -first 3': () => `\n Handles  NPM(K)  PM(K)   WS(K)  CPU(s)   Id  ProcessName\n -------  ------  -----   -----  ------   --  -----------\n    ${Math.floor(Math.random() * 500 + 100)}      ${Math.floor(Math.random() * 20 + 5)}  ${Math.floor(Math.random() * 50000 + 5000)}  ${Math.floor(Math.random() * 60000 + 5000)}   ${(Math.random() * 5).toFixed(1)}   ${Math.floor(Math.random() * 9000 + 1000)}  ApplicationFrameHost\n    ${Math.floor(Math.random() * 500 + 100)}      ${Math.floor(Math.random() * 20 + 5)}  ${Math.floor(Math.random() * 50000 + 5000)}  ${Math.floor(Math.random() * 60000 + 5000)}   ${(Math.random() * 300).toFixed(1)}   ${Math.floor(Math.random() * 9000 + 1000)}  chrome\n    ${Math.floor(Math.random() * 500 + 100)}      ${Math.floor(Math.random() * 20 + 5)}  ${Math.floor(Math.random() * 50000 + 5000)}  ${Math.floor(Math.random() * 60000 + 5000)}   ${(Math.random() * 200).toFixed(1)}   ${Math.floor(Math.random() * 9000 + 1000)}  Code\n`,
  'get-process | measure-object': `\nCount    : 87\nAverage  :\nSum      :\nMaximum  :\nMinimum  :\nProperty :\n`,
  'get-process | measure-object cpu -sum': () => `\nCount    : 87\nAverage  :\nSum      : ${(Math.random() * 2000 + 500).toFixed(2)}\nMaximum  :\nMinimum  :\nProperty : CPU\n`,
  'get-process | measure-object cpu -average': () => `\nCount    : 87\nAverage  : ${(Math.random() * 20 + 2).toFixed(4)}\nSum      :\nMaximum  :\nMinimum  :\nProperty : CPU\n`,
  'get-process | measure-object cpu -sum -average -maximum -minimum': () => {
    const max = (Math.random() * 300 + 100).toFixed(2);
    return `\nCount    : 87\nAverage  : ${(Math.random() * 20 + 2).toFixed(4)}\nSum      : ${(Math.random() * 2000 + 500).toFixed(2)}\nMaximum  : ${max}\nMinimum  : 0\nProperty : CPU\n`;
  },
  "get-service | where-object status -eq 'stopped' | measure-object": `\nCount    : 4\nAverage  :\nSum      :\nMaximum  :\nMinimum  :\nProperty :\n`,
  "get-service | where-object status -eq 'running' | measure-object": `\nCount    : 8\nAverage  :\nSum      :\nMaximum  :\nMinimum  :\nProperty :\n`,
  'get-process | select-object name, cpu': () => {
    const procs = ['chrome', 'Code', 'explorer', 'Spotify', 'svchost', 'PowerShell', 'Teams', 'Discord'];
    let out = '\nName         CPU(s)\n----         ------\n';
    procs.forEach(p => { out += `${p.padEnd(13)}${(Math.random() * 200).toFixed(2)}\n`; });
    return out;
  },
  'get-service | select-object status -unique': `\nStatus\n------\nRunning\nStopped\n`,

  // === Módulo 4: Navegação e Arquivos ===
  'cd ..': '', // No TerminalSimulator a gente não tá mudando o currentPath dinamicamente ainda (para ficar simples), então podemos retornar vazio.
  'cd ~': '',
  'set-location ..': '',
  'new-item -path "relatorio.txt" -itemtype file': `\n    Directory: C:\\Users\\Aluno\n\nMode                 LastWriteTime         Length Name\n----                 -------------         ------ ----\n-a----        ${new Date().toLocaleDateString('pt-BR')}  ${new Date().toLocaleTimeString('pt-BR').slice(0,5)}             0 relatorio.txt\n`,
  'new-item -path "projetos" -itemtype directory': `\n    Directory: C:\\Users\\Aluno\n\nMode                 LastWriteTime         Length Name\n----                 -------------         ------ ----\nd-----        ${new Date().toLocaleDateString('pt-BR')}  ${new Date().toLocaleTimeString('pt-BR').slice(0,5)}               Projetos\n`,
  'mkdir projetos': `\n    Directory: C:\\Users\\Aluno\n\nMode                 LastWriteTime         Length Name\n----                 -------------         ------ ----\nd-----        ${new Date().toLocaleDateString('pt-BR')}  ${new Date().toLocaleTimeString('pt-BR').slice(0,5)}               Projetos\n`,
  'copy-item -path "relatorio.txt" -destination "relatorio_backup.txt"': '',
  'cp relatorio.txt relatorio_backup.txt': '',
  'move-item -path "relatorio.txt" -destination ".\\projetos\\"': '',
  'mv relatorio.txt .\\projetos\\': '',
  'rename-item -path "relatorio.txt" -newname "relatorio_final.txt"': '',
  'remove-item -path "relatorio_velho.txt"': '',
  'rm relatorio_velho.txt': '',
  'get-content -path "c:\\logs\\erro.log"': `\n[ERROR] Falha na conexão com banco de dados\n[WARN] Memória acima de 80%\n[INFO] Reiniciando serviço...\n[ERROR] Timeout na requisição API\n`,
  'cat c:\\logs\\erro.log': `\n[ERROR] Falha na conexão com banco de dados\n[WARN] Memória acima de 80%\n[INFO] Reiniciando serviço...\n[ERROR] Timeout na requisição API\n`,
  'get-content erro.log -tail 10': `\n[INFO] Backup iniciado...\n[INFO] Backup concluído com sucesso.\n[WARN] CPU atingiu 95%\n[ERROR] Timeout na requisição API\n`,
  'get-process | out-file -filepath "processos_rodando.txt"': '',
  'get-date | out-file -filepath "registro.txt" -append': '',
  '"olá mundo!" > saudacao.txt': '',
  'get-date >> saudacao.txt': '',
};

// Tentar encontrar saída para comando (case-insensitive, trim)
function getSimulatedOutput(cmd: string): string | null {
  const normalized = cmd.trim().toLowerCase().replace(/\s+/g, ' ');
  const entry = SIMULATED_OUTPUTS[normalized];
  if (!entry) return null;
  if (typeof entry === 'function') return entry();
  return entry;
}

interface HistoryEntry {
  command: string;
  output: string;
  isError?: boolean;
}

interface TerminalSimulatorProps {
  isOpen: boolean;
  onClose: () => void;
  /** Mensagem inicial opcional */
  welcomeMessage?: string;
}

const TerminalSimulator: React.FC<TerminalSimulatorProps> = ({ isOpen, onClose, welcomeMessage }) => {
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [input, setInput] = useState('');
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [cmdHistoryIdx, setCmdHistoryIdx] = useState(-1);
  const [isMaximized, setIsMaximized] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const currentPath = 'C:\\Users\\Aluno';

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  useEffect(() => {
    scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight);
  }, [history]);

  const handleSubmit = () => {
    const cmd = input.trim();
    if (!cmd) return;

    setCmdHistory(prev => [cmd, ...prev]);
    setCmdHistoryIdx(-1);

    const output = getSimulatedOutput(cmd);

    if (output === '__CLEAR__') {
      setHistory([]);
      setInput('');
      return;
    }

    if (output) {
      setHistory(prev => [...prev, { command: cmd, output }]);
    } else {
      // Comando não reconhecido
      const partialMatch = cmd.toLowerCase().startsWith('get-date -format');
      if (partialMatch) {
        const fmt = cmd.match(/"([^"]+)"/)?.[1] || cmd.match(/'([^']+)'/)?.[1] || 'dd/MM/yyyy';
        const now = new Date();
        const formatted = fmt
          .replace('dd', String(now.getDate()).padStart(2, '0'))
          .replace('MM', String(now.getMonth() + 1).padStart(2, '0'))
          .replace('yyyy', String(now.getFullYear()))
          .replace('HH', String(now.getHours()).padStart(2, '0'))
          .replace('mm', String(now.getMinutes()).padStart(2, '0'))
          .replace('ss', String(now.getSeconds()).padStart(2, '0'));
        setHistory(prev => [...prev, { command: cmd, output: `\n${formatted}\n` }]);
      } else if (cmd.toLowerCase().startsWith('write-output')) {
        const text = cmd.match(/"([^"]+)"/)?.[1] || cmd.match(/'([^']+)'/)?.[1] || cmd.slice(13).trim();
        setHistory(prev => [...prev, { command: cmd, output: `\n${text}\n` }]);
      } else {
        setHistory(prev => [...prev, {
          command: cmd,
          output: `\n${cmd} : O termo '${cmd.split(' ')[0]}' não é reconhecido neste simulador.\nDica: Tente comandos como Get-Date, Get-Process, Get-ChildItem, Test-Connection, etc.\n`,
          isError: true
        }]);
      }
    }
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length > 0) {
        const newIdx = Math.min(cmdHistoryIdx + 1, cmdHistory.length - 1);
        setCmdHistoryIdx(newIdx);
        setInput(cmdHistory[newIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (cmdHistoryIdx > 0) {
        const newIdx = cmdHistoryIdx - 1;
        setCmdHistoryIdx(newIdx);
        setInput(cmdHistory[newIdx]);
      } else {
        setCmdHistoryIdx(-1);
        setInput('');
      }
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault();
      setHistory([]);
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ y: 30, opacity: 0, scale: 0.95 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      exit={{ y: 30, opacity: 0, scale: 0.95 }}
      className={`${isMaximized ? 'fixed inset-4 z-[120]' : 'w-full'} flex flex-col rounded-xl overflow-hidden shadow-2xl shadow-black/50 border border-[#3a3a3a]`}
    >
      {/* Title bar — estilo Windows Terminal */}
      <div className="flex items-center justify-between px-3 py-1.5 bg-[#1f1f1f] border-b border-[#333]">
        <div className="flex items-center gap-2">
          <Terminal size={12} className="text-[#0078D4]" />
          <span className="text-[10px] font-mono text-[#ccc]">PowerShell 7.4.6</span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => { setHistory([]); setInput(''); }}
            className="p-1 hover:bg-[#333] rounded text-[#888] hover:text-white transition-colors"
            title="Limpar terminal"
          >
            <RotateCcw size={11} />
          </button>
          <button
            onClick={() => setIsMaximized(!isMaximized)}
            className="p-1 hover:bg-[#333] rounded text-[#888] hover:text-white transition-colors"
          >
            {isMaximized ? <Minimize2 size={11} /> : <Maximize2 size={11} />}
          </button>
          <button
            onClick={onClose}
            className="p-1 hover:bg-red-600 rounded text-[#888] hover:text-white transition-colors"
          >
            <X size={11} />
          </button>
        </div>
      </div>

      {/* Terminal body */}
      <div
        ref={scrollRef}
        onClick={() => inputRef.current?.focus()}
        className="flex-1 bg-[#0c0c0c] p-3 overflow-y-auto font-mono text-[13px] leading-relaxed min-h-[200px] max-h-[400px] cursor-text"
      >
        {/* Welcome */}
        <div className="text-[#666] text-[11px] mb-3">
          <p>Marina Academy — Simulador PowerShell</p>
          {welcomeMessage && <p className="text-[#555] mt-1">{welcomeMessage}</p>}
          <p className="text-[#444] mt-1">Digite comandos e pressione Enter. Use ↑↓ para histórico.</p>
          <div className="border-b border-[#222] my-2" />
        </div>

        {/* History */}
        {history.map((entry, i) => (
          <div key={i} className="mb-2">
            <div className="flex">
              <span className="text-[#0078D4] shrink-0">PS {currentPath}&gt; </span>
              <span className="text-[#e8e8e8] ml-1">{entry.command}</span>
            </div>
            <pre className={`whitespace-pre-wrap text-[12px] ${entry.isError ? 'text-red-400' : 'text-[#cccccc]'}`}>
              {entry.output}
            </pre>
          </div>
        ))}

        {/* Active input line */}
        <div className="flex items-center">
          <span className="text-[#0078D4] shrink-0">PS {currentPath}&gt; </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none text-[#e8e8e8] ml-1 font-mono text-[13px] caret-[#0078D4]"
            spellCheck={false}
            autoComplete="off"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default TerminalSimulator;
