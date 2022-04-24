#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AwsCdkPracticeStack } from '../lib/aws_cdk_practice-stack';

const app = new cdk.App();
new AwsCdkPracticeStack(app, 'AwsCdkPracticeStack', {
});