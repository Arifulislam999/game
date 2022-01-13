alert(
    `ALERT.......Read Bleow...
    "প্রথমে আপনার জিহ্বা দিয়ে অ্যারো চিহ্ন স্থানে লাগান এবং অ্যারো চিহ্ন যেই দিকে ওই দিকে আপনার জিহ্বা দিয়ে ঘষা দিন......। ওকে বাটনে ক্লিক করুন এবং সাথে সাথে শুরু করুন......ক্লিক ওকে। "`
);
alert("OK START");
let up = document.querySelector(".game");
let right = document.querySelector("#right");
let left = document.querySelector("#left");

console.log(right, left);
let count = -35000;
setInterval(() => {
    if (count > 0) {
        return false;
    }
    up.style.marginTop = count + "px";
    count += 6;
}, 10);