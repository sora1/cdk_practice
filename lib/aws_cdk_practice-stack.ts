
import * as cdk from 'aws-cdk-lib';
import { aws_ec2 as ec2 } from 'aws-cdk-lib';

export class AwsCdkPracticeStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    let vpc = new ec2.Vpc(this, 'PracticeVpc', {
      vpcName: 'testName',
      cidr: '10.0.0.0/16',
      subnetConfiguration: [
        {
          cidrMask: 24,
          name: 'public-1',
          subnetType: ec2.SubnetType.PUBLIC
        },
        {
          cidrMask: 24,
          name: 'public-2',
          subnetType: ec2.SubnetType.PUBLIC
        },
      ],
    })

    new ec2.Instance(this, 'PracticeEc2', {
      vpc: vpc,
      machineImage: ec2.MachineImage.latestAmazonLinux(),
      instanceType: ec2.InstanceType.of(ec2.InstanceClass.T2, ec2.InstanceSize.MICRO),
    })

  }
}
