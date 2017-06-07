/**
 *  socialMediaLinks
 *  @type {Object}
 */
export const socialMediaLinks = {
  facebook: '#',
  twitter: '#',
  pinterest: '#'
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
