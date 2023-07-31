export const homeQuery = `{
  "home": *[_type == "home"][0]{
    title,
    heroVideo,
    heroVideoMobile,
    heroVideoPosterDesktop {
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
    heroVideoPosterMobile {
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
    introContentHeading,
    introContentText,
    introContentImages[] {
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
    textTicker1Words[],
    textTicker2Words[],
    whatsOnSectionHeading,
    whatsOnSectionText,
    whatsOnSectionImage {
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
  },
  "global": *[_type == "global"][0]{
    iOsAppDownloadLink,
    androidAppDownloadLink
  },
  "policies": *[_type == "policies"] {
    title,
    slug {
      current
    }
  },
  "contact": *[_type == "contact"][0] {
    emailAddresss,
    socials[] {
      name,
      url
    }
  }
}`

export const aboutQuery = `{
  "about": *[_type == "about"][0]{
    title,
    heroImage[] {
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
    introText,
    firstSectionHeading,
    firstSectionText,
    firstSectionImage {
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
    secondSectionHeading,
    secondSectionText,
    secondSectionButtonLink-> {
      slug {
        current
      }
    },
    secondSectionImage {
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
    eventCalendarSectionHeading,
    eventCalenderSectionText,
    eventCalenderSectionPdfDownload {
      asset-> {
        ...
      },
    },
    eventCalendarSectionImage {
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
    thirdSectionHeading,
    thirdSectionText,
    thirdSectionImage {
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
    crimeReductionInitiatives[] {
      title,
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
      excerpt,
      article-> {
        title,
        slug {
          current
        }
      }
    },
    crimeReductionButtonLink-> {
      slug {
        current
      }
    },
    ourPeopleSectionHeading,
    ourPeopleSectionText,
    ourPeopleSectionBoardOfDirectorsLink,
    ourPeopleSectionTheIinTeamLink,
    ourPeopleSectionImage {
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
    keyResourcesSectionText,
    keyResourcesDownloads[] {
      title,
      link,
      file {
        asset-> {
          ...
        },
      }
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
  },
  "policies": *[_type == "policies"] {
    title,
    slug {
      current
    }
  },
  "contact": *[_type == "contact"][0] {
    emailAddress,
    socials[] {
      name,
      url
    }
  }
}`

export const whatsOnQuery = `{
  "whatsOn": *[_type == "whatsOn"][0]{
    title,
    introText,
    imageBlocks[] {
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
      },
      captionText
    },
    seo {
      ...,
      shareGraphic {
        asset->
      }
    }
  },
  "policies": *[_type == "policies"] {
    title,
    slug {
      current
    }
  },
  "contact": *[_type == "contact"][0] {
    emailAddress,
    socials[] {
      name,
      url
    }
  }
}`

export const contactQuery = `{
  "contact": *[_type == "contact"][0]{
    emailAddresss,
    formIntroText,
    title,
    socials[] {
      name,
      url
    },
    seo {
      ...,
      shareGraphic {
        asset->
      }
    }
  },
  "policies": *[_type == "policies"] {
    title,
    slug {
      current
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
  "policies": *[_type == "policies"] {
    title,
    slug {
      current
    }
  },
  "contact": *[_type == "contact"][0] {
    emailAddress,
    socials[] {
      name,
      url
    }
  },
  "cats": *[_type == "categories"]{
    title,
    slug {
      current
    }
  }
}`

export const catQuery = `{
  "cat": *[_type == "categories" && slug.current == $slug][0]{
    title,
    heroText,
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
  },
  "policies": *[_type == "policies"] {
    title,
    slug {
      current
    }
  },
  "contact": *[_type == "contact"][0] {
    emailAddress,
    socials[] {
      name,
      url
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
    "more": *[_type == "news"][0..6]{
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
  },
  "policies": *[_type == "policies"] {
    title,
    slug {
      current
    }
  },
  "contact": *[_type == "contact"][0] {
    emailAddress,
    socials[] {
      name,
      url
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

export const policiesSlugQuery = `{
  "current": *[_type == "policies" && slug.current == $slug][0]{
    title,
    slug {
      current
    },
    content,
    seo {
      ...,
      shareGraphic {
        asset->
      }
    }
  },
  "policies": *[_type == "policies"] {
    title,
    slug {
      current
    }
  },
  "contact": *[_type == "contact"][0] {
    emailAddress,
    socials[] {
      name,
      url
    }
  }
}`