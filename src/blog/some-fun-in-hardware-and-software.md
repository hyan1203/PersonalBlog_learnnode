---
title: Some Fun In Hardware With Software
date: 2015-08-12
tags: Sensor, Bluetooth, Data-Management
---

I recently attended a workshop about how to write program for sensors, which is very interesting.
There are all different kinds of sensors, such as temperature sensor, humidity sensor and PM2.5 sensor etc.
You can do a lot funny things with all these sensors.

![Some Fun In Hardware With Software - picture1][picture1]

In order to program for these hardwares, you need a breadboard, CPU chip, power chip and whatever sensor
you would like to play with. What I am doing after workshop is trying to use bluetooth in breadboard to
send out the data from the sensors to the Android phone, Android phone sends out data to database and
making a website to manage all data. The finished board is kind of complicated, but it's really interesting.


<!--more-->

----------------------------------------------------------------------------------------------------

Basically my whole project consists of three parts. The key points for each part are:

* Breadboard

    * CPU

    * Bluetooth: Connect board with Android phone to send data to each other

    * Sensors(temperature, humidity, PM2.5, unhealthy gas)

    * mbed(useful programming platform for hardware )


* Android Phone

    * Bluetooth Configuration

    ![Some Fun In Hardware With Software - picture2][picture2]

    * Login Interface(user can login to submit data to database)

    ![Some Fun In Hardware With Software - picture3][picture3]

    * Main Interface(user can get data from different sensors)

    ![Some Fun In Hardware With Software - picture4][picture4]

* Webpage

    * Login and Register

    * Chart for Data Display for all users

    * Manage Personal Data for the certain user

I almost finished the part of Breadboard and Android phone, I am working on Webpage [hanbingyan.net/projects/data management site](http://www.hanbingyan.net/projects/Data Management Site)  


[picture1]: http://myspace.hanbingyan.net/images/project1-1.jpg "This is my breadboard with CPU, power, bluetooth and sensors"
[picture2]: http://myspace.hanbingyan.net/images/project1-2.png "Connect to bluetooth in breadboard"
[picture3]: http://myspace.hanbingyan.net/images/project1-3.png "Login in as a certain person called Mahsa"
[picture4]: http://myspace.hanbingyan.net/images/project1-4.png "Get data from unhealthy gas sensor"
