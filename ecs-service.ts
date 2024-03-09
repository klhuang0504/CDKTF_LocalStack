import { Construct } from "constructs";
import { ecsTaskDefinition, ecsService, ecsCluster} from "@cdktf/provider-aws";

export class EcsServiceStack extends Construct {
  public cluster: ecsCluster.EcsCluster
  public taskDefinition: ecsTaskDefinition.EcsTaskDefinition
  public service: ecsService.EcsService

  constructor(scope: Construct, id: string) {
    super(scope, id);

    // Create an ECS Cluster
    this.cluster = new ecsCluster.EcsCluster(this, 'EcsCluster', {
      name: 'my-cluster',
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
    // this.service = new ecsService.EcsService(this, 'EcsService', {
    //   name: 'my-service',
    //   cluster: this.cluster.id,
    //   desiredCount: 2,
    //   launchType: 'FARGATE',
    //   taskDefinition: this.taskDefinition.arn,
    // });

    // Optionally, add more resources like Load Balancer, Target Group, etc.
  }
}










