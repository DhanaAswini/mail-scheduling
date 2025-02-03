Mailing Scheduler
A Next.js application to schedule email campaigns with CRUD (Create, Read, Update, Delete) functionality.

Features
Create Mailing: Schedule a new mailing by selecting a mailer, list, and date/time.
Read Mailings: View a list of all scheduled mailings.
Update Mailing: Edit an existing scheduled mailing.
Delete Mailing: Remove a scheduled mailing.
Responsive Design: Built with Tailwind CSS for a clean and modern look.

Prerequisites
Node.js (v16 or higher)
npm (v7 or higher)

Setup Instructions
Clone the Repository:
git clone https://github.com/your-username/mailing-scheduler.git
cd mailing-scheduler

Install Dependencies:
npm install
Set Up Tailwind CSS:

Tailwind CSS is already configured in the project. If you need to reconfigure it, run:
npx tailwindcss init -p

Run the Development Server:
npm run dev

Open the Application:
Visit http://localhost:3000 in your browser.

Mock API
The project uses a mock API for demonstration purposes. The following endpoints are available:
Fetch Mailers: Returns a list of mailer templates.
Fetch Lists: Returns a list of mailing lists.
Create Mailing: Saves a new mailing.
Fetch Mailings: Returns a list of scheduled mailings.
Update Mailing: Updates an existing mailing.
Delete Mailing: Deletes a scheduled mailing.
