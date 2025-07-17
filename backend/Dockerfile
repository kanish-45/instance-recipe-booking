# Use a lightweight Java runtime
FROM eclipse-temurin:17-jdk-alpine

# Set working directory
WORKDIR /app

# Copy the packaged jar (built by Maven) into the image
COPY target/*.jar app.jar

# Expose the port your app listens on
EXPOSE 8080

# Run the jar
ENTRYPOINT ["java","-jar","app.jar"]
