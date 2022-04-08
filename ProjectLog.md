# goatpad

## Test user credentials

**email:** goat@grammerhub.org  
**password:** goatpass

## LOG

---

### March 2, 2022

Stripped entire app down to barebones, import demonstration "Button" component from `@goatpad/library`, change title on HTML file

---

### March 18, 2022

Setup firebase and added basic example of adding data to firestore database

---

### March 19, 2022

Setup Firebase Auth, created test user and added example code for handling login flow with test user

Add directory structure and descriptions of proposed contents
Moved `firebase.ts` to config folder.

---

### March 21, 2022

Add components for viewing and creating posts and connected form to database

---

### March 22, 2022

Add CSS Reset
Adjust styles in Navbar
Add Footer component

---

### March 23 - April 6, 2022

Refactor Auth to context
Refactor Posts to context
Successfully signing up with email and password
Successfully logging in and out
Successfully adding posts to database
Successfully adding user id to posts
Add tags to posts
Conditionally render login/signup and logout buttons based on if a user is signed in
Add React-hook-form and validation tools yup and hookform-resolvers to handle form input validation
Add firebase-tools to allow deployment of site

---

---

## MONOLITHIC REFACTOR - April 6, 2022

Decided that monorepo was unnecessary. So, for ease of use by new members, converted client to a monolithic repo.

---

---

### April 7, 2022

Integrate React-hook-form and yup validation in all existing forms
Automatic deploys to live site on accepted PR's to main branch
Many attempts for PR preview deployment on firebase.

---

### April 8, 2022

Create develop branch on grammerhub repo and set it as the default branch for PR's
Add GitHub action to deploy a preview on accepted PR to develop branch
Add `.travis.yml` and setup a build workflow
