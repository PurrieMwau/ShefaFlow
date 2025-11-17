# ShefaFlow

**ShefaFlow** is a financial education platform that empowers small investors in Kenya with personalized investment guidance. We make financial information accessible, unbiased, and tailored to your budget—starting from as little as 100 Kenyan Shillings.

## 🎯 Mission

Financial information is scattered, technical, or biased. Small investors feel excluded because there are no tools for someone with 100, 200, or even 1,000 Kenyan shillings. ShefaFlow bridges this gap by offering:

- **One-stop shop** for all your investment answers
- **Comparison tools** for different investment options (MMFs, SACCOs, Bonds, Shares)
- **Personalized suggestions** based on your budget
- **Pros and cons** for each investment option
- **Trusted links** to official institutions and providers
- **Free access** with optional premium features

## ✨ Features

### Current Features
- **Multi-page website** with Home, About, Services, Gallery, and Contact pages
- **Investment Calculator**: Enter your amount and get personalized investment suggestions
- **Contact Form**: Reach out with questions or suggestions
- **Database Integration**: Store contact messages and investment options
- **Email Notifications**: Receive notifications when users contact you
- **Responsive Design**: Works on desktop, tablet, and mobile devices

### Investment Options Supported
- **Money Market Funds (MMF)** - Low risk, 8-11% returns
- **SACCO Savings** - Medium risk, 10-12% dividends
- **Government Treasury Bonds** - Low risk, 12-14% returns
- **NSE Shares** - High risk, market-dependent returns

## 🛠️ Tech Stack

### Backend
- **Framework**: Flask 3.0.0
- **Database**: SQLAlchemy + SQLite (default)
- **Database Migrations**: Flask-Migrate 4.0.5
- **Validation**: email-validator 2.2.0
- **Server**: Gunicorn 21.2.0 (production)

### Frontend
- **HTML5** with semantic markup
- **CSS3** with responsive design and Flexbox/Grid
- **Vanilla JavaScript** for form validation and interactivity

### Development
- **Python 3.8+**
- **Virtual Environment**: venv

## 📁 Project Structure

```
SHEFAFLOW/
├── README.md                    # This file
├── requirements.txt             # Python dependencies
├── .venv/                       # Virtual environment (create locally)
└── shefaflow/                   # Main package
    ├── app.py                   # Flask application & routes
    ├── models.py                # Database models (InvestmentOption, ContactMessage)
    ├── config.py                # Configuration settings
    ├── seed.py                  # Seed script for initial data
    ├── requirements.txt         # Dependencies
    ├── templates/               # HTML templates
    │   ├── index.html          # Home page
    │   ├── about.html          # About page
    │   ├── services.html       # Services page
    │   ├── gallery.html        # Gallery page
    │   └── contact.html        # Contact page
    ├── stylesheet/
    │   └── styles.css          # Main stylesheet
    └── scripts/
        └── scripts.js          # JavaScript functions
```

## 🚀 Getting Started

