/**
 *  socialMediaLinks
 *  @type {Object}
 */
export const socialMediaLinks = {
  facebook: 'http://www.facebook.com',
  twitter: 'http://www.twitter.com',
  pinterest: 'http://www.pinterest.com'
}

/**
 *  getSocialMediaLinks
 *  @param  {String} socialName
 *  @return {String}
 */
export const getSocialMediaLinks = socialName => {
  if (socialMediaLinks[socialName]) {
    return socialMediaLinks[socialName]
  }
}
