# bitbot-project-2a-ultrasonic

## step 1 setup
First we need to create a variable called "distance". Open the "variable" tab and create a variable called "distance".
select the "set distance to" block and place it in the "forever" block.
next go to the "bitbot" tab and then the "inputs and outputs" tab look for the "read sonar as cm" block.
Replace the "0" in the "set distance to" block.

```block
let distance = 0
```

## Step 2 making a decision
Next we need to get a "if then else" block from the "logic" tab and place it under the "set distance to" block.

```block
let distance = 0
basic.forever(function () {
    distance = bitbot.sonar(BBPingUnit.Centimeters)
    if (true) {
    	
    } else {
    	
    }
})```

## step 3 what is the decision about?
We are looking at the distance being read by the sonar sensor and asking if it less the a certan number to do something.
Open the "logic" tab and get the "0 < 0" block and replace the "true" in the if then else" block.
Then open the "variable" tab and get the "distance" variable and place it in the frist "0" in the "0 < 0" block.
Replcae the second "0" in the "0 < 0" block with the number "15"

```block
let distance = 0
basic.forever(function () {
    distance = bitbot.sonar(BBPingUnit.Centimeters)
    if (distance < 15) {
    	
    } else {
    	
    }
})
```

## step 4 What do we do?
if the distance is less than 15cm then we want the bitbit to change direction.
Go to the "bitbot" "motors" tab and take the "spin at speed" block and plae it after "then" in the "if then else" block.
Change the motor to "right" and the speed to "60%" and the time to "400ms"
Then go to "bitbot" "motors" tab and take the "go at speed" tab and plce it under the "else" in the "if then else" block.
Change the driection to "forward" and the speed to "60"%
This will make the bitbot continue forward if nothing is detected les that 15cm from the sensor.

```block
let distance = 0
basic.forever(function () {
    distance = bitbot.sonar(BBPingUnit.Centimeters)
    if (distance < 15) {
        bitbot.rotatems(BBRobotDirection.Right, 60, 400)
    } else {
        bitbot.go(BBDirection.Forward, 60)
    }
})
```

## Step 5 Check the code.
Check the code and upload to the Bitbot.

```block
let distance = 0
basic.forever(function () {
    distance = bitbot.sonar(BBPingUnit.Centimeters)
    if (distance < 15) {
        bitbot.rotatems(BBRobotDirection.Right, 60, 400)
    } else {
        bitbot.go(BBDirection.Forward, 60)
    }
})
```

