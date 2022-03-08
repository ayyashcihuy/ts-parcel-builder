# ts-parcel-builder

Learning Typescript in Real Chase using parcel-builder

# Udemy 51 - App Overview using parcel-builder

# Apps Overview

Application that randomly generate user and company. User and company have location property. also using gmaps for showing their location on the map.

Goal: more familiar with classes in ts and how to make reusable code with ts for interface.

# Setup

npm install -g paracel-bundler --> ts gonna execute easyly with framework

# Initialization

1. Create index.html --> parcel gonna see it as index.ts
2. Feed the index.ts with code
3. run parcel index.html

# Project Structure

1. Create Collection of different file that contain one single class that represent everything inside the project. there are 3 dif things. 1 user class, 1 separate file represent company class, 1 separate file that hold class to represent a map and methods to show point map in user.

2. index.ts --> map.ts, user.ts, company.ts in src Folder

# User.ts Handle

1. Generate Random Properties

- Note: Typescript want to check code using types. but js library didnt have types. so ts help with type definition file --> telling the ts compiler about function (what it create, what it return) --> sometimes it will install automatically (ex: axios). but faker doesnt. so we should

- Note: Export in typescript can using export before class or export default. but it will exported as single with no curly bracket. so better use export class ...

- API key for Gmaps --> see google docs for API

2. Diagram
   Company class: new Company --> reference companyName/catchPhrase/lat/lng
   User: new User --> Reference name/lat/lng
   Google Map: dont call this method: setZoom, setCenter, setStreetView etc. we should HIDE --> idealy Map can do new Map, and addMarker. --> Use Private Modifiers.

3. Similar Code
   Ts --> use interface to satisfied the method --> using the requirement

# Quick Review

1. Restrict the amount of API's surface area
2. Minimizing access for another enginer's what they can do
3. We can use TS to help TS himself to check the error location -> interface, implements in class
