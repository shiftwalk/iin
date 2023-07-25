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
    "latestNews": *[_type == "news"]{
      title,
      category->{
        title,
        slug {
          current
        }
      },
      teaserImage {
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
      slug {
        current
      }
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
    "latestNews": *[_type == "news"]{
      title,
      category->{
        title,
        slug {
          current
        }
      },
      teaserImage {
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
      slug {
        current
      }
    },
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
    teaserImage {
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
    slug {
      current
    },
    seo {
      ...,
      shareGraphic {
        asset->
      }
    }
  },
  "cats": *[_type == "categories"]{
    title,
    slug {
      current
    }
  },
}`

export const catQuery = `{
  "cat": *[_type == "categories" && slug.current == $slug][0]{
    title,
    slug {
      current
    },
    "cats": *[_type == "categories"]{
      title,
      slug {
        current
      }
    },
    "news": *[_type == "news" && category->slug.current == $slug]{
      title,
      category->{
        title,
        slug {
          current
        }
      },
      teaserImage {
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
  }
}`

export const newsSlugQuery = `{
  "current": *[_type == "news" && slug.current == $slug][0]{
    title,
    introText,
    postDate,
    category->{
      title,
      slug {
        current
      }
    },
    content[] {
      ...,
      image {
        asset-> {
          ...
        },
        caption,
        alt,
        hotspot {
          x,
          y
        },
      }
    },
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
    slug {
      current
    },
    seo {
      ...,
      shareGraphic {
        asset->
      }
    },
    "more": *[_type == "news"][0..8]{
      title,
      category->{
        title,
        slug {
          current
        }
      },
      teaserImage {
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
      slug {
        current
      },
      seo {
        ...,
        shareGraphic {
          asset->
        }
      }
    },
    "related": *[_type == "news"][0..2]{
      title,
      category->{
        title,
        slug {
          current
        }
      },
      teaserImage {
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