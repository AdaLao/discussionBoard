# Discussion Board (Web)

# Purpose
One-page discussion board allows users to create messages and comment on existing messages, also includes validations.
The page content can always align center, no matter what the page zoom size is.
Example for discussion Board. Hope it can help the beginning learner.

# Preparation
Must install Node.js, EJS, MongoDB 

# Instance
The pictures in the result(file) shows the running result.

# Step
###
```
install MongoDB
*********************************************************************************
Follow the instructions(website) to use commands to install it.
https://docs.mongodb.com/manual/administration/install-community/

In macOS use --
$ brew tap mongodb/brew
$ brew install mongodb-community@4.4
$ brew services start mongodb-community@4.4
$ ps aux | grep -v grep | grep mongod
$ mongo 
*********************************************************************************
Now, you can use the mogo.
```

###
```
install Node.js 
*********************************************************************************
Download the Node.js and install it.
https://nodejs.org/en/download/
*********************************************************************************

```

###
```
install EJS
*********************************************************************************
Use this command to install it.
$ npm install ejs

I use --
$ npm init -y
$ npm i express ejs mongoose express-session express-flash
*********************************************************************************

```

###
```
Create server.js and new .ejs document 
*********************************************************************************
$ touch server.js
$ mkdir views
$ cd views
$ touch index.ejs
*********************************************************************************
Now, you can edit the index.ejs, which is under the views file.
```

###
```
Run the project
*********************************************************************************
$ npm run
$ node server.js
open the web page --
    http://localhost:8000
*********************************************************************************
Now you can test the web page and enjoy the same functions as the pictures shown in the result file.
```

# Note
The $ changes into % now.

# Example
###
```
To use the Post-message function
*********************************************************************************
Put something into the white input-boxs(above the the Post-message button), then click the Post-message button.
When the Name-input or Message-input is blank, click the the Post-message button, the blank place will pop-up 
prompt: "Please fill in this field!"
The Name-input must be English, at least 3 characters(only letter, no number, no space, and no notation).
The Message-input no special limit except cannot be blank.
*********************************************************************************

```

###
```
To use the Post-Comment function
*********************************************************************************
Except for clicking the Post-Comment button, other operations are the same as the Post-Comment function.
*********************************************************************************

```

# About the copyright of the background image:
If the owner of the picture believes that my non-profit use is infringing, please send an email to 

       jieyinglaohk@gmail.com 
       
       to inform that I will delete the picture and no longer make it public.
       
The picture was taken from the part of the following picture:
       https://depositphotos.com/40160207/stock-illustration-natural-green-background.html
