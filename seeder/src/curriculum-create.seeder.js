import faker from '@faker-js/faker';
import client from './graphql_client';
import { htmlToSlateAST } from '@graphcms/html-to-slate-ast';
import { generateValueBetweenMinAndMax, generateTimestamps } from './utils';
import { mutationCreateEducation, mutationCreateSpecialisation, mutationCreateLearnLine } from './ql/Mutators';

(async () => {
  /*
   * Create a Education (Local Provider)
  */
  const createEducation = async ({ name, code, description, schoolYear }) => {
    try {
      const { createEducation } = await client.request(mutationCreateEducation, { name, code, description, schoolYear });

      if (!createEducation) {
        throw new Error(`Can't create the Education with name ${createEducation.name}!`);
      }

      console.log(`Education created with name ${createEducation.name}!`)
    } catch (error) {
      console.log(error);
    }
  };

  /*
   * Create a Specialisation (Local Provider)
  */
  const createSpecialisation = async ({ name }) => {
    try {
      const { createSpecialisation } = await client.request(mutationCreateSpecialisation, { name });

      if (!createEducation) {
        throw new Error(`Can't create the Education with name ${createEducation.name}!`);
      }

      console.log(`Education created with name ${createEducation.name}!`)
    } catch (error) {
      console.log(error);
    }
  };

  /*
   * Create a LearnLine (Local Provider)
  */
  const createLearnLine = async ({ name, code, color }) => {
    try {
      const { createLearnLine } = await client.request(mutationCreateLearnLine, { name, code, color });

      if (!createLearnLine) {
        throw new Error(`Can't create the LearnLine with name ${createLearnLine.name}!`);
      }

      console.log(`LearnLine created with name ${createLearnLine.name}!`)
    } catch (error) {
      console.log(error);
    }
  };

  /*
   * Create a Curriculum via promises
  */
  const createCurriculum = async (n = 1) => {
    const promises = [];
    for (let i=0; i < n;i++) {
      const name = "Graduaat Programmeren";
      const code = "PGM-22"
      const description = "Academiejaren 2021–2022 en 2022–2023"
      const schoolYear = 2022
      const specialisations =  [
        {name: "Cloud Application Development"},
        {name: "Interactive Media Development"}
      ]
      const learnLines =  [
        {name: "Business & Communication", code: "CGR", color:{ hex: '#29158a' }},
        {name: "Applied Information Technology", code: "DDW", color:{ hex: '#29158a' }},
        {name: "Creative Design & Development", code: "OPR", color:{ hex: '#29158a' }},
        {name: "Computer Programming", code: "TDP", color:{ hex: '#29158a' }},
        {name: "Workplace Learning", code: "IDC", color:{ hex: '#29158a' }},
      ]

      promises.push(await createEducation({ name, code, description, schoolYear}));
      specialisations.forEach( async (specialisation) => {
        promises.push(await createSpecialisation({ name: specialisation.name }));
      });
      learnLines.forEach( async (learnLine) => {
        promises.push(await createLearnLine({ name: learnLine.name, code: learnLine.code, color: learnLine.color }));
      });
    }
    return await Promise.all(promises);
  };

  /*
   * Create Models in Auth
  */
  await createCurriculum(1);

})();