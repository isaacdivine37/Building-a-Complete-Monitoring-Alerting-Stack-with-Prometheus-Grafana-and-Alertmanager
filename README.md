# Building-a-Complete-Monitoring-Alerting-Stack-with-Prometheus-Grafana-and-Alertmanager
✨ Features
✅ Real Application Monitoring — Sample Node.js app included
✅ Infrastructure Metrics — CPU, RAM, Disk, Network via Node Exporter
✅ Docker Container Metrics — Resource usage per container via cAdvisor
✅ HTTP Uptime Monitoring — Blackbox Exporter checks app health
✅ Real Email Alerts — Configured via Gmail (App Password)
✅ Beautiful Grafana Dashboards — Industry-standard IDs imported with 1 click
✅ 100% Reproducible — Single docker-compose up command
✅ Zero Broken Configs — All files included, tested, and version-pinned

📦 Stack Components
COMPONENT
PURPOSE
PORT
Prometheus
Metrics collection & alert evaluation
9090
Grafana
Visualization dashboards
3000
Alertmanager
Alert routing & email notifications
9093
Node Exporter
Host system metrics (CPU, RAM, Disk, etc.)
9100
cAdvisor
Docker container resource usage
8080
Blackbox Exporter
HTTP uptime & response probing
9115
Sample Node.js App
Monitored target application
3001

⚙️ Prerequisites
Docker + Docker Compose installed
Docker Desktop (Windows/Mac)
Docker Engine (Linux)
Gmail account with 2-Step Verification enabled (for email alerts)
Verify installation:

bash


1
2
docker --version
docker-compose --version
🚀 Quick Start
1. Clone & Navigate
bash


1
2
git clone https://github.com/your-username/prometheus-grafana-alerts-stack.git
cd prometheus-grafana-alerts-stack
💡 Replace your-username with your actual GitHub username after uploading. 

2. Configure Alertmanager (Optional but Recommended)
Edit alertmanager.yml and replace:

yaml


1
2
3
4
smtp_from: 'your-email@gmail.com'
smtp_auth_username: 'your-email@gmail.com'
smtp_auth_password: 'your-16-digit-app-password'
to: 'your-email@gmail.com'
🔐 Get Gmail App Password:
Go to https://myaccount.google.com/apppasswords → Create “Mail” app password → Paste 16-digit code. 

3. Start the Stack
bash


1
docker-compose up -d
Wait 30-60 seconds for all services to initialize.

🔍 Access & Verify
SERVICE
URL
CREDENTIALS (IF ANY)
Prometheus
http://localhost:9090
—
Grafana
http://localhost:3000
admin
/
Admin123!
Alertmanager
http://localhost:9093
—
cAdvisor
http://localhost:8080
—
Your App
http://localhost:3001
—

✅ Check Targets: http://localhost:9090/targets — all should be UP

📊 Import Grafana Dashboards
After logging into Grafana (admin / Admin123!):

Click + → Import on the left sidebar
Enter Dashboard ID → Load → Select “Prometheus” as data source
ID
DASHBOARD NAME
PURPOSE
1860
Node Exporter Full
Host system metrics
14282
Docker & Containers
Container resource usage
7587
Blackbox Exporter Status
HTTP probe & uptime monitoring

🚨 Test Alerts
Trigger an Alert
bash


1
docker stop my-app
➡️ Wait 60 seconds → Check http://localhost:9090/alerts → MyAppDown should be FIRING
📬 You’ll receive an email alert within 1-2 minutes!

Resolve the Alert
bash


1
docker start my-app
➡️ Wait 60 seconds → Alert auto-resolves → You’ll get a resolved email!

🧹 Cleanup
Stop and remove containers:

bash


1
2
docker-compose down
docker rm -f my-app
Remove built image:

bash


1
docker rmi my-monitored-app
Optional: Clean up Grafana volume

bash


1
docker volume prune
📁 Project Structure


1
2
3
4
5
6
7
8
9
10
.
├── app.js                     # Sample Node.js app to monitor
├── package.json               # App metadata & dependencies
├── Dockerfile                 # Builds the sample app
├── docker-compose.yml         # Defines all monitoring services
├── prometheus.yml             # Prometheus scrape config
├── alert_rules.yml            # Alerting rules (CPU, RAM, App Down, etc.)
├── alertmanager.yml           # Email alert config (Gmail)
├── blackbox.yml               # HTTP probe config
└── README.md                  # You are here!
🛡️ Security Note
This setup uses hardcoded credentials and open ports for local development and learning purposes only.
