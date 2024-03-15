const localstackUrl = process.env.LOCALSTACK_URL || "localhost";

export const AWS_CONFIG = {
  region: "us-east-1",
  endpoints: [
    {
      apigateway: `http://${localstackUrl}:4566`,
      apigatewayv2: `http://${localstackUrl}:4566`,
      cloudformation: `http://${localstackUrl}:4566`,
      cloudwatch: `http://${localstackUrl}:4566`,
      dynamodb: `http://${localstackUrl}:4566`,
      ec2: `http://${localstackUrl}:4566`,
      es: `http://${localstackUrl}:4566`,
      elasticache: `http://${localstackUrl}:4566`,
      firehose: `http://${localstackUrl}:4566`,
      iam: `http://${localstackUrl}:4566`,
      kinesis: `http://${localstackUrl}:4566`,
      lambda: `http://${localstackUrl}:4566`,
      rds: `http://${localstackUrl}:4566`,
      redshift: `http://${localstackUrl}:4566`,
      route53: `http://${localstackUrl}:4566`,
      // s3: `http://s3.${localstackUrl}.localstack.cloud:4566`,
      s3: "http://s3.localhost.localstack.cloud:4566",
      secretsmanager: `http://${localstackUrl}:4566`,
      ses: `http://${localstackUrl}:4566`,
      sns: `http://${localstackUrl}:4566`,
      sqs: `http://${localstackUrl}:4566`,
      ssm: `http://${localstackUrl}:4566`,
      stepfunctions: `http://${localstackUrl}:4566`,
      sts: `http://${localstackUrl}:4566`,
      ecs: `http://${localstackUrl}:4566`,
    },
  ],
};

export const AWS_CONFIG_DEV = {
  region: "us-east-1",
};
