import axios from "axios";

// API
export default axios.create({
  baseURL:
    "https://carolineolds-strapi-dev.q.starberry.com/properties?_limit=50",
});
