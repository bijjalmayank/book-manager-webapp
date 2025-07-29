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

<img width="1920" height="1080" alt="Screenshot (5)" src="https://github.com/user-attachments/assets/643d5174-f589-46f8-a85d-3d7ef7661b6a" />
<img width="1920" height="1080" alt="Screenshot (6)" src="https://github.com/user-attachments/assets/6f05238e-eb2f-4580-9b02-110a23df827d" />
<img width="1920" height="1080" alt="Screenshot (7)" src="https://github.com/user-attachments/assets/9217f900-fb9f-458b-8b41-3efa0c73a4fa" />
<img width="1920" height="1080" alt="Screenshot (8)" src="https://github.com/user-attachments/assets/4fffd335-9a35-4f89-b994-10d66e97bb29" />
<img width="782" height="422" alt="Screenshot 2025-07-25 044126" src="https://github.com/user-attachments/assets/8f14bc59-8222-44d4-ab5d-1778827b8fc2" />


