---
title: "Hello World in Alexa Skill"
date: 2020-09-05
categories: AlexaSkills
tags: [alexa, languages]
toc: true
toc_sticky: true
toc_label: "Table of Contents"
toc_icon: "cog"
---

## Notes
[link1](https://www.youtube.com/watch?v=RzS69XCe9cw)
Go to [Amazon Dev](http://developer.amazon.com), press on [Alexa](http://developer.amazon.com/en-US/alexa#).<br>
Press the tree vertical dots and click on [Alexa Developer Console](https://developer.amazon.com/alexa/console/ask).<br>
Click on the blue botton **Create Skill**.<br>
Skill name: "Math Facts"
Default language: English
1. Choose a model to add your skill --> Custom
2. Choose a method to hot ... --> Alexa-Hosted Python
Go to the top of the page and press on "Create skill"

1. Choose a template to add to your skill --> Hello World Skill
Click the "Choose" button"

- **Invocation**
    1. Skill Invocation Name --> math facts
- **Itents**
    1. Delete the "HelloWorldIntent"
    2. Add a brand new intent
        - Create custom intent --> "FactIntent"
        - Click on "Create custom intent"
        - Sample Utterrances (what might a user say to invoke this intent?)
            1. "Cosa sai in merito alla matematica"
            2. "Dimmi una curiosità in merito alla matematica"
            3. "Math Fact"
        - Click on "Save Model"
        - Click on "Build Model"
    3. Switch to the "Code" tab (upper slice)
        - open "lamba_functions.py"
            1. remove class "LaunchRequestHandler" and "HelloWorldIntentHandler"
            2. remove the calls at the end of the file (sb. ...)
            3. import random (module)
            4. create a list of facts (the avr is called 'facts')
```
facts = ['', '', '']
```
            5. create a new class called FactIntentHandler()
```
class FactIntentHandler(AbstractRequestHandler):

    def can_handle(self, handler_input):
        return ask_utils.is:request_type("LaunchRequest")(handler_input) or ask_utils.is_intent_name("FactIntent")(handler_input)
    
    def handle(self, handler_input):
        speak_output = random.choice(facts)

        return (
            handler_input.response_builder
                .speak(speak_output)
                .response
        )
```
            1. call it after sb.SkillBuilder() --> sb.add_request_handler(FactIntentHandler())
            2. press on "Save" button in the upper right
            3. press on "Deploy"
    4. Switch to the "Test" tab (upper slice)