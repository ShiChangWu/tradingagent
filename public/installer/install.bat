@echo off
setlocal enabledelayedexpansion
title TradingAgents Advisor 2.0 - Setup
cd /d "%~dp0"

echo ============================================
echo   TradingAgents Advisor 2.0
echo   AI-Powered Desktop Research Terminal
echo ============================================
echo   Research Only. Not Financial Advice.
echo ============================================
echo.

set "INSTALL_DIR=%LOCALAPPDATA%\TradingAgentsAdvisor"
set "APP_EXE=%INSTALL_DIR%\TradingAgentsAdvisor.exe"
set "SRC_DIR=%~dp0"

:: ── Already installed? ──────────────────────
if exist "%APP_EXE%" (
    echo [!] Already installed: %INSTALL_DIR%
    choice /C YNR /M "[Y] Launch  [N] Reinstall  [R] Remove?"
    if errorlevel 3 goto :remove
    if errorlevel 2 goto :reinstall
    goto :launch
)

:install
echo [i] Installing to: %INSTALL_DIR%
echo [i] Copying files... (190MB, please wait)

:: Create install directory
mkdir "%INSTALL_DIR%" 2>nul

:: Copy all files except this script
robocopy "%SRC_DIR%" "%INSTALL_DIR%" /E /NFL /NDL /NJH /NJS ^
  /XD "%INSTALL_DIR%" ^
  /XF "install.bat" "%~nx0" >nul

if %errorlevel% geq 8 (
    echo [X] Copy failed. Try running as Administrator.
    pause
    exit /b 1
)

echo [✓] Files installed.

:: ── Setup .env ───────────────────────────────
if not exist "%INSTALL_DIR%\.env" (
    if exist "%INSTALL_DIR%\.env.example" (
        copy "%INSTALL_DIR%\.env.example" "%INSTALL_DIR%\.env" >nul 2>&1
        echo [✓] Created default configuration: .env
    )
)

:: ── Create shortcuts ─────────────────────────
set "DESKTOP=%USERPROFILE%\Desktop"
set "START_MENU=%APPDATA%\Microsoft\Windows\Start Menu\Programs\TradingAgentsAdvisor"

mkdir "%START_MENU%" 2>nul

:: Desktop shortcut via PowerShell
powershell -NoProfile -ExecutionPolicy Bypass -Command ^
  "$ws = New-Object -ComObject WScript.Shell; ^
   foreach ($path in @('%DESKTOP%\TradingAgents Advisor.lnk', '%START_MENU%\TradingAgents Advisor.lnk')) { ^
     $sc = $ws.CreateShortcut($path); ^
     $sc.TargetPath = '%APP_EXE%'; ^
     $sc.WorkingDirectory = '%INSTALL_DIR%'; ^
     $sc.Description = 'AI-Powered Desktop Research Terminal'; ^
     $sc.Save() ^
   }" 2>nul

if exist "%DESKTOP%\TradingAgents Advisor.lnk" (
    echo [✓] Desktop shortcut created
)
if exist "%START_MENU%\TradingAgents Advisor.lnk" (
    echo [✓] Start Menu shortcut created
)

:: ── Done ─────────────────────────────────────
echo.
echo ============================================
echo   Setup Complete!
echo   %DESKTOP%\TradingAgents Advisor.lnk
echo ============================================
echo.

choice /C YN /M "Launch TradingAgents Advisor now?"
if errorlevel 2 goto :end
goto :launch

:launch
echo [i] Starting...
start "" "%APP_EXE%"
goto :end

:reinstall
echo [i] Removing old version...
rmdir /S /Q "%INSTALL_DIR%" 2>nul
goto :install

:remove
echo [i] Removing TradingAgents Advisor...
rmdir /S /Q "%INSTALL_DIR%" 2>nul
del "%DESKTOP%\TradingAgents Advisor.lnk" 2>nul
rmdir /S /Q "%START_MENU%" 2>nul
echo [✓] Removed.
goto :end

:end
endlocal
exit /b 0
