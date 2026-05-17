import { defineQuery } from "next-sanity";

const postFields = /* groq */ `
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  featured,
  readingTime,
  mainImage {
    asset->{ _id, url },
    alt
  },
  author->{
    _id,
    name,
    "slug": slug.current,
    role,
    bio,
    image { asset->{ _id, url }, alt },
    twitter,
    linkedin
  },
  categories[]->{
    _id,
    title,
    "slug": slug.current,
    description,
    color
  },
  body
`;

export const postsQuery = defineQuery(/* groq */ `
  *[_type == "post"] | order(publishedAt desc) {
    ${postFields}
  }
`);

export const featuredPostsQuery = defineQuery(/* groq */ `
  *[_type == "post" && featured == true] | order(publishedAt desc)[0...3] {
    ${postFields}
  }
`);

export const postBySlugQuery = defineQuery(/* groq */ `
  *[_type == "post" && slug.current == $slug][0] {
    ${postFields}
  }
`);

export const postSlugsQuery = defineQuery(/* groq */ `
  *[_type == "post" && defined(slug.current)]{ "slug": slug.current }
`);

export const categoriesQuery = defineQuery(/* groq */ `
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    description,
    color,
    "postCount": count(*[_type == "post" && references(^._id)])
  }
`);

export const postsByCategoryQuery = defineQuery(/* groq */ `
  *[_type == "post" && $slug in categories[]->slug.current] | order(publishedAt desc) {
    ${postFields}
  }
`);

export const relatedPostsQuery = defineQuery(/* groq */ `
  *[_type == "post" && slug.current != $slug && count(categories[@._ref in ^.^.categories[]._ref]) > 0]
    | order(publishedAt desc)[0...3] {
    ${postFields}
  }
`);
