import React from 'react';

const StartProjectForm = () => {
  return (
    <form
      action="https://formspree.io/f/mqepqlrg"
      method="POST"
    >
      <label>
        What kind of project do you want?
        <input type="text" name="projectType" required />
      </label>
      <label>
        Your email:
        <input type="email" name="email" required />
      </label>
      <label>
        Your name:
        <input type="text" name="name" required />
      </label>
      <label>
        Description:
        <textarea name="description" required></textarea>
      </label>
      <button type="submit">Send</button>
    </form>
  );
};

export default StartProjectForm;