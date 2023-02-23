# Ask A Local

Ask A Local connects expats moving to a new country with locals that can support them with accomplishing tasks that require communication in the official language—attending official appointments, flat hunting, setting up contracts with service providers, interviews, and more.

Check out the live project on Netlify ➡️ [Ask A Local](https://askalocal.netlify.app/).

## Purpose

For our final bootcamp project, our team was eager to work on an idea that allowed us to **practice and showcase our skills** while also addressing a **real-world problem/need**.

Have you ever moved to a country where you don't speak the local language? If so, you might be familiar with the mix of confusion, frustration, and terror that comes with not being able to understand (and be understood by) those around you.

Ask A Local is the app I wish I had available when I moved to Berlin and spoke no German. One could say I embody the user persona for this product.

## Tech Stack

**[Client](https://github.com/a-maffei/frontend-askalocal):** React, CSS

**[Server](https://github.com/a-maffei/backend-askalocal):** Node.js, Express, MongoDB, Mongoose

**Deployed with:** Netlify (client), Render (server)

## Overview

Dark mode available 🌚

**An expat can:**

- Create an account (including a profile picture) or log in
- Browse through offers created by locals
- Search for specific types of services
- Sort locals by city
- Sort offers by price and rating
- Visit each local's personal profile
- Book the local by selecting a date and service
- Leave locals a rating and review

<p align="center">
  <img width="500" margin="0 auto" alt="header" src="https://user-images.githubusercontent.com/113006001/220897004-ea3b137e-90dd-4990-b0df-5030f200eb39.png"><br>
<img width="500" alt="preview" src="https://user-images.githubusercontent.com/113006001/220897024-82cbd11d-2fa3-4a39-a987-84ae299c3aab.png"><br>
<img width="500" alt="user-profile" src="https://user-images.githubusercontent.com/113006001/220898097-b80ba2d9-1792-45dd-90e2-0a9dcf1c2c04.png"><br>
<img width="500" alt="localinfo" src="https://user-images.githubusercontent.com/113006001/220897276-97a2e847-6a0e-4686-b0a5-3d0919ba1733.png"><br>
<img width="500" alt="booking" src="https://user-images.githubusercontent.com/113006001/220897093-e5a555b8-150a-4730-8022-6882822e2aa1.png"><br>
 </p>

 **A local can:**

- Create an account (including a profile picture) or log in
- Build a personal profile with bio, services offered, prices, and description of each service
- Check out offers by other locals
- Visit other locals' profiles

<p align="center">
<img width="500" alt="profcreate" src="https://user-images.githubusercontent.com/113006001/220897352-65b97cfe-6c80-408c-b397-906b629ee7af.png"><br>
<img width="500" alt="localprof" src="https://user-images.githubusercontent.com/113006001/220897318-3048c3af-bf97-404e-95c7-03719049dca6.png"><br>
</p>

## Demo

_Demo link to be added soon_


## Reflection

This project was built in 2 weeks, at the end of my Full-Stack Web and App Development bootcamp at WBS Coding school.

**What I enjoyed while building this app:**
_Everything_. This final project was a great way to practice, test, and expand what I had learned in the months prior. Every day brough many challenges and many breakthroughs. I enjoyed both equally––from building dedicated **user flows** for two different types of users, to implementing authentication through **JWT**, to building **React components** that can be used flexibly and efficiently, to incorporating **Cloudinary** to store media, to making the **UI** cohesive across pages and responsive across devices.

**What I struggled with while building this app:**
As an individual, I struggled the most with my perfectionism (which doesn't get along well with building an MVP in two weeks) and with the authentication flows. Right when I thought they were working smoothly, a new error would appear. I solved these issues through a mix of persistance, console.log-s, and collaboration with my teammates. As a group, we didn't have enough time to implement a chat component with Socket.io, which we were eager to add.

**Things I learned through building this app:**
Among others, working with more complex MongoDB collection schemas than I was used to, implementing authentication and authorization for different user types, managing React forms that include both media and text, finding efficient ways for data to be passed from component to component in React. I also learned about how to foster effective and supportive group dynamics in high pressure and high speed environments.

## Wishes for V2

- A more functional signup, including email confirmation of created account
- A more functional login, including the option to retrieve a forgotten password
- A social login feature
- An update to the payment logic (now it's unclear if you pay per hour or per single task)
- A chat feature to allow expats and locals to communicate, built with Socket.io
- Once the chat is complete, a new placement and logic for the "leave a review" feature (now it's in the same page where you proceed with payment, which is counterintutive)


## Acknowledgements

- [Pexels for the photos](https://www.pexels.com/)
- [UnDraw for the illustrations](https://undraw.co/)
- [IconScout for the payment icons](https://iconscout.com/contributors/xinhstudio)

## Authors

- [@a-maffei](https://www.github.com/a-maffei)
- [@apollosport](https://www.github.com/apollosport)
- [@macanjus](https://www.github.com/macanjus)
