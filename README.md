# testapphomey
test app homey with visual studio

for programming homey apps in visual studio community 2015 

i try to automate the test process of an app for homey.

you can use the visual studio facilities to write the app.


you have to install  the athom cli and fs modules in node
make a node.js javascript project in vs 
add runcommandline.js in project folder.

check if cmd box of node is executed with the same code aas in runcommand, with me it is  "C:\Program Files\nodejs\nodevars.bat" because i am using nvm , a node version selector.

add your homey files and maps to project folder 
make runcommandline.js startup file of project

when you want to test a app on your homey just run project.



runcommandline.js will :
delete the app folder with files  it makes with: athom project create from former run.
create a new app folder with the suggestions athom project create gives. "com.athom.hello" version etc
chooses your homey and runs it.


