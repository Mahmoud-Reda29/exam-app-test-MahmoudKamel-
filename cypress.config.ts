import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'sogmyv',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      DOMAIN: "http://localhost:3000",
      SUBJECTS_GET: "https://exam.elevateegy.com/api/v1/subjects"
    },
  },
});
