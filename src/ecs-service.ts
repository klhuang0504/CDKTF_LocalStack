import { Construct } from "constructs";
import { ecsTaskDefinition, ecsCluster, ecsService} from "@cdktf/provider-aws";
import { Vpc } from "@cdktf/provider-aws/lib/vpc";
import { Subnet } from "@cdktf/provider-aws/lib/subnet";


export class EcsServiceStack extends Construct {
  public cluster: ecsCluster.EcsCluster
  public taskDefinition: ecsTaskDefinition.EcsTaskDefinition
  // public service: ecsService.EcsService

  constructor(scope: Construct, id: string) {
    super(scope, id);

    // Create an ECS Cluster
    this.cluster = new ecsCluster.EcsCluster(this, 'EcsCluster', {
      name: 'my-cluster',
    });

    // Define VPC
    const vpc = new Vpc(this, 'ecs-vpc', {
      cidrBlock: '10.0.0.0/16', // Specify the CIDR block for the VPC
      enableDnsSupport: true,
      enableDnsHostnames: true,
      tags: {
        Name: 'MyEcsVpc', // Specify a name for the VPC
      },
    });

    // Define Subnet
    const subnet = new Subnet(this, 'ecs-subnet', {
      vpcId: vpc.id,
      cidrBlock: '10.0.1.0/24', // Specify the CIDR block for the subnet
      availabilityZone: 'us-west-2a', // Specify the availability zone for the subnet
      mapPublicIpOnLaunch: true, // Set to true if you want instances in this subnet to have public IPs
      tags: {
        Name: 'MyEcsSubnet', // Specify a name for the subnet
      },
    });

    // Define a Task Definition
    this.taskDefinition = new ecsTaskDefinition.EcsTaskDefinition(this, 'EcsTask', {
      family: 'my-task-family',
      cpu: '256',
      memory: '512',
      networkMode: 'awsvpc',
      requiresCompatibilities: ['FARGATE'],
      executionRoleArn: 'arn:aws:iam::123456789012:role/ecsTaskExecutionRole',
      containerDefinitions: JSON.stringify([
        {
          name: 'my-container',
          image: 'nginx',
          essential: true,
          portMappings: [
            {
              containerPort: 80,
              hostPort: 80
            }
          ]
        }
      ]),
    });

    // Create an ECS Service
    new ecsService.EcsService(this, 'EcsService', {
      name: 'my-service',
      cluster: this.cluster.id,
      desiredCount: 2,
      launchType: 'FARGATE',
      taskDefinition: this.taskDefinition.arn,
      networkConfiguration: {
        subnets: [subnet.id], // Use the created subnet for the service
        assignPublicIp: true, // Assign public IP to the task instances
      },
    });

    // Optionally, add more resources like Load Balancer, Target Group, etc.
  }
}










