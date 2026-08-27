module.exports = {
    apps: [
        {
            name: "Config-server",
            script: "java",
            args: "-jar -Dspring.profiles.active=native ./Config-server/target/Config-Server-1.0.0.jar",
            interpreter: "none",
            out_file: "./log/config-server-out.log",
            error_file: "./log/config-server-err.log",
            merge_logs: true
        },
        {
            name: "Service-registry",
            script: "java",
            args: "-jar ./Service-registry/target/Service-Registry-1.0.0.jar",
            interpreter: "none",
            out_file: "./log/service-registry-out.log",
            error_file: "./log/service-registry-err.log",
            merge_logs: true
        },
        {
            name: "API-gateway",
            script: "java",
            args: "-jar ./API-gateway/target/Api-Gateway-1.0.0.jar",
            interpreter: "none",
            out_file: "./log/api-gateway-out.log",
            error_file: "./log/api-gateway-err.log",
            merge_logs: true
        }
    ]
};