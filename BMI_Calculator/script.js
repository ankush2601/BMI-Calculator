
const btn = document.querySelector('button');

btn.addEventListener('click', () => {

    const val1 = document.getElementById('input1');
    const weight = Number(val1.value);

    const val2 = document.getElementById('input2');
    const height = Number(val2.value);

    if (weight <= 0 || height <= 0 || !Number.isFinite(weight) || !Number.isFinite(height)) {
        alert("Please enter valid values");
        return;
    }

    // Calculate BMI
    const ans = weight / (height * height);

    // Select output element
    const bmi = document.getElementById('bmi');

    // Check BMI range
    if (ans < 18.5) {
        bmi.textContent = "BMI: " + ans.toFixed(2) + " - Underweight";
    }
    else if (ans < 25) {
        bmi.textContent = "BMI: " + ans.toFixed(2) + " - Normal Weight";
    }
    else if (ans < 30) {
        bmi.textContent = "BMI: " + ans.toFixed(2) + " - Overweight";
    }
    else {
        bmi.textContent = "BMI: " + ans.toFixed(2) + " - Obese";
    }

});
