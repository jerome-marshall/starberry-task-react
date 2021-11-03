import axios from "axios";

export default axios.create({
  baseURL:
    "https://carolineolds-strapi-dev.q.starberry.com/properties?_limit=50",
});
