import * as pulumi from "@pulumi/pulumi";

const config = new pulumi.Config();

const project = pulumi.getProject();
const stack = pulumi.getStack();
const region = config.require('region');

const prefix = `${project}-${region}-${stack}`;