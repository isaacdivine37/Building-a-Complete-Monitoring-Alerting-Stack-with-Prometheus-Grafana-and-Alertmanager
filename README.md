# Complete Monitoring and Alerting Stack with Prometheus, Grafana, and Alertmanager
For more detailed guidline on how to go about this: refer back to my blog : https://isaacdivine37.hashnode.dev/building-a-complete-monitoring-and-alerting-stack-with-prometheus-grafana-and-alertmanager

<img width="3840" height="967" alt="mssq" src="https://github.com/user-attachments/assets/45bf68b4-9ecb-47cc-af34-22820dcd13c7" />


 In this demo ,you’ll build a **complete, production-inspired monitoring stack** from scratch that includes:  
- ✅ A sample web application (Node.js) to monitor  
- ✅ Infrastructure metrics (CPU, RAM, Disk, Network)  
- ✅ Docker container resource usage with cAdvisor  
- ✅ HTTP uptime monitoring with Blackbox Exporter  
- ✅ Real-time **email alerts** via Alertmanager  
- ✅ Beautiful Grafana dashboards (industry-standard IDs)  
- ✅ All deployed with **Docker Compose** (portable & reproducible)  

---

## 🛠️ Prerequisites
- Docker + Docker Compose installed  
  - [Docker Desktop](https://docs.docker.com/desktop/) (Windows/Mac)  
  - [Docker Engine](https://docs.docker.com/engine/install/) (Linux)  
- Verify installation:
  ```bash
  docker --version
  docker-compose --version

  📂 Project Structure
prometheus-grafana-alerts-stack/
│── app.js                # Simple Node.js app to monitor
│── package.json           # App metadata
│── Dockerfile             # App container definition
│── docker-compose.yml     # Full monitoring stack
│── prometheus.yml         # Prometheus config
│── alert_rules.yml        # Alerting rules
│── alertmanager.yml       # Email alert config
│── blackbox.yml           # HTTP monitoring config

🚀 Setup & Run

Clone this repository and spin up the stack:

git clone https://github.com/<your-username>/prometheus-grafana-alerts-stack.git

cd prometheus-grafana-alerts-stack

docker-compose up -d

🌐 Accessing the Stack

App (Node.js): http://localhost:3001

Prometheus: http://localhost:9090

Grafana: http://localhost:3000
 (user: admin, pass: Admin123!)

Alertmanager: http://localhost:9093

📊 Dashboards

Import these Grafana dashboard IDs:

1860 → Node Exporter Full (Host Metrics)

14282 → Docker & Containers

7587 → Blackbox Exporter (HTTP Probes)

📢 Alerts

Prometheus evaluates rules from alert_rules.yml, including:

🔥 High CPU usage (> 80%)

🔥 High memory usage (> 85%)

🚨 Application down (via Blackbox probe)

⚠️ Container restarted unexpectedly

Alerts are routed via Alertmanager. Email notifications are configured in alertmanager.yml.

🧪 Testing Alerts

Stop the app:

docker stop my-app


Within 60s, check Prometheus alerts at http://localhost:9090/alerts
.

You’ll also receive an email notification if SMTP is configured.

Restart the app:

docker start my-app

⚠️ Common Errors

Prometheus won’t start → run promtool check config prometheus.yml

Grafana shows "No Data" → check Prometheus targets at http://localhost:9090/targets

Alerts not firing → verify alert_rules.yml and Alertmanager config

Email alerts failing → confirm Gmail App Password & allow “Less secure apps”

📚 References

Prometheus Docs

Grafana Docs

Alertmanager Docs

📜 License

This project is open source under the MIT License
.

