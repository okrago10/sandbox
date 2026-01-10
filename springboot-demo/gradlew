#!/bin/sh
APP_NAME="Gradle Wrapper"
APP_HOME="$(cd "$(dirname "$0")" && pwd)"
CLASSPATH="$APP_HOME/gradle/wrapper/gradle-wrapper.jar"
JAVA_OPTS="${JAVA_OPTS:--Xmx64m -Xms64m}"
GRADLE_OPTS="${GRADLE_OPTS:--Dorg.gradle.appname=$APP_NAME}"
if [ -z "$JAVA_HOME" ]; then
    JAVA_CMD="java"
else
    JAVA_CMD="$JAVA_HOME/bin/java"
fi
exec "$JAVA_CMD" $JAVA_OPTS $GRADLE_OPTS -classpath "$CLASSPATH" org.gradle.wrapper.GradleWrapperMain "$@"
