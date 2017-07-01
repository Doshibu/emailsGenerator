#  :memo: EmailsGenerator
This node project generate email depending on few arguments :

    - Your firstname
    - Your lastname
    - Seperators that could be added in prefix
    - The domain you wish to linked to

##  :open_mouth: To use it  :ok_hand:

The project use nodeJS, so make sure to install it before all.
Then you can :

1) Download the sources (or fork/clone the project) ;
2) Execute in the NodeJS shell the command : "npm install" ;
3) Then, you should be able to run the project with the command : "node index.js"

Notice the following parameters that you can provide :

    - -f / --firstname   (default value : 'riri')
    - -l / --lastname    (default value : 'fifi')
    - -s / --separator   (default value : '!#$%&*+-/=?^_`{|}~')
    - -d / --domain      (default value : 'gmail.com')

Example call :

```
node index.js -f Donald -l Trump -s .+_-  -d usa.org
```

Or, run it with default values :

```
npm start
```
