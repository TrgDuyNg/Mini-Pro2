const students = [
    {name: 'An', grade: 'A', score: 77 },
    {name: 'Bình', grade: 'B', score: 100},
    {name: 'Tín', grade: 'C', score: 50},
    {name: 'Duy', grade : 'S', score: 1000}
]; 

function printStudentScores(students){
    students.forEach(student => {
        const{name, score} = student
        console.log(`Tên ${name}, Điểm${score}`)
    });
}

printStudentScores(students)