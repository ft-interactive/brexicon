export default () => ({ // eslint-disable-line

  // link file UUID
  id: 'a05b2be8-eef5-11e6-930f-061b01e23655',

  // canonical URL of the published page
  // https://ig.ft.com/trump-cabinet/ get filled in by the ./configure script
  url: 'https://ig.ft.com/sites/brexicon/',

  // To set an exact publish date do this:
  //       new Date('2016-05-17T17:11:22Z')
  publishedDate: new Date('2017-02-15T06:24:41Z'),

  headline: 'Brexicon: your guide to the language of leaving the EU',

  // summary === standfirst (Summary is what the content API calls it)
  summary: 'What you need to know on Article 50, the customs union and other issues facing the UK',

  topic: {
    name: 'Brexit',
    url: 'https://www.ft.com/topics/themes/Brexit',
  },

  relatedArticle: {
    text: '',
    url: '',
  },

  mainImage: {
    title: '',
    description: '',
    url: '',
    width: 2048, // ensure correct width
    height: 1152, // ensure correct height
  },

  // Byline can by a plain string, markdown, or array of authors
  // if array of authors, url is optional
  byline: [
    { name: 'Conor Sullivan', url: 'https://www.ft.com/stream/authorsId/Q0ItQ1M1NDMyMQ==-QXV0aG9ycw==' },
    { name: 'Vanessa Houlder', url: 'https://www.ft.com/stream/authorsId/Q0ItMDAwMDk2MA==-QXV0aG9ycw==' },
  ],

  // Appears in the HTML <title>
  title: 'Brexicon: Your guide to the language of leaving the EU',

  // meta data
  description: 'The FT guide to the language of Brexit',

  /*
  TODO: Select Twitter card type -
        summary or summary_large_image

        Twitter card docs:
        https://dev.twitter.com/cards/markup
  */
  twitterCard: 'summary',

  /*
  TODO: Do you want to tweak any of the
        optional social meta data?
  */
  // General social
  socialImage: 'https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.prod.s3.amazonaws.com%2F80f20c42-ef07-11e6-ba01-119a44939bb6?source=ig&fit=scale-down&width=1200',
  // socialHeadline: '',
 // socialSummary:  'A guide to Donald Trump’s cabinet picks',

  // TWITTER
  // twitterImage: '',
  //twitterCreator: '@ft',
  tweetText: 'The @ft guide to the language of Brexit',
  // twitterHeadline:  '',

  // FACEBOOK
  // facebookImage: '',
  // facebookHeadline: '',

  tracking: {

    /*

    Microsite Name

    e.g. guffipedia, business-books, baseline.
    Used to query groups of pages, not intended for use with
    one off interactive pages. If you're building a microsite
    consider more custom tracking to allow better analysis.
    Also used for pages that do not have a UUID for whatever reason
    */
    // micrositeName: '',

    /*
    Product name

    This will usually default to IG
    however another value may be needed
    */
    // product: '',
  },
});
