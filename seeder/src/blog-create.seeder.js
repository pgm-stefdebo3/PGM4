import faker from '@faker-js/faker';
import client from './graphql_client';
import { generateValueBetweenMinAndMax, generateTimestamps } from './utils';
import { mutationCreateBlog } from './ql/Mutators';

(async () => {
  // Get all the users
  // let { members } = await client.request(queryGetMembers);

  /*
   * Create a Blog (Local Provider)
  */
  const createBlog = async ({ name, description, memberId }) => {
    try {
      const { createBlog } = await client.request(mutationCreateBlog, { name, description });

      if (!createBlog) {
        throw new Error(`Can't create the Blog with name ${createBlog.name}!`);
      }

      console.log(`Blog created with name ${createBlog.name}!`)
    } catch (error) {
      console.log(error);
    }
  };

  /*
   * Create communities via promises
  */
  const createBlogs = async (n = 20) => {
    const promises = [];
    for (let i=0; i < n;i++) {
      promises.push(await createBlog({name: faker.lorem.word(), description: faker.lorem.paragraph()}));
    }
    return await Promise.all(promises);
  };

  /*
   * Create communities
  */
  await createBlogs(10);

})();