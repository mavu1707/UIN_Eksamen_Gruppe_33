import sanityClient from '@sanity/client';

const options ={
  projectId: "r80dc349",
  dataset: "production"
}

const client = sanityClient({
  ...options,
  apiVersion: '2021-08-31',
  useCdn: true
});

export default client;