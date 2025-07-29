🧑‍💻 Task Title:
TASK 13: Implement File Upload Feature for Book Cover Images
📌 Overview:
This assignment focused on enabling secure and efficient file upload of book cover images within a full-stack book management application. The app uses MongoDB, Express.js, React.js, and Cloudinary for cloud-based image hosting.
✅ Project Setup:

- Frontend: React.js
- Backend: Node.js + Express.js
- Database: MongoDB Atlas
- Image Hosting: Cloudinary
- Deployment:
  - Frontend: Vercel — https://bookmanager-bymayank.vercel.app 
  - Backend: Render — https://book-manager-webapp.onrender.com
🧪 Test Summary
Scenario	Result
Upload valid image (JPG, PNG)	✅ Pass
Upload invalid file types	✅ Error shown
Upload large image (>5MB)	✅ Handled
Cloudinary image saved	✅ Pass
MongoDB coverImageUrl stored correctly	✅ Pass
Image preview before submit	✅ Pass
Image renders on book list/detail pages	✅ Pass
⚙️ Deployment Instructions
Backend (Render):

- Build command: npm install
- Start command: node server.js
- Environment Variables:
  - PORT, MONGO_URI, CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET

Frontend (Vercel):

- Build command: npm run build
- Output directory: build
- Environment Variable:
  - REACT_APP_API_URL=https://book-manager-webapp.onrender.com


📦 Repository
GitHub: https://github.com/bijjalmayank/book-manager-webapp.git
✅ Evaluation Criteria Checklist
Criteria	Completed
Secure & efficient file upload	✅ Yes
Seamless frontend integration	✅ Yes
Handled errors & edge cases	✅ Yes
Testing completed (manual)	✅ Yes
Documentation + screenshots + deployment	✅ Yes

🔗 Screenshot
Book Creation Form (with Image Upload Field)
https://drive.google.com/file/d/1oKSGgy6EaxSH1vkPI562kkrfubds7yfI/view?usp=sharing
https://drive.google.com/file/d/1zx5tDpYyC71lhjR6B_-yTOhNwP3ysoNA/view?usp=sharing
https://drive.google.com/file/d/1R_f7VOYxVEkeB7gG0FKS5WxWC0x5JMqB/view?usp=sharing
https://drive.google.com/file/d/1fvYgPMHxzKV5KOvWvPxbLXdZc89Rz7On/view?usp=sharing

