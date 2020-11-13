---
title: "Design a Voice User Interface"
date: 2020-09-10
categories: AlexaTheory
tags: [alexa, languages]
toc: true
toc_sticky: true
toc_label: "Table of Contents"
toc_icon: "cog"
---

## User Interaction
Before creating a VUI, you must understand *key voice design concepts*. An Alexa-enabled device is waken up with the word "Alexa". The user is then able to make a request: *"Alexa, turn off the bedroom lights"* or ask a question: *"What's the wather like tomorrow?"*.<br>
However, the "wake word" can be changed by the user in the Alexa's App Settings.

### Change the wake word
Press on the **Devices** tab and wait for the page to load. Press on "Echo & Alexa" in the upper left. Select your device and scroll down to the "General" slice. Press on "Wake Word" and change it with the possible replacements: *Amazon, *Computer* or *Echo*.

## Voice Design Concepts
Let's list all the major concepts:
- **Launch Word**
  *ask, launch, open, tell, use*<br>
  It's a *transitional action word* that tells Alexa that a skill invocation will possibly follow.
- **Intent**
  It's an action that accomplish a user's spoken request. It can have arguments (called slots).
- **Invocation name**
  It is used by the user to begin the interaction with the skill.
- **Prompt**
  It's a text spoken to the user to ask some information.
- **Slot**
  It's an input value provided in a user's request.
- **Utterance**
  It's a user spoken request. It can invoke a skill, provide inputs for a skill, confirm an action for Alexa and many other functions.
- **Wake Word**
  *alexa, amazon, computer, echo*<br>
  It tells Alexa to start listening to the user commands.

### Identify slots for an intent
| Utterance                              | maps to                                |
|----------------------------------------|----------------------------------------|
| "I am walking to Bologna to go biking" | MODE_OF_TRAVEL, TO_CITY and ACTIVITIES |
| "I am going on a trip  Wednesday."     | TRAVEL_DATE                            |
| "I need to travel from Milan to Turin" | FROM_CITY, TO_CITY and TRAVEL_DATE     |
| "I want to visit Turin"                | TO_CITY                                |

## Key Concepts

### Interaction Model
An interaction model is a sequence of intents, utterances and slots that idenfy a skill from another. The Lambda skill code determinates how the skill handles the intents.

### Voice Design
You must pay a lot of attention in desining the skill to simulate human conversation.

### Situation Design
It's a voice-first method that can be used to design VUIs. Each interaction between the user and the skill represents a turn. Each turn has a context (the situation). The first time the user interact with a skill, some data are unknown. But once the skill has stored the information, it'll be able to use them in the next user interaction:
- Utterance: What the user said
- Situation: context
- Response: Alexa's response
- Prompt: Question that Alexa asks

### Well-Designed VUI
- natural forms of communication
- easly information navigation
- eyes-free & hands-free experience

## Best Practices for Voice Design

### Be brief
Decrease the number of steps to complete a task.

### Be contextually relevant
Help the user to understand by listing options from the most relevant to least one.

### Stay close to Alexa's personality
You should design a helpful and fiendly skill. The VUI should be natural and conversational. Moreover, you could engage the user with questions.

### Write for the ear
Write an Alexa dialog as you were talking with someone, not as you were writing a poem.

## Reference
[Build an Engaging Alexa Skill - Module 2](https://developer.amazon.com/en-US/alexa/alexa-skills-kit/get-deeper/tutorials-code-samples/build-an-engaging-alexa-skill/module-2)