let tinggi = 170
let berat = 90
let tinggiBMI = tinggi / 100

let BMI = berat / (tinggiBMI*tinggiBMI)


if(BMI < 18.5){
    console.log("Status berat badan Rhodey adalah Kekurangan berat badan, dengan berat " + BMI + "kg");
}else if(BMI >= 18.5 && BMI <= 24.9){
    console.log("Status berat badan Rhodey adalah Normal(ideal), dengan berat " + BMI + "kg");
}else if(BMI >= 25.0 && BMI <= 29.9){
    console.log("Status berat badan Rhodey adalah Kelebihan berat badan, dengan berat " + BMI + "kg");
}else if(BMI >= 30.0){
    console.log("Status berat badan Rhodey adalah Kegemukan(Obesitas), dengan berat " + BMI + "kg");
}
