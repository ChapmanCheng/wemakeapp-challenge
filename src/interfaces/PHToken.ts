/**
 * Product Hunt Token type
 * Get your token here:
 * https://api.producthunt.com/v2/docs
 */

type PHToken = {
  access_token: string;
  token_type: string;
  scope: string;
};

export default PHToken;
