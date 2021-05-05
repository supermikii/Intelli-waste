# Intelli-waste
SFHacks 2021

## Demo 
* Devpost: https://devpost.com/software/intelli-waste
* Youtube: https://youtu.be/vBOSwo9VveA

## Inspiration for Intelli-Waste
As the pandemic seems never ending, so are our stay-at-home restrictions. As we all continue to adhere to these restrictions and learn to navigate all our activities from home, the environment has been breathing a sigh of relief. Nevertheless, stay-at-home has increased our consumptions exponentially, resulting in significant rises in household waste production.

Our inspiration for this project was this increased waste production, but still mediocre waste disposal and management systems. All over the world, people are tossing their waste into the trash bin and calling it a day. Although some people are doing this out of laziness, we believe that a lot of people are uninformed or misinformed about proper waste disposal. We hope to make a small difference in people's mindsets towards waste through this app, and hope to make it interesting enough for people to actively work towards doing their part in saving the environment.

## What Intelli-Waste does
Intelli-Waste is a smart waste management system powered by state-of-the-art AI. It's incredibly simple to use. Take a picture of a garbage item with your phone and let Intelli-Waste tell you how to dispose it, where to dispose it, and how much you have reduced your carbon footprint! Keep logging waste items and keep increasing your reduced carbon footprint score!

## How it works
Intelli-Waste has you sign into the app and then prompts you with 3 different options.

1) You can navigate straight to the camera where you will take a picture of the garbage item. After this picture is taken, we use a ML model built on top of deep learning and waste classification. It uses a pre-trained image classification network (MobileNet) through transfer learning that will take this image and run it through image analysis to decipher if it is a recyclable item, a compostable item, or trash. Depending on which it is, it will display that to the user and also update your Carbon Footprint in the dashboard with how much just that one piece has affected your daily CO2 output.

2) You can navigate to our maps section which displays every nearby recycling center near you so if you don’t live right on the streets or in a public neighborhood that collects your recycling for you, you can be informed as to where you can find the nearest recycling center.

3) You can navigate to our “Learn More” tab where, by using News API, you can receive links to tons of news articles relating to the concept of sustainability for your own readings. We hope that from this people are able to become more informed about our environment.


## Technologies:
* flask
* google-cloud
* google-maps
* javascript
* mongodb
* python
* react-native
* tensorflow
