nose_x="";
nose_y="";
text_size="";

function setup() {
    canvas = createCanvas(700, 500);
    // canvas.center();
    video = createCapture(VIDEO);
    video.size(700, 500);
    model = ml5.poseNet(video, model_loaded);
    model.on("pose", get_result);
}

function draw() {
    background("yellow");
    textSize(text_size);
    fill("black");
    text("Dhanush",100,200);
}

function model_loaded() {
    console.log("poseNet is loaded");
}

function get_result(pose_array) {
    if (pose_array.length > 0) {
        // console.log(pose_array);
        right_wrist_x = pose_array[0].pose.rightWrist.x;
        right_wrist_y = pose_array[0].pose.rightWrist.y;
        left_wrist_x = pose_array[0].pose.leftWrist.x;
        left_wrist_y = pose_array[0].pose.leftWrist.y;
        nose_x = pose_array[0].pose.nose.x;
        nose_y = pose_array[0].pose.nose.y;
        text_size=Math.floor(left_wrist_x-right_wrist_x);
        document.getElementById("square_side").innerHTML="The Side Of The Square Is "+text_size;
    }
}

