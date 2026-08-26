

module.exports = {
    apps : [{
        name   : "Config-server",
        script : "java -jar ./Config-server/target/Config-Server-1.0.0.jar",
        log_files:"./log/config-server.log"
    },{
        name   : "Service-registry",
        script : "java -jar  ./Service-registry/target/Service-Registry-1.0.0.jar",
        log_files:"./log/service-registry.log"
    },{
        name   : "API-gateway",
        script : "java -jar ./API-gateway/target/Api-Gateway-1.0.0.jar",
        log_files:"./log/api-gateway.log"
    }]
}

