const { createClient } = require('next-sanity');

const previewClient = createClient({
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2021-03-25',
  useCdn: true
});

const getClient = () => previewClient;

module.exports = async () => {
  const query = `
  *[_type == "redirect"]{ 
    destination,
    source,
    permanent
  }
`;
  const redirects = await getClient().fetch(query);

  redirects.push({
    source: '/directory/shopping/:slug',
    destination: '/news/shopping',
    permanent: true,
  },{
    source: '/directory/shopping/:slug/:slug',
    destination: '/news/shopping',
    permanent: true,
  },{
    source: '/directory/:slug/:slug(\\student-discount)',
    destination: '/news/:slug', 
    permanent: false,
  },{
    source: '/directory/:slug',
    destination: '/whats-on',
    permanent: true,
  },{
    source: '/directory/:slug/:slug',
    destination: '/whats-on',
    permanent: true,
  },{
    source: '/directory/:slug/:slug/:slug',
    destination: '/whats-on',
    permanent: true,
  })

  return redirects;
};