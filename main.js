function calculateSGPA() {
    const gradePoints = [10, 9, 8, 7, 6, 5, 4, 0];
    const marksRanges = [90, 80, 70, 60, 50, 45, 40, 0];
    const creditPoints = [4, 4, 3, 1, 1, 1, 3, 3]; 

    const inputFields = document.querySelectorAll('input[type="number"]');
    let totalCredits = 0;
    let totalGradePoints = 0;

    inputFields.forEach((input, index) => {
        const marks = parseInt(input.value) || 0;
        const credits = creditPoints[index]; 

        for (let i = 0; i < marksRanges.length; i++) {
            if (marks >= marksRanges[i]) {
                totalGradePoints += credits * gradePoints[i];
                break;
            }
        }

        totalCredits += credits;
    });

    const sgpa = totalGradePoints / totalCredits;

    if (!isNaN(sgpa)) {
        document.getElementById('sgpaDisplay').textContent = `SGPA: ${sgpa.toFixed(2)}`;
    } else {
        document.getElementById('sgpaDisplay').textContent = "Please enter valid marks!";
    }
}

function resetMarks() {
    const inputFields = document.querySelectorAll('input[type="number"]');
    inputFields.forEach(input => {
        input.value = '';
    });

    document.getElementById('sgpaDisplay').textContent = '';
}