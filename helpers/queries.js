export const homeQuery = `{
  "home": *[_type == "home"][0]{
    title,
    heroImage {
      asset-> {
        ...
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
    seo {
      ...,
      shareGraphic {
        asset->
      }
    }
  }
}`

export const aboutQuery = `{
  "about": *[_type == "about"][0]{
    title,
    seo {
      ...,
      shareGraphic {
        asset->
      }
    }
  }
}`

export const whatsOnQuery = `{
  "whatsOn": *[_type == "whatsOn"][0]{
    title,
    seo {
      ...,
      shareGraphic {
        asset->
      }
    }
  }
}`

export const contactQuery = `{
  "contact": *[_type == "contact"][0]{
    title,
    seo {
      ...,
      shareGraphic {
        asset->
      }
    }
  }
}`

export const newsQuery = `{
  "news": *[_type == "news"]{
    title,
    category->{
      title,
      slug {
        current
      }
    },
    slug {
      current
    },
    seo {
      ...,
      shareGraphic {
        asset->
      }
    }
  }
}`

export const newsSlugQuery = `{
  "current": *[_type == "news" && slug.current == $slug][0]{
    title,
    category->{
      title,
      slug {
        current
      }
    },
    slug {
      current
    },
    seo {
      ...,
      shareGraphic {
        asset->
      }
    }
  }
}`

export const policiesQuery = `{
  "policies": *[_type == "policies"]{
    title,
    slug {
      current
    },
    seo {
      ...,
      shareGraphic {
        asset->
      }
    }
  }
}`