# Waste Food Management

A full-stack web application to manage and reduce food waste by connecting donors with recipients. The platform allows users to donate surplus food, request food, and track donations, aiming to minimize food wastage and help those in need.

## Features

- **User Authentication:** Register, login, and secure access for donors and recipients.
- **Food Donation:** Donors can list surplus food items for donation.
- **Food Requests:** Recipients can request available food donations.
- **Notifications:** Real-time updates for donation status and requests.
- **Dashboard:** Overview of donations, requests, and user stats.
- **Contact & Support:** Contact form for queries and support.

## Tech Stack

### Frontend
- React (TypeScript)
- Tailwind CSS
- Vite

### Backend
- Node.js
- Express.js
- MongoDB (via Mongoose)

## Folder Structure

```
Waste-Food-Management/
├── backend/        # Node.js/Express API
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   └── server.js
├── frontend/       # React client app
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── contexts/
│   ├── hooks/
│   ├── lib/
│   └── ...
├── Screenshots/    # UI screenshots
├── README.md
└── package.json
```

## Getting Started

### Prerequisites
- Node.js & npm
- MongoDB

### Backend Setup
```bash
cd backend
npm install
npm start
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### Environment Variables
Create a `.env` file in the `backend` folder with:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

## Screenshots
Screenshots of the main pages are available in the `Screenshots/` folder.

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License.
