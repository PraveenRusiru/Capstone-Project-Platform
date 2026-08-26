// // module.exports = {
// //     apps : [{
// //         name   : "Config-server",
// //         script : "java",
// //         args   : "-jar -Dspring.profiles.active=native ./Config-server/target/Config-Server-1.0.0.jar"
// //     },{
// //         name   : "Service-registry",
// //         script : "java",
// //         args   : "-jar ./Service-registry/target/Service-Registry-1.0.0.jar"
// //     },{
// //         name   : "API-gateway",
// //         script : "java",
// //         args   : "-jar ./API-gateway/target/Api-Gateway-1.0.0.jar"
// //     }]
// // }
//
// module.exports = {
//     apps : [{
//         name   : "Config-server",
//         script : "java -jar -Dspring.profiles.active=native ./Config-server/target/Config-Server-1.0.0.jar",
//         log_files:"./log/config-server.log"
//     },{
//         name   : "Service-registry",
//         script : "java -jar  ./Service-registry/target/Service-Registry-1.0.0.jar",
//         log_files:"./log/service-registry.log"
//     },{
//         name   : "API-gateway",
//         script : "java -jar ./API-gateway/target/Api-Gateway-1.0.0.jar",
//         log_files:"./log/api-gateway.log"
//     }]
// }
//
// // // module.exports = {
// // //   apps : [{
// // //     name   : "Config-server",
// // //     script : "java -jar -Dspring.cloud.config.server.git.uri=https://github.com/PraveenRusiru/Config-server.git ./Config-server/target/Config-Server-1.0.0.jar"
// // //   },{
// // //       name   : "Service-registry",
// // //       script : "java -jar -Dspring.cloud.service.registry.git.uri=https://github.com/PraveenRusiru/Service-registry.git ./Service-registry/target/Service-registry-1.0.0.jar"
// // //   },{
// // //       name   : "API-gateway",
// // //       script : "java -jar -Dspring.cloud.api.gateway.git.uri=https://github.com/PraveenRusiru/API-gateway.git ./API-gateway/target/API-gateway-1.0.0.jar"
// // //   }]
// // // }
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