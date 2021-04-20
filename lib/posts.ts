import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData(local) {
  const localPostsDirectory = path.join(postsDirectory, local);
  // Get file names under /posts
  const fileNames = fs.readdirSync(localPostsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(localPostsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds(locales) {
  const localPostsDirectory = path.join(postsDirectory, 'en');
  const fileNames = fs.readdirSync(localPostsDirectory);

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  // create paths
  const paths = locales.reduce(
    (acc, next) => [
      ...acc,
      ...fileNames.map((fileName) => ({
        params: {
          id: fileName.replace(/\.md$/, ""),
        },
        locale: next,
      })),
    ],
    []
  );

  return paths;
}

export async function getPostData(id,locale) {
  const localPostsDirectory = path.join(postsDirectory, locale);
  console.log(localPostsDirectory);
  const fullPath = path.join(localPostsDirectory, `${id}.md`);
  console.log(fullPath);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
