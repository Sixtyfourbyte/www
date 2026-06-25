+++
date = '2026-06-25T14:20:57-05:00'
draft = false
title = 'ddr53 Client'
description = 'Dynamic DNS utility for AWS Route53'
categories = ["dns"]
tags = ["dns", "python"]
repo = "https://github.com/bz0qyz/ddr53-client"
featured = true
+++
## Sumary
ddr53-client is a simple client for updating Route53 DNS records. It can be used to update a single record or multiple records at once. Optionally, it can be used to update a security group rule with the new IP address.

It can run as a daily cron job to update DNS for sites with a dynamic address that can change periodically.

## OCI Image
There is also an [OCI container image](https://github.com/bz0qyz/ddr53-client/pkgs/container/bz0qyz%2Fddr53-client) available that can be used in docker or kubernetes.

## Usage
Visit the project [repository](https://github.com/bz0qyz/ddr53-client) for usage details.