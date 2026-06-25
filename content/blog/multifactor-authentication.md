+++
title = "multi-factor authentication"
date = 2019-09-16T09:51:09-05:00
author = "bz0qyz"
draft = false
tags = ["security", "passwords"]
categories = ["security"]
+++

# What is it?
Traditionally we just use a combination of a user name and password to access a secure web site or service. With the current pace of malware, [phishing techniques](/posts/lets-go-phishing) and other methods used in identity theft, a more-secure method is needed.

Multi-factor authentication is known by several terms and acronyms like:

* mfa
* 2fa
* 2-factor

Essentially a multi-factor authentication method includes at least 2 types of credentials:

* Something you `know`. Example: a password
* Something you `have`. Example: a smart phone

When you are using an online account with multi-factor authentication enabled, you will be prompted to enter the 2nd password after you login with your traditional user name and password.

Since you are already familiar with a traditional password, we will focus on the 2nd authentication factor, the "something you have".

# Types of multi-factor authentication
Multi-factor authentication can be implemented in several ways. These are the most common methods in use and how they work:

## Scratch codes
A static list of codes provided by the site that can either be used one-time each or in a specific order. Scratch codes are often used as an emergency fall-back method with other types of multi-factor authentication.

## OTP (One-time password)
A one-time use only temporary password. The OTP can be accessed in different ways depending on how it has been implemented. These are the most common types in use.
### SMS
The OTP codes are sent to your phone in an SMS message when you attempt to login.

### TOTP (timed one-time pasword)
The OTP codes are generated using an app on your smart phone like 'Google Authenticator':

  * [<i class='fa fa-android'></i> android](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en_us)
  * [<i class='fa fa-apple'></i> apple ios](https://apps.apple.com/us/app/google-authenticator/id388497605)

### Smartphone (push)
An app installed on your smartphone will prompt you with a notification to 'Accept' the authentication request. This method is only used by sites that have a dedicated authenticator app like the 'Microsoft Authenticator'.

## Hardware Tokens
Hardware tokens are the most secure multi-factor method available. Many large organizations are requiring hardware tokens for employees. Hardware tokens are a recommended investment in your online security. Due to the complexity of this topic, it will get a dedicated post in the future.

### Recomended hardware tokens
  * [Yubikeys](https://www.yubico.com/)
  * [Google Titan Key](https://cloud.google.com/titan-security-key/)
