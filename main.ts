import { Construct } from "constructs";
import { EcsServiceStack } from "./ecs-service"
import { AwsProvider } from "@cdktf/provider-aws/lib/provider";
import { App, TerraformStack } from "cdktf";
import { AWS_CONFIG } from "./localstack-config";
import { Instance } from "@cdktf/provider-aws/lib/instance";
import { S3Bucket } from "@cdktf/provider-aws/lib/s3-bucket";



class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);
    new AwsProvider(this, 'AWS', AWS_CONFIG);
    // new AwsProvider(this, 'AWS', AWS_CONFIG_DEV);

    new EcsServiceStack(this, 'my-ecs-service');  

    // Create an EC2 Instance
    new Instance(this, "compute", {
      ami: "ami-ff0fea8310f3",
      instanceType: "t2.micro",
    });

    const s3Bucket = new S3Bucket(this, 'MyS3Bucket', {
      bucket: "my-bucket",
      // acl: 'private', // Access control, e.g., 'private', 'public-read', etc.
    });
  }
}

const app = new App();
new MyStack(app, "DigdagOnAws");
app.synth();
