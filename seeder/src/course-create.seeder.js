import faker from '@faker-js/faker';
import client from './graphql_client';
import { htmlToSlateAST } from '@graphcms/html-to-slate-ast';
import { generateValueBetweenMinAndMax, generateTimestamps } from './utils';
import { mutationCreateCourse } from './ql/Mutators';
import { queryGetDataCourseSeeder } from './ql/Queries';

(async () => {

  // Get all the data
  let data = await client.request(queryGetDataCourseSeeder);
  /*
   * Create a Course (Local Provider)
  */
  const createCourse = async ({ title, period, credit, weekTime, educationId, memberId, learnLineId,  specialisationId = "none" }) => {
    try {
      if (specialisationId === "none") {
        const { createCourse } = await client.request(mutationCreateCourse(false), { title, period, credit, weekTime, educationId, memberId, learnLineId });
        if (!createCourse) {
          throw new Error(`Can't create the Course with Course title ${createCourse.title}!`);
        }
  
        console.log(`Course created with Course title ${createCourse.title}!`)
      } else {
        const { createCourse } = await client.request(mutationCreateCourse(true), { title, period, credit, weekTime, educationId, memberId, learnLineId,  specialisationId });
        if (!createCourse) {
          throw new Error(`Can't create the Course with Course title ${createCourse.title}!`);
        }
  
        console.log(`Course created with Course title ${createCourse.title}!`)
      }
    } catch (error) {
      console.log(error);
    }
  };

  /*
   * Create Courses via promises
  */
  const createCourses = async (n = 1) => {
    const promises = [];
    // specialisationId
    const courses = [
      {
        title: "IT Communication",
        period: 3,
        credit: 3,
        weekTime: 6,
        educationId: data.educations[0].id,
        learnLineId: data.learnLines.filter(e => e.name === "Business & Communication")[0].id
      },
      {
        title: "IT Business",
        period: 4,
        credit: 3,
        weekTime: 6,
        educationId: data.educations[0].id,
        learnLineId: data.learnLines.filter(e => e.name === "Business & Communication")[0].id
      },
      {
        title: "Digital Marketing",
        period: 5,
        credit: 3,
        weekTime: 6,
        educationId: data.educations[0].id,
        learnLineId: data.learnLines.filter(e => e.name === "Business & Communication")[0].id
      },
      {
        title: "IT Entrepreneurship",
        period: 8,
        credit: 3,
        weekTime: 4,
        educationId: data.educations[0].id,
        learnLineId: data.learnLines.filter(e => e.name === "Business & Communication")[0].id
      },
      {
        title: "Computer Systems",
        period: 1,
        credit: 3,
        weekTime: 6,
        educationId: data.educations[0].id,
        learnLineId: data.learnLines.filter(e => e.name === "Applied Information Technology")[0].id
      },
      {
        title: "Data Management",
        period: 5,
        credit: 6,
        weekTime: 10,
        educationId: data.educations[0].id,
        learnLineId: data.learnLines.filter(e => e.name === "Applied Information Technology")[0].id
      },
      {
        title: "Content Management",
        period: 6,
        credit: 3,
        weekTime: 6,
        educationId: data.educations[0].id,
        learnLineId: data.learnLines.filter(e => e.name === "Applied Information Technology")[0].id
      },
      {
        title: "IT Exploration",
        period: 7,
        credit: 3,
        weekTime: 4,
        educationId: data.educations[0].id,
        learnLineId: data.learnLines.filter(e => e.name === "Applied Information Technology")[0].id
      },
      {
        title: "Web Design",
        period: 1,
        credit: 6,
        weekTime: 8,
        educationId: data.educations[0].id,
        learnLineId: data.learnLines.filter(e => e.name === "Creative Design & Development")[0].id
      },
      {
        title: "User Interface Design",
        period: 2,
        credit: 6,
        weekTime: 8,
        educationId: data.educations[0].id,
        learnLineId: data.learnLines.filter(e => e.name === "Creative Design & Development")[0].id
      },
      {
        title: "User Interface Prototyping",
        period: 3,
        credit: 6,
        weekTime: 8,
        educationId: data.educations[0].id,
        learnLineId: data.learnLines.filter(e => e.name === "Creative Design & Development")[0].id
      },
      {
        title: "Interactive Visual Media",
        period: 4,
        credit: 6,
        weekTime: 8,
        educationId: data.educations[0].id,
        learnLineId: data.learnLines.filter(e => e.name === "Creative Design & Development")[0].id,
        specialisationId: data.specialisations.filter(e => e.name === "Interactive Media Development")[0].id
      },
      {
        title: "Interactive Virtual Reality",
        period: 5,
        credit: 6,
        weekTime: 8,
        educationId: data.educations[0].id,
        learnLineId: data.learnLines.filter(e => e.name === "Creative Design & Development")[0].id,
        specialisationId: data.specialisations.filter(e => e.name === "Interactive Media Development")[0].id
      },
      {
        title: "Interactive Augmented Reality",
        period: 6,
        credit: 6,
        weekTime: 8,
        educationId: data.educations[0].id,
        learnLineId: data.learnLines.filter(e => e.name === "Creative Design & Development")[0].id,
        specialisationId: data.specialisations.filter(e => e.name === "Interactive Media Development")[0].id
      },
      {
        title: "Programming 1",
        period: 1,
        credit: 6,
        weekTime: 10,
        educationId: data.educations[0].id,
        learnLineId: data.learnLines.filter(e => e.name === "Computer Programming")[0].id,
      },
      {
        title: "Programming 2",
        period: 2,
        credit: 3,
        weekTime: 6,
        educationId: data.educations[0].id,
        learnLineId: data.learnLines.filter(e => e.name === "Computer Programming")[0].id,
      },
      {
        title: "Programming 3",
        period: 3,
        credit: 6,
        weekTime: 10,
        educationId: data.educations[0].id,
        learnLineId: data.learnLines.filter(e => e.name === "Computer Programming")[0].id,
      },
      {
        title: "Programming 4",
        period: 4,
        credit: 6,
        weekTime: 8,
        educationId: data.educations[0].id,
        learnLineId: data.learnLines.filter(e => e.name === "Computer Programming")[0].id,
        specialisationId: data.specialisations.filter(e => e.name === "Cloud Application Development")[0].id
      },
      {
        title: "Programming 5",
        period: 5,
        credit: 6,
        weekTime: 8,
        educationId: data.educations[0].id,
        learnLineId: data.learnLines.filter(e => e.name === "Computer Programming")[0].id,
        specialisationId: data.specialisations.filter(e => e.name === "Cloud Application Development")[0].id
      },
      {
        title: "Programming 6",
        period: 6,
        credit: 6,
        weekTime: 8,
        educationId: data.educations[0].id,
        learnLineId: data.learnLines.filter(e => e.name === "Computer Programming")[0].id,
        specialisationId: data.specialisations.filter(e => e.name === "Cloud Application Development")[0].id
      },
      {
        title: "@Work 1",
        period: 2,
        credit: 6,
        weekTime: 10,
        educationId: data.educations[0].id,
        learnLineId: data.learnLines.filter(e => e.name === "Workplace Learning")[0].id,
      },
      {
        title: "@Work 2",
        period: 4,
        credit: 6,
        weekTime: 10,
        educationId: data.educations[0].id,
        learnLineId: data.learnLines.filter(e => e.name === "Workplace Learning")[0].id,
      },
      {
        title: "@Work 3",
        period: 6,
        credit: 6,
        weekTime: 10,
        educationId: data.educations[0].id,
        learnLineId: data.learnLines.filter(e => e.name === "Workplace Learning")[0].id,
      },
      {
        title: "@Work 4",
        period: 7,
        credit: 15,
        weekTime: 30,
        educationId: data.educations[0].id,
        learnLineId: data.learnLines.filter(e => e.name === "Workplace Learning")[0].id,
      },
      {
        title: "@Work 5",
        period: 8,
        credit: 9,
        weekTime: 30,
        educationId: data.educations[0].id,
        learnLineId: data.learnLines.filter(e => e.name === "Workplace Learning")[0].id,
      },
    ]
    courses.forEach( async (course) => {
      promises.push(await createCourse(course));
    });
    return await Promise.all(promises);
  };

  /*
   * Create Models in Auth
  */
  await createCourses(1);
})();