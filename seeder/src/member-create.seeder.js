import faker from '@faker-js/faker';
import client from './graphql_client';
import { htmlToSlateAST } from '@graphcms/html-to-slate-ast';
import { generateValueBetweenMinAndMax, generateTimestamps } from './utils';
import { mutationCreateMember, mutationCreatePortfolio, mutationCreateProject } from './ql/Mutators';

(async () => {

  // Generate random body
  
  const getRandomBody = (n = 1) => {
    let body = '';
    for(let i = 0; i < n; i++) {
      body += `<h2>${faker.lorem.text(1)}</h2><p>${faker.lorem.paragraphs(generateValueBetweenMinAndMax(2, 10), '</p><p>')}</p>`;
    }
    return body;
  }
  /*
   * Create a User (Local Provider)
  */
  const createUser = async ({ email, userName, password, firstname, lastname, role, about, imageUrl }) => {
    try {
      const { createPortfolio } = await client.request(mutationCreatePortfolio, { firstname, lastname, about, imageUrl });
      const { createMember } = await client.request(mutationCreateMember, { email, userName, password, role, portfolioId: createPortfolio.id });
      const projects = createProjects(faker.datatype.number({min: 1, max: 6}), createMember.id)

      if (!createMember) {
        throw new Error(`Can't create the user with username ${createMember.email}!`);
      }

      console.log(`User created with username ${createMember.email}!`)
    } catch (error) {
      console.log(error);
    }
  };
  /*
   * Create a User (Local Provider)
  */
  const createProject = async ({ name, imageUrl, description, memberId}) => {
    try {
      const { createProject } = await client.request(mutationCreateProject, { name, imageUrl, description, memberId });

      if (!createProject) {
        throw new Error(`Can't create the user with username ${createProject.name}!`);
      }

      console.log(`Project created with name ${createProject.name}!`)
    } catch (error) {
      console.log(error);
    }
  };

  /*
   * Create Users via promises
  */
  const createUsers = async (n = 20) => {
    const promises = [];
    for (let i=0; i < n;i++) {
      const firstName = faker.name.firstName();
      const lastName = faker.name.lastName();
      const roles = ['Student', 'Teacher']
      const randomRole = roles[faker.datatype.number({min: 0, max: roles.length - 1})]
      const ast = await htmlToSlateAST(getRandomBody(generateValueBetweenMinAndMax(1, 3))); 

      promises.push(await createUser({ email: faker.internet.email(firstName, lastName), userName: faker.internet.userName(firstName ,lastName), password: 'w84pgmGent', firstname: firstName, lastname: lastName, role: randomRole, about: { children: ast } , imageUrl: faker.image.avatar()}));
    }
    return await Promise.all(promises);
  };

  /*
   * Create projects via promises
  */
  const createProjects = async (n = 1, memberId) => {
    const promises = [];
    for (let i=0; i < n;i++) {
      promises.push(await createProject({ name: faker.lorem.word(), imageUrl: faker.image.imageUrl(), description: faker.lorem.paragraph(), memberId}));
    }
    return await Promise.all(promises);
  };



  /*
   * Create Models in Auth
  */
  await createUsers(40);

})();