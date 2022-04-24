import * as cdk from 'aws-cdk-lib'
import { aws_ec2 as ec2 } from 'aws-cdk-lib'

export class Vpc extends cdk.Stack {
  public vpc: ec2.Vpc;

  constructor() {
    super()
  }

  createVpc(scope: cdk.App) {
    this.vpc = new ec2.Vpc(scope, 'VPC', {
      vpcName: 'ecs-practice',
      cidr: '10.0.0.0/16',
      natGateways: 0,
    })
  }
}