### Prerequisites
- **Python 3.8** or higher
- **Git**
- **pip** (comes with Python)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd SHEFAFLOW
   ```

2. **Create a virtual environment**
   ```bash
   python -m venv .venv
   ```

3. **Activate the virtual environment**

   **Windows (PowerShell):**
   ```powershell
   .\.venv\Scripts\Activate.ps1
   ```

   **macOS/Linux:**
   ```bash
   source .venv/bin/activate
   ```

4. **Install dependencies**
   ```bash
   pip install -r shefaflow/requirements.txt
   ```

5. **Initialize the database**
   ```bash
   cd shefaflow
   python seed.py
   ```

### Running the Development Server

1. **Activate the virtual environment** (if not already active)

2. **Set environment variables** (optional, for email functionality)
   ```powershell
   $env:FLASK_ENV = 'development'
   $env:FLASK_APP = 'app.py'
   $env:SMTP_USER = 'your-email@gmail.com'
   $env:SMTP_PASS = 'your-app-password'
   $env:CONTACT_RECIPIENT = 'recipient@example.com'
   ```

3. **Start the Flask development server**
   ```bash
   python app.py
   ```

4. **Open in your browser**
   ```
   http://127.0.0.1:5000
   ```

The server will reload automatically when you make changes (in development mode).

## 📧 Email Configuration

To enable email notifications when users submit the contact form:

1. **Get SMTP credentials** (example: Gmail)
   - Enable 2-factor authentication on your Gmail account
   - Generate an [App Password](https://myaccount.google.com/apppasswords)

2. **Set environment variables**
   ```bash
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   CONTACT_RECIPIENT=where-to-send-messages@example.com
   ```

3. **Test the contact form** on the website

If email is not configured, contact messages are still saved to the database.

## 🗄️ Database

### Models

#### InvestmentOption
Stores available investment options users can choose from.

```python
id              # Auto-increment ID
name            # Investment name (e.g., "Money Market Fund")
category        # Type (MMF, SACCO, Bond, Share)
risk_level      # Risk assessment (Low, Medium, High)
expected_return # Expected return rate (e.g., "8-11% per year")
min_investment  # Minimum amount to invest
description     # Detailed explanation
learn_more_url  # Link to official provider/resource
```

#### ContactMessage
Stores all messages submitted via the contact form.

```python
id          # Auto-increment ID
name        # Sender's name
email       # Sender's email
subject     # Message subject
message     # Message body
created_at  # Timestamp of submission
```

### Running Migrations

If you modify the models, update the database schema:

```bash
cd shefaflow
flask db migrate -m "description of changes"
flask db upgrade
```

## 🎨 Styling & Customization

### CSS Variables
The stylesheet uses CSS custom properties for easy theming:

```css
:root {
  --primary: #007BFF;           /* Main brand color */
  --primary-700: #0056b3;       /* Darker shade */
  --bg: #f9f9f9;                /* Background */
  --text: #333;                 /* Text color */
  --muted: #666;                /* Muted text */
  --success: #28a745;           /* Success messages */
  --warning: #ffc107;           /* Warning messages */
  --error: #dc3545;             /* Error messages */
}
```

To customize colors, edit `shefaflow/stylesheet/styles.css`.

### Responsive Design
The CSS includes media queries for mobile (max-width: 768px) and small screens (max-width: 480px).

## 📊 API Endpoints

### Investment Suggestions
**POST** `/api/invest`

Request:
```json
{
  "amount": 5000
}
```

Response:
```json
[
  {
    "name": "Money Market Fund (MMF)",
    "category": "MMF",
    "risk": "Low",
    "expected_return": "8–11% per year",
    "min_investment": 100,
    "description": "Short-term fund investing in T-bills...",
    "learn_more_url": "https://www.cma.or.ke/"
  }
]
```

### Contact Form
**POST** `/contact`

Form data:
```
name: string
email: string
subject: string
message: string
```

## 🧪 Testing

Currently, manual testing is recommended. To test key features:

1. **Test investment calculator**: Home page → "Get started" → enter amount
2. **Test contact form**: Contact page → fill form → submit
3. **Check database**: `shefaflow.db` file in the main directory
4. **Check email**: Verify emails are sent (if SMTP configured)

## 🔒 Security Considerations

- **Secret Key**: Change `SECRET_KEY` in `config.py` for production
- **Email Credentials**: Use environment variables, never hardcode passwords
- **Database**: SQLite is for development; use PostgreSQL/MySQL for production
- **HTTPS**: Enable HTTPS in production using a reverse proxy (Nginx) or platform (Heroku, AWS)
- **CORS**: Configure Cross-Origin Resource Sharing if needed
- **Input Validation**: All user inputs are validated on the server

## 📝 Environment Variables

Create a `.env` file in the project root (not committed to git):

```
FLASK_ENV=development
FLASK_APP=shefaflow.app
SECRET_KEY=your-secret-key-here
DATABASE_URL=sqlite:///shefaflow.db
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_RECIPIENT=recipient@example.com
```

Load it with `python-dotenv`:
```bash
pip install python-dotenv
```

Then in `app.py`:
```python
from dotenv import load_dotenv
load_dotenv()
```

## 🚢 Deployment

### Heroku
1. Install Heroku CLI
2. Create a `Procfile`:
   ```
   web: gunicorn shefaflow.app:app
   ```
3. Create a `runtime.txt`:
   ```
   python-3.11.0
   ```
4. Deploy:
   ```bash
   heroku login
   heroku create your-app-name
   git push heroku main
   ```

### Other Platforms
- **AWS**: Use Elastic Beanstalk or EC2 + Gunicorn
- **DigitalOcean**: Use App Platform or Droplet
- **PythonAnywhere**: Simple Python hosting
- **Render**: Free tier available

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m 'Add your feature'`
4. Push to branch: `git push origin feature/your-feature`
5. Open a Pull Request

## 📚 Resources

### Kenyan Investment Information
- [Capital Markets Authority (CMA)](https://www.cma.or.ke/)
- [SASRA (SACCO Regulator)](https://sasra.go.ke/)
- [Central Bank of Kenya](https://www.centralbank.go.ke/)
- [Nairobi Securities Exchange (NSE)](https://www.nse.co.ke/)

### Flask Documentation
- [Flask Official Docs](https://flask.palletsprojects.com/)
- [SQLAlchemy ORM](https://docs.sqlalchemy.org/)
- [Flask-Migrate](https://flask-migrate.readthedocs.io/)

## 📞 Support

For questions or issues:
- **Email**: contact@shefaflow.com (when configured)
- **GitHub Issues**: Create an issue on the repository
- **Contact Form**: Use the website contact page

## 📄 License

This project is licensed under the MIT License. See `LICENSE` file (if present) for details.

Live Link -  https://purriemwau.github.io/ShefaFlow/
