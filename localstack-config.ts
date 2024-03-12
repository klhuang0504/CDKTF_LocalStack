export const AWS_CONFIG = {
    region: "us-east-1",
    endpoints: [
      {
        apigateway: "http://localstack:4566",
        apigatewayv2: "http://localstack:4566",
        cloudformation: "http://localstack:4566",
        cloudwatch: "http://localstack:4566",
        dynamodb: "http://localstack:4566",
        ec2: "http://localstack:4566",
        es: "http://localstack:4566",
        elasticache: "http://localstack:4566",
        firehose: "http://localstack:4566",
        iam: "http://localstack:4566",
        kinesis: "http://localstack:4566",
        lambda: "http://localstack:4566",
        rds: "http://localstack:4566",
        redshift: "http://localstack:4566",
        route53: "http://localstack:4566",
        s3: "http://s3.localhost.localstack.cloud:4566",
        secretsmanager: "http://localstack:4566",
        ses: "http://localstack:4566",
        sns: "http://localstack:4566",
        sqs: "http://localstack:4566",
        ssm: "http://localstack:4566",
        stepfunctions: "http://localstack:4566",
        sts: "http://localstack:4566",
        ecs: "http://localstack:4566", 
      },
    ],
  };

  export const AWS_CONFIG_DEV = {
    region: "us-east-1",
  };