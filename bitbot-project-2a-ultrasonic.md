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



## all code
let distance = 0
basic.forever(function () {
    distance = bitbot.sonar(BBPingUnit.Centimeters)
    if (distance < 15) {
        bitbot.rotatems(BBRobotDirection.Right, 60, 400)
    } else {
        bitbot.go(BBDirection.Forward, 60)
    }
})
