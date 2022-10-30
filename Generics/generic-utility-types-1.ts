// Built-In Partial Type - wraps the specified type and changes the specified type to a type where all the specified properties are optional.

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal (
    title: string,
    description: string,
    date: Date
) : CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
}