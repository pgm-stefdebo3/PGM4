import faker from '@faker-js/faker';
import { htmlToSlateAST } from '@graphcms/html-to-slate-ast';

import client from './graphql_client';
import { generateValueBetweenMinAndMax, generateTimestamps } from './utils';
import { mutationCreatePost } from './ql/Mutators';
import { queryGetMembers, queryGetBlogs } from './ql/Queries';

(async () => {
  /*
  *
  */
  const getRandomBody = (n = 1) => {
    let body = '';
    for(let i = 0; i < n; i++) {
      body += `<h2>${faker.lorem.text(1)}</h2><p>${faker.lorem.paragraphs(generateValueBetweenMinAndMax(2, 10), '</p><p>')}</p>`;
    }
    return body;
  }

  // Get all the members
  let { members } = await client.request(queryGetMembers);
  // Get all the blogs
  let { blogs } = await client.request(queryGetBlogs);

  /*
   * Create a Article = Post (Local Provider)
  */
  const createArticle = async ({ title, body, memberId, blog }) => {
    try {
      const { createPost } = await client.request(mutationCreatePost, { title, body, memberId, blog });

      if (!createPost) {
        throw new Error(`Can't create the post with title ${createPost.title}!`);
      }

      console.log(`Post created with title ${createPost.title}!`)
    } catch (error) {
      console.log(error);
    }
  };

  /*
   * Create posts via promises
  */
  const createPosts = async (n = 20) => {
    const promises = [];

    for (let i=0; i < n;i++) {
      const memberId = members[generateValueBetweenMinAndMax(0, members.length - 1)].id;
      const blog = blogs[generateValueBetweenMinAndMax(0, blogs.length - 1)];
      const ast = await htmlToSlateAST(getRandomBody(generateValueBetweenMinAndMax(1, 4))); 
      
      promises.push(await createArticle({title: faker.lorem.sentence(generateValueBetweenMinAndMax(4, 10)), body: { children: ast }, memberId: memberId, blog: blog }));
    };
    
    return await Promise.all(promises);
  };

  /*
   * Create posts
  */
  await createPosts(200);

})();