import fs from 'fs'
import path from 'path'

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
}

const blogDir = path.join(process.cwd(), 'content/blog')

export function getAllBlogSlugs(): string[] {
  if (!fs.existsSync(blogDir)) {
    return []
  }
  return fs.readdirSync(blogDir)
    .filter(file => file.endsWith('.md'))
    .map(file => file.replace('.md', ''))
}

export function getBlogPost(slug: string): BlogPost | null {
  const filePath = path.join(blogDir, `${slug}.md`)
  
  if (!fs.existsSync(filePath)) {
    return null
  }

  const content = fs.readFileSync(filePath, 'utf-8')
  const lines = content.split('\n')
  
  let frontmatterEnd = 0
  let title = ''
  let excerpt = ''
  
  for (let i = 1; i < lines.length; i++) {
    if (lines[i].startsWith('---')) {
      frontmatterEnd = i
      break
    }
    if (lines[i].startsWith('title: ')) {
      title = lines[i].replace('title: ', '').trim()
    }
    if (lines[i].startsWith('excerpt: ')) {
      excerpt = lines[i].replace('excerpt: ', '').trim()
    }
  }

  const postContent = lines.slice(frontmatterEnd + 1).join('\n').trim()

  return {
    slug,
    title,
    excerpt,
    content: postContent,
  }
}

export function getAllBlogPosts(): BlogPost[] {
  const slugs = getAllBlogSlugs()
  return slugs
    .map(slug => getBlogPost(slug))
    .filter((post): post is BlogPost => post !== null)
}
