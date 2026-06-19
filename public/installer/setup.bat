@echo off
setlocal enabledelayedexpansion
title TradingAgents Advisor 2.0 - Setup

echo ============================================
echo   TradingAgents Advisor 2.0 Setup
echo   Research Only. Not Financial Advice.
echo ============================================
echo.

:: ── Find install target ──────────────────────
set "INSTALL_DIR=%LOCALAPPDATA%\TradingAgentsAdvisor"
set "APP_EXE=%INSTALL_DIR%\TradingAgentsAdvisor.exe"
set "DESKTOP=%USERPROFILE%\Desktop"
set "START_MENU=%APPDATA%\Microsoft\Windows\Start Menu\Programs\TradingAgentsAdvisor"

:: ── Check if already installed ───────────────
if exist "%APP_EXE%" (
    echo [!] Already installed at: %INSTALL_DIR%
    echo.
    choice /C YN /M "Reinstall (overwrite existing files)?"
    if errorlevel 2 goto :launch
    echo [i] Removing previous installation...
    rmdir /S /Q "%INSTALL_DIR%" 2>nul
)

:: ── Extract files ────────────────────────────
echo [i] Installing to: %INSTALL_DIR%
echo [i] Extracting files... (this may take a moment)

:: Self-extract: the zip data is appended to this script
:: Find the ZIP marker and extract
set "SCRIPT=%~f0"
powershell -NoProfile -ExecutionPolicy Bypass -Command ^
  "$script = [System.IO.File]::ReadAllBytes('%SCRIPT%'); ^
   $marker = [System.Text.Encoding]::ASCII.GetBytes('__ZIP_START__'); ^
   for ($i = 0; $i -lt $script.Length - $marker.Length; $i++) { ^
     $match = $true; ^
     for ($j = 0; $j -lt $marker.Length; $j++) { ^
       if ($script[$i + $j] -ne $marker[$j]) { $match = $false; break } ^
     } ^
     if ($match) { ^
       $zipStart = $i + $marker.Length; ^
       $zipData = $script[$zipStart..($script.Length - 1)]; ^
       $tempZip = [System.IO.Path]::GetTempFileName() + '.zip'; ^
       [System.IO.File]::WriteAllBytes($tempZip, $zipData); ^
       if (-not (Test-Path '%INSTALL_DIR%')) { New-Item -ItemType Directory -Path '%INSTALL_DIR%' -Force ^| Out-Null }; ^
       Expand-Archive -Path $tempZip -DestinationPath '%INSTALL_DIR%' -Force; ^
       Remove-Item $tempZip; ^
       Write-Output 'DONE'; ^
       break ^
     } ^
   }" 2>&1 | findstr "DONE" >nul

if not exist "%APP_EXE%" (
    echo [X] Extraction failed. Please re-download and try again.
    echo     If the problem persists, manually extract the zip to:
    echo     %INSTALL_DIR%
    pause
    exit /b 1
)

echo [✓] Files extracted successfully.

:: ── Setup .env ───────────────────────────────
if not exist "%INSTALL_DIR%\.env" (
    if exist "%INSTALL_DIR%\.env.example" (
        copy "%INSTALL_DIR%\.env.example" "%INSTALL_DIR%\.env" >nul
        echo [✓] Created default .env configuration
    )
)

:: ── Create shortcuts ─────────────────────────
echo [i] Creating shortcuts...

:: Desktop shortcut
powershell -NoProfile -ExecutionPolicy Bypass -Command ^
  "$ws = New-Object -ComObject WScript.Shell; ^
   $sc = $ws.CreateShortcut('%DESKTOP%\TradingAgents Advisor.lnk'); ^
   $sc.TargetPath = '%APP_EXE%'; ^
   $sc.WorkingDirectory = '%INSTALL_DIR%'; ^
   $sc.Description = 'TradingAgents Advisor 2.0 - Research Terminal'; ^
   $sc.IconLocation = '%APP_EXE%'; ^
   $sc.Save()"

:: Start Menu
mkdir "%START_MENU%" 2>nul
powershell -NoProfile -ExecutionPolicy Bypass -Command ^
  "$ws = New-Object -ComObject WScript.Shell; ^
   $sc = $ws.CreateShortcut('%START_MENU%\TradingAgents Advisor.lnk'); ^
   $sc.TargetPath = '%APP_EXE%'; ^
   $sc.WorkingDirectory = '%INSTALL_DIR%'; ^
   $sc.Description = 'TradingAgents Advisor 2.0 - Research Terminal'; ^
   $sc.IconLocation = '%APP_EXE%'; ^
   $sc.Save()"

echo [✓] Shortcuts created on Desktop and Start Menu.

:: ── Done ─────────────────────────────────────
echo.
echo ============================================
echo   Installation Complete!
echo   Desktop: %DESKTOP%\TradingAgents Advisor
echo   Start:   %START_MENU%\TradingAgents Advisor
echo ============================================
echo.
echo   Research Only. Not Financial Advice.
echo   No real order execution is provided.
echo.

choice /C YN /M "Launch TradingAgents Advisor now?"
if errorlevel 2 goto :end

:launch
echo [i] Starting TradingAgents Advisor...
start "" "%APP_EXE%"

:end
endlocal
exit /b 0

__ZIP_START__
