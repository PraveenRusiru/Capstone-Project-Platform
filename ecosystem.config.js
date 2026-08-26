module.exports = {
    apps: [
        {
            name: "Config-server",
            script: "java",
            args: "-jar ./Config-server/target/Config-Server-1.0.0.jar",
            error_file: "./log/config-server-error.log",
            out_file: "./log/config-server-out.log"
        },
        {
            name: "Service-registry",
            script: "java",
            args: "-jar ./Service-registry/target/Service-Registry-1.0.0.jar",
            error_file: "./log/service-registry-error.log",
            out_file: "./log/service-registry-out.log"
        },
        {
            name: "API-gateway",
            script: "java",
            args: "-jar ./API-gateway/target/Api-Gateway-1.0.0.jar",
            error_file: "./log/api-gateway-error.log",
            out_file: "./log/api-gateway-out.log"
        }
    ]
};