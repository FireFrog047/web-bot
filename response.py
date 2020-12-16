userDetails = {
  '/FireFrog':{
    "link": "Ford",
    "model": "Mustang",
    "year": 1964
    }, 

  '/test':{
    "link": "Ford new",
    "model": "Mustang",
    "year": 1964
    },
}

botResponse = {
  '1':'Hello There', 
  '2':'How old are you',
  '3':'Follow this -link- to reach me'
}

def sent_bot_sanetized_response(currentIndex, user):

    tempBotResponse=botResponse[currentIndex]

    if '-link-' in tempBotResponse:
        return tempBotResponse.replace("-link-", userDetails[user]['link'])
    
    else:
        return tempBotResponse




