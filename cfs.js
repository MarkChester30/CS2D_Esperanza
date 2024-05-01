// Variables
let Name = "Mark Chester Esperanza";
let Address = "Apatot, San Esteban Ilocos Sur";
let Age = 21;
let ClassRole = "Student"; // Choose from: "Officer", "Student", "Teacher"
let password = "MCE090902BSCS"
// Constant
const Course = "BSCS"; // Choose from: "BSCS", "BSM", "BAEL"

// Conditional Statement to check Course
if (Course === "BSCS" || Course === "BSM" || Course === "BAEL") {
    // Protective layer to check Class Role
    switch (ClassRole) {
        case "Officer":
            console.log("Officer role detected.");
            break;
        case "Student":
            // Protective layer to check Password
            if (password.length >= 12 && password.includes(Course)) {
                // Printing Name and Address multiple times based on Age
                for (let i = 0; i < Age; i++) {
                    console.log(`Name: ${Name}`);
                    console.log(`Address: ${Address}`);
                }
            } else {
                console.log("Invalid password or course mismatch for student.");
            }
            break;
        case "Teacher":
            console.log("Teacher role detected.");
            break;
        default:
            console.log("Invalid class role.");
    }
} else {
    console.log("Invalid course.");
}