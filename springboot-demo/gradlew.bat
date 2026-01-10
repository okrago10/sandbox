@if "%DEBUG%" == "" @echo off
@rem ##########################################################################
@rem  Gradle startup script for Windows
@rem ##########################################################################
@setlocal

set APP_HOME=%~dp0
set CLASSPATH=%APP_HOME%gradle\wrapper\gradle-wrapper.jar
set JAVA_OPTS=-Xmx64m -Xms64m
set GRADLE_OPTS=-Dorg.gradle.appname=Gradle

if not defined JAVA_HOME (
    set JAVA_CMD=java
) else (
    set JAVA_CMD=%JAVA_HOME%\bin\java
)

%JAVA_CMD% %JAVA_OPTS% %GRADLE_OPTS% -classpath "%CLASSPATH%" org.gradle.wrapper.GradleWrapperMain %*

@endlocal
