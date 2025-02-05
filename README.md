# Service Sharing Web Application (ElectroCare)

## Overview
ElectroCare is a service-sharing web application designed to connect users with service providers for electronic repairs and maintenance. Users can explore various services, book appointments, and track their service progress, while service providers can manage their offerings efficiently.

## Live Site
[ElectroCare Live Site](https://electronics-repair-9c5bf.web.app)

## Features
### For Users:
1. Explore various services provided by different service providers.
2. Book any service by selecting a servicing date and providing special instructions.
3. View booked services along with their status (Pending, Working, or Completed).
4. If an unauthorized user attempts to access others' information, they will be immediately logged out.

### For Service Providers:
1. Add new services with detailed descriptions.
2. Update and delete their services as necessary.
3. Update the service status according to the servicing progress (Pending, Working, or Completed).

## Technologies Used
- Frontend: React, Tailwind CSS
- Backend: Node.js, Express
- Database: Firebase
- Authentication: Firebase Authentication

  ## Dependencies:
  ```
    "dependencies": {
    "aos": "^2.3.4",
    "axios": "^1.7.9",
    "date-fns": "^4.1.0",
    "firebase": "^11.1.0",
    "localforage": "^1.10.0",
    "match-sorter": "^8.0.0",
    "react": "^18.3.1",
    "react-datepicker": "^7.5.0",
    "react-dom": "^18.3.1",
    "react-hook-form": "^7.54.2",
    "react-icons": "^5.4.0",
    "react-router-dom": "^7.1.0",
    "react-toastify": "^11.0.2",
    "sort-by": "^1.2.0",
    "sweetalert2": "^11.15.3",
    "swiper": "^11.1.15",
    "swiper-react": "^1.0.0"
  }
  ```

## Getting Started
### Prerequisites
- Node.js
- Firebase Account

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/electrocare.git
   ```
2. Navigate to the project directory:
   ```bash
   cd electrocare
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Configure Firebase keys in the `.env` file.

### Running the Application
```bash
npm start
```

## Usage
1. Users can browse and book electronic repair services.
2. Service providers can manage their service listings and update their statuses.
3. Secure authentication ensures user data privacy and protection.

## Security
- User roles are enforced to prevent unauthorized access.
- Firebase Authentication provides secure login and access control.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request for review.

## License
This project is licensed under the MIT License.

## Contact
For any inquiries or support, please email us at [support@electrocare.com](mailto:support@electrocare.com).

## Acknowledgments
- Inspired by service-sharing platforms.
- Special thanks to the DevSafeX team for their support and collaboration.

