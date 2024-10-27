// Function to assign a grade based on the mark
const assignGrade = (mark) => {
    if (mark > 79) return 'A';
    if (mark >= 60) return 'B';
    if (mark >= 50) return 'C';
    if (mark >= 40) return 'D';
    return 'E';
};

// Main function to manage input/output
const manageGrades = () => {
    const students = ["Caleb", "Faith", "Esther", "Purity"];
    let currentStep = 'name'; // Track whether we are asking for a name or mark
    let currentStudent = {}; // Temporary storage for each student’s data

    console.log("Enter student's name (or type 'done' to finish):");

    process.stdin.on('data', (input) => {
        const data = input.toString().trim();

        // If user types 'done', display all students and exit
        if (data.toLowerCase() === 'done') {
            console.log("\nStudent Grades:");
            students.forEach(student => {
                console.log(`Name: ${student.name}, Mark: ${student.mark}, Grade: ${student.grade}`);
            });
            process.exit();
        }

        // If we're asking for a name
        if (currentStep === 'name') {
            currentStudent.name = data;
            currentStep = 'mark';
            console.log("Enter the student's mark (0 - 100):");

        // If we're asking for a mark
        } else if (currentStep === 'mark') {
            const mark = parseInt(data, 10);

            // Validate mark
            if (isNaN(mark) || mark < 0 || mark > 100) {
                console.log("Invalid input! Please enter a number between 0 and 100.");
            } else {
                currentStudent.mark = mark;
                currentStudent.grade = assignGrade(mark);
                console.log(`Grade for ${currentStudent.name}: ${currentStudent.grade}`);

                // Store student data
                students.push(currentStudent);

                // Reset for next student entry
                currentStudent = {};
                currentStep = 'name';
                console.log("\nEnter student's name (or type 'done' to finish):");
            }
        }
    });
};

// Run the grade management program
manageGrades();
