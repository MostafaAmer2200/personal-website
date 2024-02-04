interface WorkNotesItem {
    [key: string]: string[];
  }

const WorkNotes: WorkNotesItem[] = [
    {
      "Cloud (AWS)": [
        "Developed and maintained containerized applications on EKS, ensuring applications are scalable and highly available",
        "Create CI/CD pipelines on Gitlab to automate account provisioning tasks on AWS, achieving best performance for internal customers on our cloud platform",
        "Utilized IaC tools like Terraform to build AWS modules to deploy resources to the cloud"
      ]
    },
    {
      "Machine Learning & Trading": [
        "Developed RNNs with LSTM cells using tensorflow to predict the next closing day price for all S&P500 stocks",
        "Generated trading signals using regression tree models using RSI, MACD & MAs as input features and performed backtesting on historical data",
        "Built trading applications using TD Ameritrade API to deploy high frequency trading algorithms in Golang on real-time data to perform live trading"
      ]
    },
    {
        "Web Development": [
            "Built & designed responsive web applications like this website using React.JS and Typescript",
            "Developed production grade RESTful APIs using Flask and improved scalability for handling concurrent API requests.",
            "Implemented secure authentication and authorization mechanisms in Flask, such as JWT (JSON Web Tokens) or OAuth, ensuring secure access to protected resources and preventing unauthorized access. This resulted in enhanced data security and protection against malicious activities"
        ]
    }
    
  ];


export default WorkNotes
